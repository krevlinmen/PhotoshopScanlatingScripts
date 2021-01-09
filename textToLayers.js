/* 
<javascriptresource>
  <name>AutoTypeSetting</name>
  <about>A program that automatically inputs text from files</about>
  <category>PhotoshopScanlatingScripts</category>
</javascriptresource>
*/

/* -------------------------------------------------------------------------- */
/*                                Documentation                               */
/*            https://www.adobe.com/devnet/photoshop/scripting.html           */
/* -------------------------------------------------------------------------- */
/*                         User Interface Created With                        */
/*                         https://scriptui.joonas.me/                        */
/* -------------------------------------------------------------------------- */


/* ---------------------------- Global Constants ---------------------------- */

var identifier_Start = "["
var identifier_End = "]"
var ignorePageNumber = false
const defaultTextFormat = {
  size: 16,
  font: "CCWildWordsInt Regular",

  boxText: true,
  justification: Justification.CENTER,
  language: Language.BRAZILLIANPORTUGUESE,

  //border: "#FFFFFF-3-outer-false"
  // color(hex)-size(px)-position(outer/center/inner)-visible(false/true)
}


/* ---------------------------- Global Variables ---------------------------- */

var textFile;
var duplicatedLayer;

/* -------------------------------------------------------------------------- */
/*                                    Main                                    */
/* -------------------------------------------------------------------------- */


function main() {
  //? Save Configurations
  const savedDialogMode = app.displayDialogs
  //? Change Configurations
  app.displayDialogs = DialogModes.ERROR //change to NO by the End

  
  
  processText()

  //? Restaure Configurations
  app.displayDialogs = savedDialogMode
}

function processText() {

  const arrayFiles = app.openDialog()
  const uiObj = userInterface()
  var multipleArchives = false

  if (arrayFiles.length === 0)
    throwError("No files were selected!")
  else if (arrayFiles.length === 1)
    textFile = arrayFiles[0]
  else
    multipleArchives = true

  const imageArrayDir = multipleArchives ? filterFiles(arrayFiles) : undefined
  const content = createContentObj()

  delete content[0] //Deletes text before the first identifier

  function insertPageTexts(page) {
    const positionArray = calculatePositions(page)
    for (i in page)
      writeTextLayer(page[i], i < page.length - 1, positionArray[i])
  }

  if (multipleArchives) {
    for (key in content) { //File editing loop
      var keyNum = parseInt(key)
      if (ignorePageNumber && (keyNum - 1) >= imageArrayDir.length) break;

      var found = ignorePageNumber ? imageArrayDir[keyNum - 1] : findImage(imageArrayDir, keyNum)
      if (found === undefined) continue;

      open(found)
      cleanFile()
      insertPageTexts(content[key]) //Page text Writing Loop
      saveAndClosefile(found)
      uiObj.progressBar.value += 1/imageArrayDir.length
    }
  } else {

    try {
      if (activeDocument)
        multipleArchives = false //useless
    } catch (error) {
      throwError("No document open.")
    }

    cleanFile()
    //? Getting the first valid key of 'content'
    insertPageTexts(content[content.keys()[0]])
  }
}

/* -------------------------------------------------------------------------- */
/*                                  Functions                                 */
/* -------------------------------------------------------------------------- */

/* ------------------------------- Prototypes ------------------------------- */

String.prototype.trim = function () {
  return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
};

String.prototype.startsWith = function (sub) {
  if (typeof sub !== "string") throwError("Parameter in startsWith is not a string", sub)
  return !sub.length || this.indexOf(sub) === 0
};

String.prototype.endsWith = function (sub) {
  if (typeof sub !== "string") throwError("Parameter in endsWith is not a string", sub)
  return !sub.length || this.slice(this.length - sub.length).indexOf(sub) === 0
};

String.prototype.endsWithArray = function (subArray) {
  for (i in subArray) {
    if (this.endsWith(subArray[i]))
      return true;
  }
  return false;
};

// Array.prototype.slice = function (start, end) {
//   const slice = []
//   for (i = start; i < end; i++) {
//     slice.push(this[i])
//   }
//   return slice
// }

Object.prototype.keys = function () {
  const arr = []
  for (k in this)
    arr.push(k)
  return arr
}

Object.prototype.copy = function () {
  const copy = {}
  for (k in this)
    copy[k] = this[k]
  return copy
}

/* --------------------------------- Helpers -------------------------------- */

function throwWarning(message) {
  alert("Warning: " + message)
}

function throwError(message, extra) {
  if (app.displayDialogs === DialogModes.NO) alert(message)
  else if (!(extra === undefined)) alert(extra)
  throw new Error(message)
}

function isNaN(p) {
  return p !== p
}

function notUndef(p) {
  return !(p === undefined)
}

function findImage(arr, num) {
  for (i in arr) {
    var str = arr[i].name
    if (num === parseInt(str.slice(0, str.lastIndexOf("."))))
      return arr[i]
  }
  return undefined
}

function getNumber(str) {
  return parseInt(str.slice(identifier_Start.length, str.length - identifier_End.length))
}

function isNewPage(line) {
  const res = line.startsWith(identifier_Start) && line.endsWith(identifier_End)
  if (ignorePageNumber)
    return res
  else
    return res && !isNaN(getNumber(line))
}

/* ------------------------------ File Handling ----------------------------- */

function saveAndClosefile(file) {
  const filePath = file.fullName
  getTypeFolder().visible = false

  function getSavePath() {
    const ext = ['.png', '.jpg', '.jpeg']
    for (i in ext)
      if (filePath.endsWith(ext[i]))
        return filePath.slice(0, filePath.length - ext[i].length)
  }

  const saveFile = File(getSavePath() + '.psd')
  activeDocument.saveAs(saveFile)
  activeDocument.close()
}

function openTextFile() {
  if (!textFile || !textFile.name.endsWith('.txt')) {
    throwError("No text file was selected!")
  }
  textFile.encoding = 'UTF8'; // set to 'UTF8' or 'UTF-8'
  textFile.open("r");
  const rawText = textFile.read();
  textFile.close();
  return rawText
}

function filterFiles(arrayFiles) {
  const imageArray = []
  for (i in arrayFiles) {
    var file = arrayFiles[i]
    if (!file.name.endsWithArray(['.txt', '.png', '.jpeg', '.jpg', 'psd', 'psb']))
      throwError("One or more files are not supported by this script!\nThis script supports the extensions:\n.png, .jpg, .jpeg, .psd, .psb, .txt")
    else if (file.name.endsWith('.txt'))
      textFile = file
    else
      imageArray.push(file)
  }
  imageArray.sort()
  return imageArray
}


function createContentObj() {

  //? Split text into array of texts
  const rawText = openTextFile()
  const textArray = rawText.split("\n")

  const content = {
    0: []
  }
  var current = 0

  for (t in textArray) {
    var line = textArray[t].trim()

    if (isNewPage(line)) {
      current = ignorePageNumber ? current + 1 : getNumber(line)
      content[current] = []
    } else if (current && line.length) { //ERROR
      content[current].push(line)
    }
  }

  return content
}


/* ------------------------------ Text Handling ----------------------------- */


function createGroupFolder(folderName) {
  folder = activeDocument.layerSets.add()
  folder.name = folderName
  return folder
}

function getTypeFolder() {
  var textFolder;
  try {
    //? Try find a folder with name "Type"
    textFolder = activeDocument.layerSets.getByName("Text Layers")
  } catch (error) {
    //? If not found, create one
    textFolder = createGroupFolder("Text Layers")
  }
  return textFolder;
}

function formatLayer(TextLayer, format) {
  //? if (format === undefined) return;
  const txt = TextLayer.textItem

  if (notUndef(format.font)) txt.font = getFont(format.font).postScriptName
  if (notUndef(format.size)) txt.size = format.size
  if (notUndef(format.boxText)) txt.kind = format.boxText ? TextType.PARAGRAPHTEXT : TextType.POINTTEXT
  if (notUndef(format.justification)) txt.justification = format.justification
  if (notUndef(format.language)) txt.language = format.language
}

function getFont(fontName) {
  //? Loop through every font
  for (i = 0; i < app.fonts.length; i++)
    //? search a font with the name including 'fontName' 
    if (app.fonts[i].name.indexOf(fontName) > -1)
      return app.fonts[i]
  //? else return "Arial" by default
  throwWarning("The font specified was not found! Using Arial as replacement")
  return getFont("Arial")
}

function writeTextLayer(text, activateDuplication, positionArray, format) {

  function defaultTextLayer() {
    //* Creating PlaceHolder Layer
    const txtLayer = getTypeFolder().artLayers.add()
    txtLayer.name = "PlaceHolder Layer"
    txtLayer.kind = LayerKind.TEXT

    //* Default Formatting
    formatLayer(txtLayer, defaultTextFormat)
    return txtLayer;
  }

  const txtLayer = duplicatedLayer === undefined ? defaultTextLayer() : duplicatedLayer
  duplicatedLayer = undefined;

  if (activateDuplication)
    duplicatedLayer = txtLayer.duplicate()

  //* Set Text
  txtLayer.textItem.contents = text
  txtLayer.name = text

  if (format) formatLayer(txtLayer, format)

  //? Positioning
  txtLayer.textItem.position = [positionArray.xPosition, positionArray.yPosition]
  txtLayer.textItem.width = positionArray.width
  txtLayer.textItem.height = positionArray.height
}

//*Calculate the positioning of all the text in a page
function calculatePositions(textArray) {
  const yBorder = activeDocument.height * 0.02
  const xBorder = activeDocument.width * 0.02
  positionData = []
  const layerPosition = {
    yPosition: yBorder, //*Initially, the margin of the document
    xPosition: xBorder,
    height: undefined,
    width: activeDocument.width * 0.2 //*maybe customizable in the future
  }

  for (i in textArray) {
    layerPosition.height = (defaultTextFormat.size * 1.1) * Math.ceil(textArray[i].length / (layerPosition.width / (6 * defaultTextFormat.size / 7))) //! Attention
    positionData.push(layerPosition.copy())

    layerPosition.yPosition += yBorder + layerPosition.height //*yPosition += The size of the text Box + border 

    if (layerPosition.yPosition >= activeDocument.height) { //*if the bottom of the file is reached
      layerPosition.yPosition = yBorder //*Reset yPosition
      layerPosition.xPosition += xBorder + layerPosition.width //*increment the x value to create a new column
    }
  }
  return positionData
}

/* -------------------------------- Editing ------------------------------- */



function createEmptyLayer(name, format) {
  //? Default Format
  const defaultFormat = {
    color: undefined,
    locked: false,
    type: undefined //levels,text,etc
  }

  //? Use Default Format if 'format' not given
  if (format === undefined)
    format = defaultFormat

  const newLayer = activeDocument.artLayers.add()
  if (format.locked) newLayer.allLocked = true
  newLayer.name = name

  //if (format.size) txtLayer.textItem.size = format.size
  return newLayer

} //use more

function cleanFile() {
  try {
    var editL = activeDocument.backgroundLayer.duplicate()
    editL.name = "Camada para Edicao"
    activeDocument.backgroundLayer.name = "Camada Raw"
  } catch (error) {
    return
  }
  createGroupFolder("Layers")
  createEmptyLayer('baloes')
  createEmptyLayer('ReDraw')
}

/* -------------------------------------------------------------------------- */
/*                               User Interface                               */
/* -------------------------------------------------------------------------- */

function userInterface() {

  
/*
Code for Import https://scriptui.joonas.me — (Triple click to select): 
{"activeId":0,"items":{"item-0":{"id":0,"type":"Dialog","parentId":false,"style":{"enabled":true,"varName":null,"windowType":"Window","creationProps":{"su1PanelCoordinates":false,"maximizeButton":false,"minimizeButton":false,"independent":false,"closeButton":true,"borderless":false,"resizeable":false},"text":"AutoTypeSetting","preferredSize":[500,400],"margins":16,"orientation":"column","spacing":10,"alignChildren":["center","top"]}},"item-1":{"id":1,"type":"EditText","parentId":3,"style":{"enabled":true,"varName":"identifier_Start","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"[","justify":"left","preferredSize":[50,0],"alignment":null,"helpTip":null}},"item-2":{"id":2,"type":"StaticText","parentId":3,"style":{"enabled":true,"varName":"","creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Identifier in Start","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-3":{"id":3,"type":"Group","parentId":4,"style":{"enabled":true,"varName":"","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":"fill"}},"item-4":{"id":4,"type":"Panel","parentId":0,"style":{"enabled":true,"varName":null,"creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Page Indentifiers","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":null}},"item-5":{"id":5,"type":"Group","parentId":4,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["right","center"],"alignment":"fill"}},"item-6":{"id":6,"type":"StaticText","parentId":5,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Identifier in End","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-7":{"id":7,"type":"EditText","parentId":5,"style":{"enabled":true,"varName":"identifier_End","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"]","justify":"left","preferredSize":[50,0],"alignment":null,"helpTip":null}},"item-8":{"id":8,"type":"Divider","parentId":4,"style":{"enabled":true,"varName":null}},"item-10":{"id":10,"type":"Checkbox","parentId":4,"style":{"enabled":true,"varName":"ignorePageNumber","text":"Ignore Page Number","preferredSize":[0,0],"alignment":"center","helpTip":"This will ignore or not numbers between both identifiers","checked":false}},"item-11":{"id":11,"type":"Button","parentId":15,"style":{"enabled":true,"varName":"close","text":"Cancel","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-12":{"id":12,"type":"Button","parentId":15,"style":{"enabled":true,"varName":"runScript","text":"Execute","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-13":{"id":13,"type":"Progressbar","parentId":0,"style":{"enabled":true,"varName":"progressBar","preferredSize":[0,15],"alignment":"fill","helpTip":null}},"item-15":{"id":15,"type":"Group","parentId":0,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-16":{"id":16,"type":"StaticText","parentId":0,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"by KrevlinMen and ImSamuka","justify":"left","preferredSize":[0,0],"alignment":"right","helpTip":null}},"item-17":{"id":17,"type":"Panel","parentId":0,"style":{"enabled":true,"varName":null,"creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Files","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["center","top"],"alignment":null}},"item-18":{"id":18,"type":"Group","parentId":17,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-20":{"id":20,"type":"EditText","parentId":18,"style":{"enabled":true,"varName":null,"creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"...","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-21":{"id":21,"type":"Group","parentId":17,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"column","spacing":10,"alignChildren":["center","center"],"alignment":null}},"item-22":{"id":22,"type":"Panel","parentId":21,"style":{"enabled":true,"varName":null,"creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Files Found","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["center","top"],"alignment":null}},"item-23":{"id":23,"type":"Checkbox","parentId":18,"style":{"enabled":true,"varName":null,"text":"Folder Directory","preferredSize":[0,0],"alignment":null,"helpTip":null,"checked":true}},"item-24":{"id":24,"type":"Panel","parentId":0,"style":{"enabled":true,"varName":null,"creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Text Format","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["center","top"],"alignment":null}},"item-25":{"id":25,"type":"Group","parentId":24,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-26":{"id":26,"type":"StaticText","parentId":25,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Font","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-28":{"id":28,"type":"Group","parentId":24,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":11,"alignChildren":["center","center"],"alignment":"fill"}},"item-29":{"id":29,"type":"StaticText","parentId":28,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Font size","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-31":{"id":31,"type":"Group","parentId":24,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-34":{"id":34,"type":"Group","parentId":24,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-35":{"id":35,"type":"StaticText","parentId":34,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Justification","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-37":{"id":37,"type":"Checkbox","parentId":31,"style":{"enabled":true,"varName":null,"text":"Bounding Text Box","preferredSize":[0,0],"alignment":null,"helpTip":null,"checked":true}},"item-40":{"id":40,"type":"Checkbox","parentId":34,"style":{"enabled":true,"varName":null,"text":"Justified","preferredSize":[0,0],"alignment":null,"helpTip":null,"checked":false}},"item-41":{"id":41,"type":"Divider","parentId":0,"style":{"enabled":true,"varName":""}},"item-42":{"id":42,"type":"Divider","parentId":0,"style":{"enabled":true,"varName":null}},"item-43":{"id":43,"type":"DropDownList","parentId":25,"style":{"enabled":true,"varName":null,"text":"DropDownList","listItems":"font1,font2,font3","preferredSize":[0,0],"alignment":null,"selection":0,"helpTip":null}},"item-44":{"id":44,"type":"Slider","parentId":28,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"alignment":"fill","helpTip":null}},"item-45":{"id":45,"type":"EditText","parentId":28,"style":{"enabled":true,"varName":null,"creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"16","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-46":{"id":46,"type":"StaticText","parentId":22,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":true,"scrolling":true},"softWrap":false,"text":"File1.jpg\nFile2.jpg\nFile3.txt","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-47":{"id":47,"type":"Group","parentId":17,"style":{"enabled":true,"varName":"","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-48":{"id":48,"type":"Checkbox","parentId":47,"style":{"enabled":true,"varName":null,"text":"File Directory","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-49":{"id":49,"type":"EditText","parentId":47,"style":{"enabled":true,"varName":null,"creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"...","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-50":{"id":50,"type":"DropDownList","parentId":34,"style":{"enabled":true,"varName":null,"text":"DropDownList","listItems":"Left, Center, Right","preferredSize":[0,0],"alignment":null,"selection":1,"helpTip":null}}},"order":[0,4,3,2,1,5,6,7,8,10,17,18,23,20,47,48,49,21,22,46,24,25,26,43,28,29,44,45,31,37,34,35,50,40,15,11,12,41,13,42,16],"settings":{"importJSON":true,"indentSize":false,"cepExport":false,"includeCSSJS":true,"showDialog":true,"functionWrapper":false,"afterEffectsDockable":false,"itemReferenceList":"None"}}
*/ 

// WIN
// ===
var win = new Window("window"); 
win.text = "AutoTypeSetting"; 
win.preferredSize.width = 500; 
win.preferredSize.height = 400; 
win.orientation = "column"; 
win.alignChildren = ["center","top"]; 
win.spacing = 10; 
win.margins = 16; 

// PANEL1
// ======
var panel1 = win.add("panel", undefined, undefined, {name: "panel1"}); 
panel1.text = "Page Indentifiers"; 
panel1.orientation = "column"; 
panel1.alignChildren = ["left","top"]; 
panel1.spacing = 10; 
panel1.margins = 10; 

// GROUP1
// ======
var group1 = panel1.add("group", undefined, {name: "group1"}); 
group1.orientation = "row"; 
group1.alignChildren = ["left","center"]; 
group1.spacing = 10; 
group1.margins = 0; 
group1.alignment = ["fill","top"]; 

var statictext1 = group1.add("statictext", undefined, undefined, {name: "statictext1"}); 
statictext1.text = "Identifier in Start"; 

var identifier_Start = group1.add('edittext {properties: {name: "identifier_Start"}}'); 
identifier_Start.text = "["; 
identifier_Start.preferredSize.width = 50; 

// GROUP2
// ======
var group2 = panel1.add("group", undefined, {name: "group2"}); 
group2.orientation = "row"; 
group2.alignChildren = ["right","center"]; 
group2.spacing = 10; 
group2.margins = 0; 
group2.alignment = ["fill","top"]; 

var statictext2 = group2.add("statictext", undefined, undefined, {name: "statictext2"}); 
statictext2.text = "Identifier in End"; 

var identifier_End = group2.add('edittext {properties: {name: "identifier_End"}}'); 
identifier_End.text = "]"; 
identifier_End.preferredSize.width = 50; 

// PANEL1
// ======
var divider1 = panel1.add("panel", undefined, undefined, {name: "divider1"}); 
divider1.alignment = "fill"; 

var ignorePageNumber = panel1.add("checkbox", undefined, undefined, {name: "ignorePageNumber"}); 
ignorePageNumber.helpTip = "This will ignore or not numbers between both identifiers"; 
ignorePageNumber.text = "Ignore Page Number"; 
ignorePageNumber.alignment = ["center","top"]; 

// PANEL2
// ======
var panel2 = win.add("panel", undefined, undefined, {name: "panel2"}); 
panel2.text = "Files"; 
panel2.orientation = "column"; 
panel2.alignChildren = ["center","top"]; 
panel2.spacing = 10; 
panel2.margins = 10; 

// GROUP3
// ======
var group3 = panel2.add("group", undefined, {name: "group3"}); 
group3.orientation = "row"; 
group3.alignChildren = ["left","center"]; 
group3.spacing = 10; 
group3.margins = 0; 

var checkbox1 = group3.add("checkbox", undefined, undefined, {name: "checkbox1"}); 
checkbox1.text = "Folder Directory"; 
checkbox1.value = true; 

var edittext1 = group3.add('edittext {properties: {name: "edittext1"}}'); 
edittext1.text = "..."; 

// GROUP4
// ======
var group4 = panel2.add("group", undefined, {name: "group4"}); 
group4.orientation = "row"; 
group4.alignChildren = ["left","center"]; 
group4.spacing = 10; 
group4.margins = 0; 

var checkbox2 = group4.add("checkbox", undefined, undefined, {name: "checkbox2"}); 
checkbox2.text = "File Directory"; 

var edittext2 = group4.add('edittext {properties: {name: "edittext2"}}'); 
edittext2.text = "..."; 

// GROUP5
// ======
var group5 = panel2.add("group", undefined, {name: "group5"}); 
group5.orientation = "column"; 
group5.alignChildren = ["center","center"]; 
group5.spacing = 10; 
group5.margins = 0; 

// PANEL3
// ======
var panel3 = group5.add("panel", undefined, undefined, {name: "panel3"}); 
panel3.text = "Files Found"; 
panel3.orientation = "column"; 
panel3.alignChildren = ["center","top"]; 
panel3.spacing = 10; 
panel3.margins = 10; 

var statictext3 = panel3.add("group"); 
statictext3.orientation = "column"; 
statictext3.alignChildren = ["left","center"]; 
statictext3.spacing = 0; 

statictext3.add("statictext", undefined, "File1.jpg", {name: "statictext3", multiline: true, scrolling: true}); 
statictext3.add("statictext", undefined, "File2.jpg", {name: "statictext3", multiline: true, scrolling: true}); 
statictext3.add("statictext", undefined, "File3.txt", {name: "statictext3", multiline: true, scrolling: true}); 

// PANEL4
// ======
var panel4 = win.add("panel", undefined, undefined, {name: "panel4"}); 
panel4.text = "Text Format"; 
panel4.orientation = "column"; 
panel4.alignChildren = ["center","top"]; 
panel4.spacing = 10; 
panel4.margins = 10; 

// GROUP6
// ======
var group6 = panel4.add("group", undefined, {name: "group6"}); 
group6.orientation = "row"; 
group6.alignChildren = ["left","center"]; 
group6.spacing = 10; 
group6.margins = 0; 

var statictext4 = group6.add("statictext", undefined, undefined, {name: "statictext4"}); 
statictext4.text = "Font"; 

var dropdown1_array = ["font1","font2","font3"]; 
var dropdown1 = group6.add("dropdownlist", undefined, undefined, {name: "dropdown1", items: dropdown1_array}); 
dropdown1.selection = 0; 

// GROUP7
// ======
var group7 = panel4.add("group", undefined, {name: "group7"}); 
group7.orientation = "row"; 
group7.alignChildren = ["center","center"]; 
group7.spacing = 11; 
group7.margins = 0; 
group7.alignment = ["fill","top"]; 

var statictext5 = group7.add("statictext", undefined, undefined, {name: "statictext5"}); 
statictext5.text = "Font size"; 

var slider1 = group7.add("slider", undefined, undefined, undefined, undefined, {name: "slider1"}); 
slider1.minvalue = 0; 
slider1.maxvalue = 100; 
slider1.value = 50; 
slider1.alignment = ["center","fill"]; 

var edittext3 = group7.add('edittext {properties: {name: "edittext3"}}'); 
edittext3.text = "16"; 

// GROUP8
// ======
var group8 = panel4.add("group", undefined, {name: "group8"}); 
group8.orientation = "row"; 
group8.alignChildren = ["left","center"]; 
group8.spacing = 10; 
group8.margins = 0; 

var checkbox3 = group8.add("checkbox", undefined, undefined, {name: "checkbox3"}); 
checkbox3.text = "Bounding Text Box"; 
checkbox3.value = true; 

// GROUP9
// ======
var group9 = panel4.add("group", undefined, {name: "group9"}); 
group9.orientation = "row"; 
group9.alignChildren = ["left","center"]; 
group9.spacing = 10; 
group9.margins = 0; 

var statictext6 = group9.add("statictext", undefined, undefined, {name: "statictext6"}); 
statictext6.text = "Justification"; 

var dropdown2_array = ["Left","Center","Right"]; 
var dropdown2 = group9.add("dropdownlist", undefined, undefined, {name: "dropdown2", items: dropdown2_array}); 
dropdown2.selection = 1; 

var checkbox4 = group9.add("checkbox", undefined, undefined, {name: "checkbox4"}); 
checkbox4.text = "Justified"; 

// GROUP10
// =======
var group10 = win.add("group", undefined, {name: "group10"}); 
group10.orientation = "row"; 
group10.alignChildren = ["left","center"]; 
group10.spacing = 10; 
group10.margins = 0; 

var close = group10.add("button", undefined, undefined, {name: "close"}); 
close.text = "Cancel"; 

var runScript = group10.add("button", undefined, undefined, {name: "runScript"}); 
runScript.text = "Execute"; 

// WIN
// ===
var divider2 = win.add("panel", undefined, undefined, {name: "divider2"}); 
divider2.alignment = "fill"; 

var progressBar = win.add("progressbar", undefined, undefined, {name: "progressBar"}); 
progressBar.maxvalue = 100; 
progressBar.value = 50; 
progressBar.preferredSize.height = 15; 
progressBar.alignment = ["fill","top"]; 

var divider3 = win.add("panel", undefined, undefined, {name: "divider3"}); 
divider3.alignment = "fill"; 

var statictext7 = win.add("statictext", undefined, undefined, {name: "statictext7"}); 
statictext7.text = "by KrevlinMen and ImSamuka"; 
statictext7.alignment = ["right","top"]; 

win.show();



  return {win: win, progressBar: progressBar}
}


main()