/*
<javascriptresource>
  <name>AutoTypeSetter</name>
  <about>A program that automatically inputs text from files</about>
  <menu>automate</menu>
  <category>AutoTypeSetter</category>
</javascriptresource>
*/

#target 'photoshop'



/*
UI 1
{"activeId":50,"items":{"item-0":{"id":0,"type":"Dialog","parentId":false,"style":{"text":"Auto TypeSetter","preferredSize":[0,0],"margins":16,"orientation":"row","spacing":10,"alignChildren":["left","top"],"varName":"this.win","windowType":"Dialog","creationProps":{"su1PanelCoordinates":false,"maximizeButton":false,"minimizeButton":false,"independent":false,"closeButton":true,"borderless":false,"resizeable":false},"enabled":true}},"item-1":{"id":1,"type":"Panel","parentId":20,"style":{"text":"Page Indentifiers","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":null,"varName":null,"creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"enabled":true}},"item-4":{"id":4,"type":"StaticText","parentId":6,"style":{"text":"Start","justify":"left","preferredSize":[0,0],"alignment":null,"varName":null,"helpTip":null,"softWrap":true,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"enabled":true}},"item-5":{"id":5,"type":"EditText","parentId":6,"style":{"text":"[","preferredSize":[60,0],"alignment":null,"varName":"this.pageIdentifierPrefixBox","helpTip":null,"softWrap":false,"creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"enabled":true,"justify":"left"}},"item-6":{"id":6,"type":"Group","parentId":1,"style":{"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["right","center"],"alignment":"center","varName":null,"enabled":true}},"item-9":{"id":9,"type":"Panel","parentId":20,"style":{"text":"Configuration","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":null,"varName":null,"creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"enabled":true}},"item-19":{"id":19,"type":"Group","parentId":0,"style":{"preferredSize":[0,0],"margins":0,"orientation":"column","spacing":10,"alignChildren":["fill","top"],"alignment":null,"varName":null,"enabled":true}},"item-20":{"id":20,"type":"Group","parentId":0,"style":{"preferredSize":[0,0],"margins":0,"orientation":"column","spacing":10,"alignChildren":["fill","top"],"alignment":null,"varName":null,"enabled":true}},"item-21":{"id":21,"type":"Panel","parentId":19,"style":{"text":"Files","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["fill","top"],"alignment":null,"varName":null,"creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"enabled":true}},"item-22":{"id":22,"type":"StaticText","parentId":21,"style":{"text":"Select a Folder including:\n- A '.txt' file containing the text\n- Image Files ('1.png', '2.jpg')\n\n(if you don't select images, \nthe script will run on a open\ndocument)","justify":"left","preferredSize":[0,0],"alignment":null,"varName":null,"helpTip":null,"softWrap":true,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"enabled":true}},"item-36":{"id":36,"type":"Group","parentId":0,"style":{"preferredSize":[0,0],"margins":0,"orientation":"column","spacing":10,"alignChildren":["fill","top"],"alignment":null,"varName":null,"enabled":true}},"item-37":{"id":37,"type":"Button","parentId":36,"style":{"text":"OK","justify":"center","preferredSize":[0,0],"alignment":null,"varName":"this.confirmBtn","helpTip":null,"enabled":false}},"item-38":{"id":38,"type":"Button","parentId":36,"style":{"text":"Cancel","justify":"center","preferredSize":[0,0],"alignment":null,"varName":"this.cancelBtn","helpTip":null,"enabled":true}},"item-40":{"id":40,"type":"Checkbox","parentId":1,"style":{"text":"Ignore Page Number","preferredSize":[0,0],"alignment":null,"varName":"this.ignorePageNumberCB","helpTip":"This will ignore or not numbers between both identifiers","enabled":true,"checked":false}},"item-45":{"id":45,"type":"Group","parentId":1,"style":{"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["right","center"],"alignment":"center","varName":null,"enabled":true}},"item-46":{"id":46,"type":"StaticText","parentId":45,"style":{"text":"End","justify":"left","preferredSize":[0,0],"alignment":null,"varName":"","helpTip":null,"softWrap":true,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"enabled":true}},"item-47":{"id":47,"type":"EditText","parentId":45,"style":{"text":"]","preferredSize":[60,0],"alignment":null,"varName":"this.pageIdentifierSuffixBox","helpTip":null,"softWrap":false,"creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"enabled":true,"justify":"left"}},"item-48":{"id":48,"type":"Button","parentId":9,"style":{"enabled":true,"varName":"this.registerConfigBtn","text":"Register Config.","justify":"center","preferredSize":[0,0],"alignment":"fill","helpTip":"Select a JSON with your custom configuration to use!  :D"}},"item-49":{"id":49,"type":"Button","parentId":9,"style":{"enabled":false,"varName":"this.resetConfigBtn","text":"Reset Config.","justify":"center","preferredSize":[0,0],"alignment":"fill","helpTip":"This will delete the JSON you registered"}},"item-50":{"id":50,"type":"Button","parentId":9,"style":{"enabled":true,"varName":"this.openFolderBtn","text":"Open Folder","justify":"center","preferredSize":[0,0],"alignment":"fill","helpTip":""}},"item-52":{"id":52,"type":"Checkbox","parentId":21,"style":{"enabled":true,"varName":"this.selectAllFilesCB","text":"Select All Files Instead","preferredSize":[0,0],"alignment":null,"helpTip":"You need to select all files, not a folder containing these files","checked":false}},"item-53":{"id":53,"type":"StaticText","parentId":21,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":true,"text":"Formats Supported","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":"'.png', '.jpeg', '.jpg', '.psd', '.psb'"}},"item-55":{"id":55,"type":"Button","parentId":21,"style":{"enabled":true,"varName":"this.selectFilesBtn","text":"Select","justify":"center","preferredSize":[0,0],"alignment":"center","helpTip":null}},"item-56":{"id":56,"type":"StaticText","parentId":19,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":true,"text":"Created By \nKrevlinMen and ImSamuka","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-57":{"id":57,"type":"Panel","parentId":20,"style":{"text":"Text Group","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":null,"varName":null,"creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"enabled":true}},"item-58":{"id":58,"type":"Group","parentId":57,"style":{"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["right","center"],"alignment":"fill","varName":null,"enabled":true}},"item-59":{"id":59,"type":"StaticText","parentId":58,"style":{"text":"Name","justify":"left","preferredSize":[0,0],"alignment":null,"varName":null,"helpTip":null,"softWrap":true,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"enabled":true}},"item-60":{"id":60,"type":"EditText","parentId":58,"style":{"text":"Type","preferredSize":[80,0],"alignment":null,"varName":"this.groupNameBox","helpTip":null,"softWrap":false,"creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"enabled":true,"justify":"left"}},"item-64":{"id":64,"type":"Checkbox","parentId":57,"style":{"text":"Visible","preferredSize":[0,0],"alignment":null,"varName":"this.visibleGroupCB","helpTip":"Set Layer to Visible","enabled":true}},"item-65":{"id":65,"type":"Checkbox","parentId":57,"style":{"text":"Always Create Group","preferredSize":[0,0],"alignment":null,"varName":"this.alwaysCreateGroupCB","helpTip":"Always create a new group, otherwise add text layers to an existing group","enabled":true}},"item-66":{"id":66,"type":"Button","parentId":9,"style":{"enabled":true,"varName":"this.saveConfigBtn","text":"Save Config.","justify":"center","preferredSize":[0,0],"alignment":"fill","helpTip":"Quick Save Current Configuration"}}},"order":[0,20,1,6,4,5,45,46,47,40,57,58,59,60,64,65,9,66,48,50,49,19,21,22,53,52,55,56,36,37,38],"settings":{"importJSON":true,"indentSize":false,"cepExport":false,"includeCSSJS":true,"functionWrapper":false,"compactCode":false,"showDialog":true,"afterEffectsDockable":false,"itemReferenceList":"var"}}
*/

/*
UI 2
{"activeId":84,"items":{"item-0":{"id":0,"type":"Dialog","parentId":false,"style":{"text":"AutoTypeSetter","preferredSize":[0,0],"margins":16,"orientation":"row","spacing":10,"alignChildren":["left","top"],"varName":"win","windowType":"Dialog","creationProps":{"su1PanelCoordinates":false,"maximizeButton":false,"minimizeButton":false,"independent":false,"closeButton":true,"borderless":false,"resizeable":false},"enabled":true}},"item-1":{"id":1,"type":"Panel","parentId":20,"style":{"text":"Page Indentifiers","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":null,"varName":null,"creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"enabled":true}},"item-4":{"id":4,"type":"StaticText","parentId":6,"style":{"text":"Prefix","justify":"left","preferredSize":[0,0],"alignment":null,"varName":null,"helpTip":null,"softWrap":true,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"enabled":true}},"item-5":{"id":5,"type":"EditText","parentId":6,"style":{"text":">>","preferredSize":[60,0],"alignment":null,"varName":"pageIdentifierPrefixBox","helpTip":null,"softWrap":false,"creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"enabled":true,"justify":"left"}},"item-6":{"id":6,"type":"Group","parentId":1,"style":{"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["right","center"],"alignment":"center","varName":null,"enabled":true}},"item-9":{"id":9,"type":"Panel","parentId":19,"style":{"text":"Configuration","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":null,"varName":null,"creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"enabled":true}},"item-19":{"id":19,"type":"Group","parentId":0,"style":{"preferredSize":[0,0],"margins":0,"orientation":"column","spacing":10,"alignChildren":["fill","top"],"alignment":null,"varName":null,"enabled":true}},"item-20":{"id":20,"type":"Group","parentId":0,"style":{"preferredSize":[0,0],"margins":0,"orientation":"column","spacing":10,"alignChildren":["fill","top"],"alignment":null,"varName":null,"enabled":true}},"item-21":{"id":21,"type":"Panel","parentId":19,"style":{"text":"Files","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["fill","top"],"alignment":null,"varName":null,"creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"enabled":true}},"item-22":{"id":22,"type":"StaticText","parentId":21,"style":{"text":"Select a Folder including:\n- A '.txt' file containing the text\n- Image Files ('1.png', '2.jpg')\n\n(if you don't select images, \nthe script will run on a open\ndocument)","justify":"left","preferredSize":[0,0],"alignment":null,"varName":null,"helpTip":null,"softWrap":true,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"enabled":true}},"item-36":{"id":36,"type":"Group","parentId":0,"style":{"preferredSize":[0,0],"margins":0,"orientation":"column","spacing":10,"alignChildren":["fill","top"],"alignment":null,"varName":null,"enabled":true}},"item-37":{"id":37,"type":"Button","parentId":36,"style":{"text":"OK","justify":"center","preferredSize":[0,0],"alignment":null,"varName":"confirmBtn","helpTip":null,"enabled":false}},"item-38":{"id":38,"type":"Button","parentId":36,"style":{"text":"Cancel","justify":"center","preferredSize":[0,0],"alignment":null,"varName":"cancelBtn","helpTip":null,"enabled":true}},"item-40":{"id":40,"type":"Checkbox","parentId":1,"style":{"text":"Ignore Page Number","preferredSize":[0,0],"alignment":null,"varName":"ignorePageNumberCB","helpTip":"This will ignore or not numbers between both identifiers","enabled":true,"checked":false}},"item-45":{"id":45,"type":"Group","parentId":1,"style":{"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["right","center"],"alignment":"center","varName":null,"enabled":true}},"item-46":{"id":46,"type":"StaticText","parentId":45,"style":{"text":"Suffix","justify":"left","preferredSize":[0,0],"alignment":null,"varName":"","helpTip":null,"softWrap":true,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"enabled":true}},"item-47":{"id":47,"type":"EditText","parentId":45,"style":{"text":"","preferredSize":[60,0],"alignment":null,"varName":"pageIdentifierSuffixBox","helpTip":null,"softWrap":false,"creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"enabled":true,"justify":"left"}},"item-48":{"id":48,"type":"Button","parentId":9,"style":{"enabled":true,"varName":"registerConfigBtn","text":"Import Config","justify":"center","preferredSize":[0,0],"alignment":"fill","helpTip":"Select a JSON with your custom configuration to use!  :D"}},"item-49":{"id":49,"type":"Button","parentId":9,"style":{"enabled":false,"varName":"resetConfigBtn","text":"Reset Config","justify":"center","preferredSize":[0,0],"alignment":"fill","helpTip":"This will delete the JSON you registered"}},"item-50":{"id":50,"type":"Button","parentId":9,"style":{"enabled":true,"varName":"openFolderBtn","text":"Open Scripts Folder","justify":"center","preferredSize":[0,0],"alignment":"fill","helpTip":""}},"item-52":{"id":52,"type":"Checkbox","parentId":21,"style":{"enabled":true,"varName":"selectAllFilesCB","text":"Select Files Instead","preferredSize":[0,0],"alignment":null,"helpTip":"You need to select all files, not a folder containing these files","checked":false}},"item-53":{"id":53,"type":"StaticText","parentId":21,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":true,"text":"Formats Supported","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":"'.png', '.jpeg', '.jpg', '.psd', '.psb'"}},"item-55":{"id":55,"type":"Button","parentId":21,"style":{"enabled":true,"varName":"selectFilesBtn","text":"Select","justify":"center","preferredSize":[0,0],"alignment":"center","helpTip":null}},"item-56":{"id":56,"type":"StaticText","parentId":36,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":true,"text":"Created By \nKrevlinMen\nImSamuka","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-57":{"id":57,"type":"Panel","parentId":20,"style":{"text":"Text Group","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":null,"varName":null,"creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"enabled":true}},"item-58":{"id":58,"type":"Group","parentId":57,"style":{"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["right","center"],"alignment":"fill","varName":null,"enabled":true}},"item-59":{"id":59,"type":"StaticText","parentId":58,"style":{"text":"Name","justify":"left","preferredSize":[0,0],"alignment":null,"varName":null,"helpTip":null,"softWrap":true,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"enabled":true}},"item-60":{"id":60,"type":"EditText","parentId":58,"style":{"text":"Type","preferredSize":[80,0],"alignment":null,"varName":"groupNameBox","helpTip":null,"softWrap":false,"creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"enabled":true,"justify":"left"}},"item-64":{"id":64,"type":"Checkbox","parentId":57,"style":{"text":"Visible","preferredSize":[0,0],"alignment":null,"varName":"visibleGroupCB","helpTip":"Set Layer to Visible","enabled":true}},"item-65":{"id":65,"type":"Checkbox","parentId":57,"style":{"text":"Always Create Group","preferredSize":[0,0],"alignment":null,"varName":"alwaysCreateGroupCB","helpTip":"Always create a new group, otherwise add text layers to an existing group","enabled":true}},"item-66":{"id":66,"type":"Button","parentId":9,"style":{"enabled":true,"varName":"saveConfigBtn","text":"Save Config","justify":"center","preferredSize":[0,0],"alignment":"fill","helpTip":"Quick Save Current Configuration"}},"item-67":{"id":67,"type":"Group","parentId":0,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-68":{"id":68,"type":"Panel","parentId":20,"style":{"enabled":true,"varName":null,"creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Text Format","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":null}},"item-69":{"id":69,"type":"Group","parentId":68,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-70":{"id":70,"type":"Group","parentId":68,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-71":{"id":71,"type":"Group","parentId":68,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-72":{"id":72,"type":"Group","parentId":68,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-73":{"id":73,"type":"StaticText","parentId":69,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Font","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-74":{"id":74,"type":"DropDownList","parentId":69,"style":{"enabled":true,"varName":"fontListDD","text":"DropDownList","listItems":"font1,font2","preferredSize":[0,0],"alignment":null,"selection":0,"helpTip":null}},"item-75":{"id":75,"type":"StaticText","parentId":70,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Size (px)","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-76":{"id":76,"type":"EditText","parentId":70,"style":{"enabled":true,"varName":"fontSizeBox","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"16","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":"0 will maintain size Unchanged"}},"item-77":{"id":77,"type":"Checkbox","parentId":70,"style":{"enabled":true,"varName":"boxTextCB","text":"Box Text","preferredSize":[0,0],"alignment":null,"helpTip":null,"checked":true}},"item-78":{"id":78,"type":"StaticText","parentId":71,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Justification","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-79":{"id":79,"type":"DropDownList","parentId":71,"style":{"enabled":true,"varName":"justificationDD","text":"DropDownList","listItems":"center,left","preferredSize":[0,0],"alignment":null,"selection":0,"helpTip":null}},"item-80":{"id":80,"type":"StaticText","parentId":72,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Language","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-81":{"id":81,"type":"DropDownList","parentId":72,"style":{"enabled":true,"varName":"languageDD","text":"DropDownList","listItems":"english, ptbr","preferredSize":[0,0],"alignment":null,"selection":0,"helpTip":null}},"item-82":{"id":82,"type":"Group","parentId":20,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["center","center"],"alignment":null}},"item-84":{"id":84,"type":"Button","parentId":82,"style":{"enabled":true,"varName":"starterLayersBtn","text":"Layers to be created","justify":"center","preferredSize":[0,0],"alignment":"fill","helpTip":null}}},"order":[0,67,20,1,6,4,5,45,46,47,40,57,58,59,60,64,65,68,69,73,74,70,75,76,77,71,78,79,72,80,81,82,84,19,21,22,53,52,55,9,66,48,50,49,36,37,38,56],"settings":{"importJSON":true,"indentSize":false,"cepExport":false,"includeCSSJS":true,"functionWrapper":false,"compactCode":false,"showDialog":true,"afterEffectsDockable":false,"itemReferenceList":"var"}}
*/

/*
UI 3
{"activeId":37,"items":{"item-0":{"id":0,"type":"Dialog","parentId":false,"style":{"text":"AutoTypeSetter","preferredSize":[0,0],"margins":16,"orientation":"row","spacing":10,"alignChildren":["left","top"],"varName":"win","windowType":"Dialog","creationProps":{"su1PanelCoordinates":false,"maximizeButton":false,"minimizeButton":false,"independent":false,"closeButton":true,"borderless":false,"resizeable":false},"enabled":true}},"item-1":{"id":1,"type":"Panel","parentId":20,"style":{"text":"Page Indentifiers","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":null,"varName":null,"creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"enabled":true}},"item-4":{"id":4,"type":"StaticText","parentId":6,"style":{"text":"Prefix","justify":"left","preferredSize":[0,0],"alignment":null,"varName":null,"helpTip":null,"softWrap":true,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"enabled":true}},"item-5":{"id":5,"type":"EditText","parentId":6,"style":{"text":">>","preferredSize":[60,0],"alignment":null,"varName":"pageIdentifierPrefixBox","helpTip":null,"softWrap":false,"creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"enabled":true,"justify":"left"}},"item-6":{"id":6,"type":"Group","parentId":1,"style":{"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["right","center"],"alignment":"center","varName":null,"enabled":true}},"item-9":{"id":9,"type":"Panel","parentId":19,"style":{"text":"Configuration","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":null,"varName":null,"creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"enabled":true}},"item-19":{"id":19,"type":"Group","parentId":0,"style":{"preferredSize":[0,0],"margins":0,"orientation":"column","spacing":10,"alignChildren":["fill","top"],"alignment":null,"varName":null,"enabled":true}},"item-20":{"id":20,"type":"Group","parentId":0,"style":{"preferredSize":[0,0],"margins":0,"orientation":"column","spacing":10,"alignChildren":["fill","top"],"alignment":null,"varName":null,"enabled":true}},"item-21":{"id":21,"type":"Panel","parentId":19,"style":{"text":"Files","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["fill","top"],"alignment":null,"varName":null,"creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"enabled":true}},"item-22":{"id":22,"type":"StaticText","parentId":21,"style":{"text":"Select a Folder including:\n- A '.txt' file containing the text\n- Image Files ('1.png', '2.jpg')\n\n(if you don't select images, \nthe script will run on a open\ndocument)","justify":"left","preferredSize":[0,0],"alignment":null,"varName":null,"helpTip":null,"softWrap":true,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"enabled":true}},"item-36":{"id":36,"type":"Group","parentId":0,"style":{"preferredSize":[0,0],"margins":0,"orientation":"column","spacing":10,"alignChildren":["fill","top"],"alignment":null,"varName":null,"enabled":true}},"item-37":{"id":37,"type":"Button","parentId":36,"style":{"text":"OK","justify":"center","preferredSize":[0,0],"alignment":null,"varName":"confirmBtn","helpTip":null,"enabled":false}},"item-38":{"id":38,"type":"Button","parentId":36,"style":{"text":"Cancel","justify":"center","preferredSize":[0,0],"alignment":null,"varName":"cancelBtn","helpTip":null,"enabled":true}},"item-40":{"id":40,"type":"Checkbox","parentId":1,"style":{"text":"Ignore Page Number","preferredSize":[0,0],"alignment":null,"varName":"ignorePageNumberCB","helpTip":"This will ignore or not numbers between both identifiers","enabled":true,"checked":false}},"item-45":{"id":45,"type":"Group","parentId":1,"style":{"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["right","center"],"alignment":"center","varName":null,"enabled":true}},"item-46":{"id":46,"type":"StaticText","parentId":45,"style":{"text":"Suffix","justify":"left","preferredSize":[0,0],"alignment":null,"varName":"","helpTip":null,"softWrap":true,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"enabled":true}},"item-47":{"id":47,"type":"EditText","parentId":45,"style":{"text":"","preferredSize":[60,0],"alignment":null,"varName":"pageIdentifierSuffixBox","helpTip":null,"softWrap":false,"creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"enabled":true,"justify":"left"}},"item-48":{"id":48,"type":"Button","parentId":9,"style":{"enabled":true,"varName":"registerConfigBtn","text":"Import Config","justify":"center","preferredSize":[0,0],"alignment":"fill","helpTip":"Select a JSON with your custom configuration to use!  :D"}},"item-49":{"id":49,"type":"Button","parentId":9,"style":{"enabled":false,"varName":"resetConfigBtn","text":"Reset Config","justify":"center","preferredSize":[0,0],"alignment":"fill","helpTip":"This will delete the JSON you registered"}},"item-50":{"id":50,"type":"Button","parentId":9,"style":{"enabled":true,"varName":"openFolderBtn","text":"Open Scripts Folder","justify":"center","preferredSize":[0,0],"alignment":"fill","helpTip":""}},"item-52":{"id":52,"type":"Checkbox","parentId":21,"style":{"enabled":true,"varName":"selectAllFilesCB","text":"Select Files Instead","preferredSize":[0,0],"alignment":null,"helpTip":"You need to select all files, not a folder containing these files","checked":false}},"item-53":{"id":53,"type":"StaticText","parentId":21,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":true,"text":"Formats Supported","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":"'.png', '.jpeg', '.jpg', '.psd', '.psb'"}},"item-55":{"id":55,"type":"Button","parentId":21,"style":{"enabled":true,"varName":"selectFilesBtn","text":"Select","justify":"center","preferredSize":[0,0],"alignment":"center","helpTip":null}},"item-56":{"id":56,"type":"StaticText","parentId":36,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":true,"text":"Created By \nKrevlinMen\nImSamuka","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-57":{"id":57,"type":"Panel","parentId":20,"style":{"text":"Text Group","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":null,"varName":null,"creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"enabled":true}},"item-58":{"id":58,"type":"Group","parentId":57,"style":{"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["right","center"],"alignment":"center","varName":null,"enabled":true}},"item-59":{"id":59,"type":"StaticText","parentId":58,"style":{"text":"Name","justify":"left","preferredSize":[0,0],"alignment":null,"varName":null,"helpTip":null,"softWrap":true,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"enabled":true}},"item-60":{"id":60,"type":"EditText","parentId":58,"style":{"text":"Type","preferredSize":[80,0],"alignment":null,"varName":"groupNameBox","helpTip":null,"softWrap":false,"creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"enabled":true,"justify":"left"}},"item-64":{"id":64,"type":"Checkbox","parentId":57,"style":{"text":"Visible","preferredSize":[0,0],"alignment":null,"varName":"visibleGroupCB","helpTip":"Set Layer to Visible","enabled":true}},"item-65":{"id":65,"type":"Checkbox","parentId":57,"style":{"text":"Always Create Group","preferredSize":[0,0],"alignment":null,"varName":"alwaysCreateGroupCB","helpTip":"Always create a new group, otherwise add text layers to an existing group","enabled":true}},"item-66":{"id":66,"type":"Button","parentId":9,"style":{"enabled":true,"varName":"saveConfigBtn","text":"Save Config","justify":"center","preferredSize":[0,0],"alignment":"fill","helpTip":"Quick Save Current Configuration"}},"item-67":{"id":67,"type":"Group","parentId":0,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-68":{"id":68,"type":"Panel","parentId":20,"style":{"enabled":true,"varName":null,"creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Text Format","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["right","top"],"alignment":null}},"item-69":{"id":69,"type":"Group","parentId":68,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-70":{"id":70,"type":"Group","parentId":68,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-71":{"id":71,"type":"Group","parentId":68,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-72":{"id":72,"type":"Group","parentId":68,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-73":{"id":73,"type":"StaticText","parentId":69,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Font","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-74":{"id":74,"type":"DropDownList","parentId":69,"style":{"enabled":true,"varName":"fontListDD","text":"DropDownList","listItems":"font1,font2","preferredSize":[0,0],"alignment":null,"selection":0,"helpTip":null}},"item-75":{"id":75,"type":"StaticText","parentId":70,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Size (px)","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-76":{"id":76,"type":"EditText","parentId":70,"style":{"enabled":true,"varName":"fontSizeBox","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"16","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":"0 will maintain size Unchanged"}},"item-77":{"id":77,"type":"Checkbox","parentId":70,"style":{"enabled":true,"varName":"boxTextCB","text":"Box Text","preferredSize":[0,0],"alignment":null,"helpTip":null,"checked":false}},"item-78":{"id":78,"type":"StaticText","parentId":71,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Justification","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-79":{"id":79,"type":"DropDownList","parentId":71,"style":{"enabled":true,"varName":"justificationDD","text":"DropDownList","listItems":"center,left","preferredSize":[0,0],"alignment":null,"selection":0,"helpTip":null}},"item-80":{"id":80,"type":"StaticText","parentId":72,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Language","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-81":{"id":81,"type":"DropDownList","parentId":72,"style":{"enabled":true,"varName":"languageDD","text":"DropDownList","listItems":"english, ptbr","preferredSize":[0,0],"alignment":null,"selection":0,"helpTip":null}},"item-82":{"id":82,"type":"Group","parentId":20,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["center","center"],"alignment":null}},"item-84":{"id":84,"type":"Button","parentId":82,"style":{"enabled":true,"varName":"starterLayersBtn","text":"Layers to be created","justify":"center","preferredSize":[0,0],"alignment":"fill","helpTip":null}},"item-85":{"id":85,"type":"Checkbox","parentId":57,"style":{"text":"Column Group","preferredSize":[0,0],"alignment":null,"varName":"columnGroupCB","helpTip":"Text Columns will be stacked in diferent groups","enabled":true}},"item-86":{"id":86,"type":"Checkbox","parentId":21,"style":{"enabled":true,"varName":"prioritizePSDCB","text":"Prioritize PSD Files","preferredSize":[0,0],"alignment":null,"helpTip":"It will prioritize PSD over more \"raw\" files (PNG, JPG)","checked":false}},"item-87":{"id":87,"type":"Checkbox","parentId":68,"style":{"enabled":true,"varName":"disableCustomFormattingCB","text":"Disable Custom Formatting","preferredSize":[0,0],"alignment":null,"helpTip":null,"checked":true}}},"order":[0,67,20,1,6,4,5,45,46,47,40,57,58,59,60,64,65,85,68,69,73,74,70,75,76,77,71,78,79,72,80,81,87,82,84,19,21,22,53,52,86,55,9,66,48,50,49,36,37,38,56],"settings":{"importJSON":true,"indentSize":false,"cepExport":false,"includeCSSJS":true,"functionWrapper":false,"compactCode":false,"showDialog":true,"afterEffectsDockable":false,"itemReferenceList":"var"}}
*/


//! To TEST
//! in insertPageTexts():
//! config.customTextFormats functionality
//! config.ignoreCustomWith functionality



/* -------------------------------------------------------------------------- */
/*                                Documentation                               */
/*            https://www.adobe.com/devnet/photoshop/scripting.html           */
/* -------------------------------------------------------------------------- */
/*                         User Interface Created With                        */
/*                         https://scriptui.joonas.me/                        */
/* -------------------------------------------------------------------------- */


/* ----------------------------- Read Libraries ----------------------------- */

(function readLibraries() {

  function readFiles(files) {
    for (var i in files)
      try {
        var moreFiles = files[i].getFiles()
        readFiles(moreFiles)
      } catch (error) {
        var name = files[i].name
        if (!name.slice(name.length - 3).indexOf(".js"))
          $.evalFile(files[i]);
      }
  }

  const files = getFileFromScriptPath("lib/").getFiles()
  readFiles(files)
})()


/* ---------------------------- Global Constants ---------------------------- */


const dropDownSizes = [130, 300]
const savedFilePath = "config.json"

const defaultConfig = readJson("lib/defaultConfig.json", "Default configuration")

const justificationObj = readJson("lib/justificationOptions.json", "Justification options list")
const blendModeObj = readJson("lib/blendModeOptions.json", "Blend Mode options list")
const languageObj = readJson("lib/languageOptions.json", "Language options list")
const fontNamesArray = getFontNames()


/* ---------------------------- Global Variables ---------------------------- */

var textFile;
var duplicatedLayer;
var alreadyCreatedTextFolder = false;
var config = {};

/* -------------------------------------------------------------------------- */
/*                                    Main                                    */
/* -------------------------------------------------------------------------- */


main()

function main() {

  //? Save Configurations
  const savedDialogMode = app.displayDialogs
  //? Change Configurations
  app.displayDialogs = DialogModes.ERROR //change to NO by the End

  UI = formatUserInterface()
  progressBarObj = new createProgressBarObj()

  UI.Executing = function () {

    try {

      //* The Whole program is this line
      processText(UI.arrayFiles)

    } catch (error) {

      //? Closes the windows if an error occurs, else PhotoShop crashes
      throwError("Something really bad happened", error)

    }
  }


  $.writeln(UI.win.show());

  //? Restore Configurations
  app.displayDialogs = savedDialogMode
}

function processText(arrayFiles) {


  var multipleArchives = false

  if (arrayFiles.length === 0)
    throwError("No files were selected!")
  else if (arrayFiles.length === 1)
    textFile = arrayFiles[0]
  else
    multipleArchives = true
  const filteredFiles = createImageArray(arrayFiles)
  const imageArrayDir = multipleArchives ? filteredFiles[0] : undefined
  const content = createContentObj(multipleArchives)




  function insertPageTexts(page) {
    const positionArray = calculatePositions(page)
    var currentGroup
    // alert(page)
    // alert(positionArray)

    for (var i in page) {
      var line = page[i]
      var format = undefined


      if (!config.disableCustomFormatting){ //! NEEDS TESTING ----------------------------------
        if (isNotUndef(config.ignoreCustomWith) && line.startsWith(config.ignoreCustomWith)){
          line = line.slice(config.ignoreCustomWith.length)

        } else if (isNotUndef(config.customTextFormats)){
          for (var j in config.customTextFormats){
            if (line.startsWith(config.customTextFormats[j].lineIdentifierPrefix)) {
              line = line.slice(config.customTextFormats[j].lineIdentifierPrefix.length)
              format = config.customTextFormats[j]
              break;
            }
          }
        }
      }

      writeTextLayer(line, i < page.length - 1, positionArray[i], format,currentGroup)

    }

  }

  if (multipleArchives) {

    formatProgressBarObj(progressBarObj,filteredFiles[1])

    for (var key in content) { //File editing loop

      var keyNum = parseInt(key)
      if (config.ignorePageNumber && (keyNum - 1) >= imageArrayDir.length) break;
      var found = config.ignorePageNumber ? imageArrayDir[keyNum - 1] : getSpecificImage(imageArrayDir, keyNum)

      if (found === undefined) continue;

      open(found)
      applyStarterLayerFormats()
      insertPageTexts(content[key]) //Page text Writing Loop
      saveAndCloseFile(found,imageArrayDir)

    }
    progressBarObj.win.close()
  } else {

    try {
      if (activeDocument.layers[0])
        multipleArchives = false //useless
    } catch (error) {
      throwError("No document open.", error)
    }

    applyStarterLayerFormats()

    //? Everything will be used
    for (var key in content) {
      insertPageTexts(content[key])
    }

  }
}

/* -------------------------------------------------------------------------- */
/*                                  Functions                                 */
/* -------------------------------------------------------------------------- */





/* --------------------------------- Helpers -------------------------------- */

function throwError(message, error) {

  //? Always show error message
  alert(message)

  //? Closes windows, else Crash

  try {
    UI.win.close()
  } catch (error) {}

  try {
    progressBarObj.win.close()
  } catch (error) {}

  if (error === undefined)
    throw new Error(message)
  else throw error
}

function removeExtension(str) {
  return str.slice(0, str.lastIndexOf("."))
}

function saveAndCloseFile(file,imageArrayDir) {
  formatLayer(getTypeFolder(), config.groupLayer)

  const saveFile = File(removeExtension(file.fullName) + '.psd')
  activeDocument.saveAs(saveFile)
  activeDocument.close()
  alreadyCreatedTextFolder = false;

  //? Update progressBar
  progressBarObj.progressBar.value += 1 / imageArrayDir.length
  progressBarObj.listBox.remove(0)


}

function applyStarterLayerFormats() {

  if (config.disableStarterLayer) return

  var currentLayer = activeDocument.layers[activeDocument.layers.length - 1]

  for (var i in config.starterLayerFormats) {
    var format = config.starterLayerFormats[i]

    if (i > 0 && isNotUndef(format.duplicate) && format.duplicate)
      currentLayer = currentLayer.duplicate()
    else if (i > 0) {
      var newL = activeDocument.artLayers.add()
      newL.move(currentLayer, ElementPlacement.PLACEBEFORE)
      currentLayer = newL
    }

    formatLayer(currentLayer, format)
  }

}








function readFile(file) {
  file.encoding = 'UTF8'; // set to 'UTF8' or 'UTF-8'
  file.open("r");
  const rawText = file.read();
  file.close();
  return rawText
}

function readJson(path, name, isUnnecessary){

  var file = getFileFromScriptPath(path)

  //? Check if the file Exists
  if (!file.exists)
    return isUnnecessary ? undefined : throwError(name + " file missing.\nYou can get another one for free on github.com/krevlinmen/AutoTypeSetter")

  //? Reading the file
  try {
    var text = readFile(file)
  } catch (error) {
    throwError("Error while reading " + name + ".\nPlease check if the program can read the file.", error)
  }

  //? Converting JSON to Object
  try {
    var object = JSON.parse(text)
  } catch (error) {
    throwError("Error while converting " + name + " to a object.\nPlease check if the file is a valid JSON.", error)
  }

  return object
}

function readConfig() {

  //* Reading File

  const hasSavedConfig = getFileFromScriptPath(savedFilePath).exists
  config = readJson(savedFilePath, "Saved configuration", !hasSavedConfig)

  if (config === undefined){
    config = getCopy(defaultConfig)
    delete  config.LayerFormatObject
    return
  }


  //* -------- Asserting Integrity

  if (config.disableStarterLayer === undefined)
    config.disableStarterLayer = defaultConfig.disableStarterLayer

  if (!Array.isArray(config.customTextFormats))
    config.customTextFormats = defaultConfig.customTextFormats
  if (!Array.isArray(config.starterLayerFormats))
    config.starterLayerFormats = defaultConfig.starterLayerFormats

  if (typeof config.groupLayer != "object" || config.groupLayer === null || Array.isArray(config.groupLayer))
    config.groupLayer = defaultConfig.groupLayer
  if (typeof config.defaultTextFormat != "object" || config.defaultTextFormat === null || Array.isArray(config.defaultTextFormat))
    config.defaultTextFormat = defaultConfig.defaultTextFormat


  delete config.groupLayer.isBackgroundLayer
  delete config.defaultTextFormat.isBackgroundLayer

  for (var i in config.customTextFormats)
    delete config.customTextFormats[i].isBackgroundLayer

}




function isNaN(p) {
  return p !== p
}

function isNotUndef(p) {
  return !(p === undefined)
}

function isNewPage(line) {
  const res = line.startsWith(config.pageIdentifierPrefix) && line.endsWith(config.pageIdentifierSuffix)
  if (config.ignorePageNumber)
    return res
  else
    return res && !isNaN(getPageNumber(line))
}

function isEqualObjects(obj, sec) {

  if ((obj === null || sec === null ||
      typeof (obj) != 'object' || typeof (sec) != 'object'))
    throwError("\nTypeError: equalObjects received non-objects")


  const objKeys = getKeys(obj)
  const secKeys = getKeys(sec)

  if (objKeys.length != secKeys.length)
    return false
  if (!objKeys.length)
    return true

  //alert("Object Have Properties\nObject 1: " + objKeys + "\nObject 2: " + secKeys)

  for (var i = 0; i < objKeys.length; i++) {
    if (objKeys[i] != secKeys[i])
      return false
    var j = objKeys[i]

    if (obj.hasOwnProperty(j) != sec.hasOwnProperty(j))
      return false

    if (!obj.hasOwnProperty(j))
      continue;

    var o = obj[j]
    var s = sec[j]

    //alert("Key: "+ j + "\n\n" + o + "\n" + s + "\n\n" + typeof(o) + "\n" + typeof(s))

    if (typeof (o) != typeof (s))
      return false
    if (isNaN(o) != isNaN(s))
      return false
    if (o === null != s === null)
      return false

    if (isNaN(o) && isNaN(s))
      return true

    if (o != null && typeof (o) === 'object') {
      if (!isEqualObjects(o, s))
        return false
    } else if (o != s)
      return false
  }

  return true
}





function getKeyFromValue(obj, value){

  for (var k in obj)
    if (obj.hasOwnProperty(k) && obj[k] === value)
      return k
}

function getKeys(obj){
  const arr = []
  for (var k in obj)
    if (obj.hasOwnProperty(k))
      arr.push(k)
  return arr
}


function getCopy(obj){
  const copy = Array.isArray(obj) ? [] : {}
  for (var k in obj)
    if (obj.hasOwnProperty(k))
      copy[k] = obj[k]
  return copy
}

function getFileFromScriptPath(filename) {
  return File((new File($.fileName)).path + "/" + encodeURI(filename))
}

function getPageNumber(str) {
  var res = str.slice(config.pageIdentifierPrefix.length, str.length - config.pageIdentifierSuffix.length) //? Removes the identifier
  var str = res.replace(/\D/g, ""); //? Cleans the line, removing NaN text such as "Page" from the identifier

  try {
    return parseInt(str)
  } catch (error) {
    throwError("Could not read number from file", error)
  }
}

function getSpecificImage(arr, num) {

  for (var i in arr) {
    var str = arr[i].name

    if (num === parseInt(removeExtension(str)))
      return arr[i];
  }
  return undefined;
}

function getIndexOf(arr, item) {
  for (var i in arr) {
    if (item === arr[i])
      return i
  }
  return -1;
}

function getFontNames(){
  const fontNames = [ "Maintain Unchanged" ]
  for (var i = 0; i < app.fonts.length; i++)
    fontNames.push(app.fonts[i].name)

  return fontNames
}

function getFont(fontName) {
  if (fontName === "") return undefined
  //? Loop through every font
  for (var i = 0; i < app.fonts.length; i++)
    //? search a font with the name including 'fontName'
    if (app.fonts[i].name.indexOf(fontName) > -1)
      return app.fonts[i]
}

function getTypeFolder(groupIndex) {
  const groupName = config.groupLayer.name + ( config.columnGroup ? "_" + groupIndex : "" )

  if (config.alwaysCreateGroup && !alreadyCreatedTextFolder) {
    alreadyCreatedTextFolder = true
    return createGroupFolder(groupName)
  }


  var textFolder;
  try {
    //? Try find a folder with name given
    textFolder = activeDocument.layerSets.getByName(groupName)
  } catch (error) {
    //? If not found, create one

    textFolder = createGroupFolder(groupName)
  }
  return textFolder;
}









function setValidConfigValue(newValue, propertyParent, arrayPropertyPath){
  //? Function used to set a valid config value
  //? Examples:
  // setValidConfigValue("<>", config, "pageIdentifierPrefix")
  // setValidConfigValue(80, config.groupLayer, ["LayerFormatObject", "opacity"])
  // setValidConfigValue(null, config.groupLayer, "LayerFormatObject", "opacity")

  if (arguments.length < 3) return //? Not enough arguments

  //? No item is null or NaN
  if (isNaN(newValue) || null === newValue) return


  const props = Array.isArray(arrayPropertyPath) ? arrayPropertyPath : Array.prototype.slice.call(arguments, 2, arguments.length)


  var defaultValue = defaultConfig[props[0]];
  for (var i = 1, l = props.length; i < l; i++)
    if ( isNotUndef(defaultValue) )
      defaultValue = defaultValue[props[i]]


  if (isNotUndef(defaultValue)){
    if (undefined === newValue) return

    //? Different types will not be tolerated
    if (typeof(defaultValue) != typeof(newValue)) return
  }

  propertyParent[ props[props.length-1] ] = newValue
}




















function createImageArray(arrayFiles) {
  const imageArray = []
  const fileNames = []

  for (var i in arrayFiles) {
    var file = arrayFiles[i]
    if (!file.name.endsWithArray(['.txt', '.png', '.jpeg', '.jpg', '.psd', '.psb']))
      alert("One or more files are not supported by this script!\nThis script only supports the extensions:\n.png, .jpg, .jpeg, .psd, .psb, .txt")
    else if (file.name.endsWith('.txt'))
      textFile = file
    else
      imageArray.push(file)

  }

  if (!imageArray.length)
    throwError("Not enough valid image files")



  //* Prioritize Order

  const prioritizeOrder = ['.psd', '.psb', '.png', '.jpg', '.jpeg']

  if (!config.prioritizePSD) {
    prioritizeOrder.push(prioritizeOrder.shift())
    prioritizeOrder.push(prioritizeOrder.shift())
  }


  //* Eliminate Duplicates

  const getExtension = function (str) {
    return str.slice(str.lastIndexOf("."))
  }

  const filename = function (str) { //? Removes extension from str and parses number if it is a number
    try {
      return config.ignorePageNumber ? removeExtension(str) : parseInt(removeExtension(str))
    } catch (error) {
      throwError("Could not read number from file", error)
    }
  }





  for (var i = 0; i < imageArray.length; i++) {

    var n = filename(imageArray[i].name)
    var duplicates = []

    for (var j in imageArray) //? Search for file duplicates
      if (n == filename(imageArray[j].name))
        duplicates.push(imageArray[j])

      if (duplicates.length > 1) {
        duplicates.sort(function (a, b) {//? Sort duplicate files
          const aR = getIndexOf(prioritizeOrder, getExtension(a.name).toLowerCase())
          const bR = getIndexOf(prioritizeOrder, getExtension(b.name).toLowerCase())
          if (aR == -1) return 1
          if (bR == -1) return -1
          return aR - bR
        })
      }

    for (var j = 1; j < duplicates.length; j++) { //? Remove duplicates from main array
      var index = getIndexOf(imageArray, duplicates[j])
      var removed = imageArray.splice(index, 1)
      //alert("removing " + removed[0].name)
    }
  }

  imageArray = imageArray.sort()

  for (var i in imageArray){
    fileNames.push(imageArray[i].name)
  }

  return [imageArray, fileNames]
}

function createContentObj(multipleArchives) {

  if (!textFile || !textFile.name.endsWith('.txt')) {
    throwError("No text file was selected!")
  }

  //? Split text into array of texts
  const rawText = readFile(textFile)
  const textArray = rawText.split("\n")

  const content = {
    0: []
  }
  var current = 0
  for (var t in textArray) {
    var line = textArray[t].trim()

    if (isNewPage(line)) {
      current = config.ignorePageNumber ? current + 1 : getPageNumber(line)
      content[current] = []
    } else if (current && line.length) {

      content[current].push(line)
    }
  }

  if (multipleArchives){
    delete content[0] //? Deletes text before the first identifier

    if (!getKeys(content).length)
      throwError("Not enough text lines to process\n Please check your .txt file and page identifiers")
  }


  return content
}

function createEmptyLayer(layerName, layerFormat) {
  //? Default Format
  const defaultFormat = {
    color: undefined,
    locked: false,
    type: undefined //levels, text, etc
  }

  //? Use Default Format if 'format' not given
  if (layerFormat === undefined)
    layerFormat = defaultFormat

  const newLayer = activeDocument.artLayers.add()
  if (layerFormat.locked) newLayer.allLocked = true
  newLayer.name = layerName

  return newLayer
}


function createGroupFolder(groupName, folderFormat) {
  //? Default Format
  const defaultFormat = {
    color: undefined,
    locked: false,
    type: undefined //levels,text,etc
  }

  //? Use Default Format if 'format' not given
  if (folderFormat === undefined)
    folderFormat = defaultFormat

  const newFolder = activeDocument.layerSets.add()
  alert("creating group:\n" + groupName)
  if (folderFormat.locked) newFolder.allLocked = true
  newFolder.name = groupName

  return newFolder

}













function formatLayer(layer, format) {
  if (format === undefined || layer === undefined) return;

  //* Is Background - This property can break many of the other ones
  //! it breaks 'Naming', 'Locking' and Text Features(probably)
  if (isNotUndef(format.isBackgroundLayer)) layer.isBackgroundLayer = format.isBackgroundLayer
  if (layer.isBackgroundLayer) {
    if (isNotUndef(format.visible)) layer.visible = format.visible
    return;
  }

  //* Naming
  if (isNotUndef(format.name)) layer.name = format.name


  //* Locking
  if (isNotUndef(format.transparentPixelsLocked)) layer.transparentPixelsLocked = format.transparentPixelsLocked
  if (isNotUndef(format.pixelsLocked)) layer.pixelsLocked = format.pixelsLocked
  if (isNotUndef(format.positionLocked)) layer.positionLocked = format.positionLocked

  if (isNotUndef(format.allLocked)) {
    layer.allLocked = format.allLocked
    if (layer.allLocked) {
      layer.transparentPixelsLocked = false
      layer.pixelsLocked = false
      layer.positionLocked = false
    }
  } else if (layer.transparentPixelsLocked || layer.pixelsLocked || layer.positionLocked)
    layer.allLocked = false



  //* Text Features
  if (layer.kind === LayerKind.TEXT) {

    const txt = layer.textItem

    if (isNotUndef(format.font)){
      var font = getFont(format.font)
      if (isNotUndef(font)) txt.font = font.postScriptName
    }
    if (isNotUndef(format.size) && format.size > 0)
      txt.size = format.size

    if (isNotUndef(format.justification) && format.justification.length)
      txt.justification = Justification[format.justification.toUpperCase()]
    if (isNotUndef(format.language) && format.language.length)
      txt.language = Language[format.language.toUpperCase()]


    if (isNotUndef(format.boxText)) txt.kind = format.boxText ? TextType.PARAGRAPHTEXT : TextType.POINTTEXT

  }

  if (isNotUndef(format.blendMode) && format.blendMode.length)
    layer.blendMode = BlendMode[format.blendMode.toUpperCase()]



  if (isNotUndef(format.opacity)) layer.opacity = format.opacity
  if (isNotUndef(format.grouped)) layer.grouped = format.grouped

  //* Visibility - always last
  if (isNotUndef(format.visible)) layer.visible = format.visible

}


function writeTextLayer(text, activateDuplication, positionArray, format) {


  function defaultTextLayer() {
    //* Creating PlaceHolder Layer
    currentGroup = getTypeFolder(positionArray.group)
    const txtLayer = currentGroup.artLayers.add()
    txtLayer.name = "PlaceHolder Layer"
    txtLayer.kind = LayerKind.TEXT

    //* Default Formatting
    if (isNotUndef(config.defaultTextFormat))
      formatLayer(txtLayer, config.defaultTextFormat)
    return txtLayer;
  }


  const txtLayer = duplicatedLayer === undefined ? defaultTextLayer() : duplicatedLayer

  if (!currentGroup.name.endsWith((positionArray.group.toString()))){
    currentGroup = getTypeFolder(positionArray.group)
    txtLayer.move(currentGroup,ElementPlacement.INSIDE)

  }

  duplicatedLayer = undefined;

  if (activateDuplication){
    duplicatedLayer = txtLayer.duplicate()
  }
  //* Set Text
  txtLayer.textItem.contents = text
  txtLayer.name = text

  if (format) formatLayer(txtLayer, format)

  //? Positioning

  txtLayer.textItem.position = [positionArray.xPosition, positionArray.yPosition]
  txtLayer.textItem.width = positionArray.width
  txtLayer.textItem.height = positionArray.height

}

//* Calculate the positioning of all the text in a page
function calculatePositions(textArray) {
  const yBorder = activeDocument.height * 0.02
  const xBorder = activeDocument.width * 0.02
  positionData = []
  const layerPosition = {
    yPosition: yBorder, //*Initially, the margin of the document
    xPosition: xBorder,
    height: undefined,
    width: activeDocument.width * 0.2, //*maybe customizable in the future
    group: 0
  }

  for (var i in textArray) {
    layerPosition.height = (config.defaultTextFormat.size * 1.1) * Math.ceil(textArray[i].length / (layerPosition.width / (6 * config.defaultTextFormat.size / 7))) //! Attention
    positionData.push(getCopy(layerPosition))

    layerPosition.yPosition += yBorder + layerPosition.height //*yPosition += The size of the text Box + border

    if (layerPosition.yPosition >= activeDocument.height) { //*if the bottom of the file is reached
      layerPosition.yPosition = yBorder //*Reset yPosition
      layerPosition.xPosition += xBorder + layerPosition.width //*increment the x value to create a new column
      layerPosition.group += 1 //*Goes to the next group
      alert(layerPosition.group)
    }
  }
  return positionData
}






















/* -------------------------------------------------------------------------- */
/*                               User Interface                               */
/* -------------------------------------------------------------------------- */


function createProgressBarObj() {

  /*
  Code for Import https://scriptui.joon as.me — (Triple click to select):
  {"activeId":0,"items":{"item-0":{"id":0,"type":"Dialog","parentId":false,"style":{"enabled":true,"varName":null,"windowType":"Window","creationProps":{"su1PanelCoordinates":false,"maximizeButton":false,"minimizeButton":false,"independent":false,"closeButton":true,"borderless":false,"resizeable":false},"text":"Processing files","preferredSize":[0,0],"margins":16,"orientation":"column","spacing":10,"alignChildren":["center","top"]}},"item-1":{"id":1,"type":"Progressbar","parentId":0,"style":{"enabled":true,"varName":"","preferredSize":[50,4],"alignment":"fill","helpTip":null}},"item-2":{"id":2,"type":"Divider","parentId":0,"style":{"enabled":true,"varName":null}},"item-3":{"id":3,"type":"Button","parentId":0,"style":{"enabled":true,"varName":"cancelButton","text":"Cancel","justify":"center","preferredSize":[0,0],"alignment":"right","helpTip":null}}},"order":[0,1,2,3],"settings":{"importJSON":true,"indentSize":false,"cepExport":false,"includeCSSJS":true,"showDialog":true,"functionWrapper":false,"afterEffectsDockable":false,"itemReferenceList":"None"}}
  */

  // WIN
  // ===
  this.win = new Window("window");
  this.win.text = "Processing files";
  this.win.orientation = "column";
  this.win.alignChildren = ["center", "top"];
  this.win.spacing = 10;
  this.win.margins = 16;




  this.progressBar = this.win.add("progressbar", undefined, undefined, {
    name: "progressBar"
  });
  this.progressBar.maxvalue = 1;
  this.progressBar.value = 0;
  this.progressBar.preferredSize.width = 200;
  this.progressBar.preferredSize.height = 15;
  this.progressBar.alignment = ["fill", "top"];


  this.listBox = this.win.add("listbox", undefined, undefined, {
    name: "listbox1"
  });

  var divider1 = this.win.add("panel", undefined, undefined, {
    name: "divider1"
  });
  divider1.alignment = "fill";

  var cancelButton = this.win.add("button", undefined, undefined, {
    name: "cancelButton"
  });
  cancelButton.text = "Cancel";
  cancelButton.alignment = ["right", "top"];
}

function formatProgressBarObj(progressBar,imgDir){

  for (var i in imgDir) { //Removes the txt file | Weird code that works up ahead
    if (imgDir[i].endsWith(".txt")) {
      imgDir[i] = imgDir[imgDir.length - 1];
      imgDir.pop();
      break
    }
  }

  imgDir = imgDir.sort()
  imgDir[0]+= " | Processing......" //Makes the listBox full length
  for (var i in imgDir){
  progressBar.listBox.add("item",imgDir[i])
}
  progressBar.listBox.items[0].text = progressBar.listBox.items[0].text.replace(" | Processing......", "")
 progressBar.win.show()
}







function createUserInterface() {

var justificationDD_array = getKeys(justificationObj)
var languageDD_array = getKeys(languageObj)
var fontListDD_array = fontNamesArray


/*
UI 3
{"activeId":22,"items":{"item-0":{"id":0,"type":"Dialog","parentId":false,"style":{"text":"AutoTypeSetter","preferredSize":[0,0],"margins":16,"orientation":"row","spacing":10,"alignChildren":["left","top"],"varName":"win","windowType":"Dialog","creationProps":{"su1PanelCoordinates":false,"maximizeButton":false,"minimizeButton":false,"independent":false,"closeButton":true,"borderless":false,"resizeable":false},"enabled":true}},"item-1":{"id":1,"type":"Panel","parentId":20,"style":{"text":"Page Indentifiers","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":null,"varName":null,"creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"enabled":true}},"item-4":{"id":4,"type":"StaticText","parentId":6,"style":{"text":"Prefix","justify":"left","preferredSize":[0,0],"alignment":null,"varName":null,"helpTip":null,"softWrap":true,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"enabled":true}},"item-5":{"id":5,"type":"EditText","parentId":6,"style":{"text":">>","preferredSize":[60,0],"alignment":null,"varName":"pageIdentifierPrefixBox","helpTip":null,"softWrap":false,"creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"enabled":true,"justify":"left"}},"item-6":{"id":6,"type":"Group","parentId":1,"style":{"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["right","center"],"alignment":"center","varName":null,"enabled":true}},"item-9":{"id":9,"type":"Panel","parentId":19,"style":{"text":"Configuration","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":null,"varName":null,"creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"enabled":true}},"item-19":{"id":19,"type":"Group","parentId":0,"style":{"preferredSize":[0,0],"margins":0,"orientation":"column","spacing":10,"alignChildren":["fill","top"],"alignment":null,"varName":null,"enabled":true}},"item-20":{"id":20,"type":"Group","parentId":0,"style":{"preferredSize":[0,0],"margins":0,"orientation":"column","spacing":10,"alignChildren":["fill","top"],"alignment":null,"varName":null,"enabled":true}},"item-21":{"id":21,"type":"Panel","parentId":19,"style":{"text":"Files","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["fill","top"],"alignment":null,"varName":null,"creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"enabled":true}},"item-22":{"id":22,"type":"StaticText","parentId":21,"style":{"text":"Select a Folder including:\n- A '.txt' file containing the text\n- Image Files ('1.png', '2.jpg')\n\n(if you don't select images, \nthe script will run on a open\ndocument)","justify":"left","preferredSize":[0,0],"alignment":null,"varName":null,"helpTip":null,"softWrap":false,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"enabled":true}},"item-36":{"id":36,"type":"Group","parentId":0,"style":{"preferredSize":[0,0],"margins":0,"orientation":"column","spacing":10,"alignChildren":["fill","top"],"alignment":null,"varName":null,"enabled":true}},"item-37":{"id":37,"type":"Button","parentId":36,"style":{"text":"OK","justify":"center","preferredSize":[0,0],"alignment":null,"varName":"confirmBtn","helpTip":null,"enabled":false}},"item-38":{"id":38,"type":"Button","parentId":36,"style":{"text":"Cancel","justify":"center","preferredSize":[0,0],"alignment":null,"varName":"cancelBtn","helpTip":null,"enabled":true}},"item-40":{"id":40,"type":"Checkbox","parentId":1,"style":{"text":"Ignore Page Number","preferredSize":[0,0],"alignment":null,"varName":"ignorePageNumberCB","helpTip":"This will ignore or not numbers between both identifiers","enabled":true,"checked":false}},"item-45":{"id":45,"type":"Group","parentId":1,"style":{"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["right","center"],"alignment":"center","varName":null,"enabled":true}},"item-46":{"id":46,"type":"StaticText","parentId":45,"style":{"text":"Suffix","justify":"left","preferredSize":[0,0],"alignment":null,"varName":"","helpTip":null,"softWrap":true,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"enabled":true}},"item-47":{"id":47,"type":"EditText","parentId":45,"style":{"text":"","preferredSize":[60,0],"alignment":null,"varName":"pageIdentifierSuffixBox","helpTip":null,"softWrap":false,"creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"enabled":true,"justify":"left"}},"item-48":{"id":48,"type":"Button","parentId":9,"style":{"enabled":true,"varName":"registerConfigBtn","text":"Import Config","justify":"center","preferredSize":[0,0],"alignment":"fill","helpTip":"Select a JSON with your custom configuration to use!  :D"}},"item-49":{"id":49,"type":"Button","parentId":9,"style":{"enabled":false,"varName":"resetConfigBtn","text":"Reset Config","justify":"center","preferredSize":[0,0],"alignment":"fill","helpTip":"This will delete the JSON you registered"}},"item-50":{"id":50,"type":"Button","parentId":9,"style":{"enabled":true,"varName":"openFolderBtn","text":"Open Scripts Folder","justify":"center","preferredSize":[0,0],"alignment":"fill","helpTip":""}},"item-52":{"id":52,"type":"Checkbox","parentId":21,"style":{"enabled":true,"varName":"selectAllFilesCB","text":"Select Files Instead","preferredSize":[0,0],"alignment":null,"helpTip":"You need to select all files, not a folder containing these files","checked":false}},"item-53":{"id":53,"type":"StaticText","parentId":21,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":true,"text":"Formats Supported","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":"'.png', '.jpeg', '.jpg', '.psd', '.psb'"}},"item-55":{"id":55,"type":"Button","parentId":21,"style":{"enabled":true,"varName":"selectFilesBtn","text":"Select","justify":"center","preferredSize":[0,0],"alignment":"center","helpTip":null}},"item-56":{"id":56,"type":"StaticText","parentId":36,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":true,"text":"Created By \nKrevlinMen\nImSamuka","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-57":{"id":57,"type":"Panel","parentId":20,"style":{"text":"Text Group","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":null,"varName":null,"creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"enabled":true}},"item-58":{"id":58,"type":"Group","parentId":57,"style":{"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["right","center"],"alignment":"center","varName":null,"enabled":true}},"item-59":{"id":59,"type":"StaticText","parentId":58,"style":{"text":"Name","justify":"left","preferredSize":[0,0],"alignment":null,"varName":null,"helpTip":null,"softWrap":true,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"enabled":true}},"item-60":{"id":60,"type":"EditText","parentId":58,"style":{"text":"Type","preferredSize":[80,0],"alignment":null,"varName":"groupNameBox","helpTip":null,"softWrap":false,"creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"enabled":true,"justify":"left"}},"item-64":{"id":64,"type":"Checkbox","parentId":57,"style":{"text":"Visible","preferredSize":[0,0],"alignment":null,"varName":"visibleGroupCB","helpTip":"Set Layer to Visible","enabled":true}},"item-65":{"id":65,"type":"Checkbox","parentId":57,"style":{"text":"Always Create Group","preferredSize":[0,0],"alignment":null,"varName":"alwaysCreateGroupCB","helpTip":"Always create a new group, otherwise add text layers to an existing group","enabled":true}},"item-66":{"id":66,"type":"Button","parentId":9,"style":{"enabled":true,"varName":"saveConfigBtn","text":"Save Config","justify":"center","preferredSize":[0,0],"alignment":"fill","helpTip":"Quick Save Current Configuration"}},"item-67":{"id":67,"type":"Group","parentId":0,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-68":{"id":68,"type":"Panel","parentId":20,"style":{"enabled":true,"varName":null,"creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Text Format","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["right","top"],"alignment":null}},"item-69":{"id":69,"type":"Group","parentId":68,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-70":{"id":70,"type":"Group","parentId":68,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-71":{"id":71,"type":"Group","parentId":68,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-72":{"id":72,"type":"Group","parentId":68,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-73":{"id":73,"type":"StaticText","parentId":69,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Font","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-74":{"id":74,"type":"DropDownList","parentId":69,"style":{"enabled":true,"varName":"fontListDD","text":"DropDownList","listItems":"font1,font2","preferredSize":[0,0],"alignment":null,"selection":0,"helpTip":null}},"item-75":{"id":75,"type":"StaticText","parentId":70,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Size (px)","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-76":{"id":76,"type":"EditText","parentId":70,"style":{"enabled":true,"varName":"fontSizeBox","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"16","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":"0 will maintain size Unchanged"}},"item-77":{"id":77,"type":"Checkbox","parentId":70,"style":{"enabled":true,"varName":"boxTextCB","text":"Box Text","preferredSize":[0,0],"alignment":null,"helpTip":null,"checked":false}},"item-78":{"id":78,"type":"StaticText","parentId":71,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Justification","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-79":{"id":79,"type":"DropDownList","parentId":71,"style":{"enabled":true,"varName":"justificationDD","text":"DropDownList","listItems":"center,left","preferredSize":[0,0],"alignment":null,"selection":0,"helpTip":null}},"item-80":{"id":80,"type":"StaticText","parentId":72,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Language","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-81":{"id":81,"type":"DropDownList","parentId":72,"style":{"enabled":true,"varName":"languageDD","text":"DropDownList","listItems":"english, ptbr","preferredSize":[0,0],"alignment":null,"selection":0,"helpTip":null}},"item-82":{"id":82,"type":"Group","parentId":20,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"column","spacing":10,"alignChildren":["center","center"],"alignment":null}},"item-84":{"id":84,"type":"Button","parentId":82,"style":{"enabled":true,"varName":"starterLayersBtn","text":"Layers to be created","justify":"center","preferredSize":[0,0],"alignment":"fill","helpTip":null}},"item-85":{"id":85,"type":"Checkbox","parentId":57,"style":{"text":"Column Group","preferredSize":[0,0],"alignment":null,"varName":"columnGroupCB","helpTip":"Text Columns will be stacked in diferent groups","enabled":true}},"item-86":{"id":86,"type":"Checkbox","parentId":21,"style":{"enabled":true,"varName":"prioritizePSDCB","text":"Prioritize PSD Files","preferredSize":[0,0],"alignment":null,"helpTip":"It will prioritize PSD over more \"raw\" files (PNG, JPG)","checked":false}},"item-87":{"id":87,"type":"Checkbox","parentId":68,"style":{"enabled":true,"varName":"disableCustomFormattingCB","text":"Disable Custom Formatting","preferredSize":[0,0],"alignment":null,"helpTip":"If true, All text will be formatted ONLY by configurations above","checked":true}},"item-88":{"id":88,"type":"Button","parentId":82,"style":{"enabled":false,"varName":"customTextFormatsBtn","text":"Custom Text Formats","justify":"center","preferredSize":[0,0],"alignment":"fill","helpTip":null}}},"order":[0,67,20,1,6,4,5,45,46,47,40,57,58,59,60,64,65,85,68,69,73,74,70,75,76,77,71,78,79,72,80,81,87,82,84,88,19,21,22,53,52,86,55,9,66,48,50,49,36,37,38,56],"settings":{"importJSON":true,"indentSize":false,"cepExport":false,"includeCSSJS":true,"functionWrapper":false,"compactCode":false,"showDialog":true,"afterEffectsDockable":false,"itemReferenceList":"var"}}
*/

// WIN
// ===
this.win = new Window("dialog");
    this.win.text = "AutoTypeSetter";
    this.win.orientation = "row";
    this.win.alignChildren = ["left","top"];
    this.win.spacing = 10;
    this.win.margins = 16;

// GROUP1
// ======
var group1 = this.win.add("group", undefined, {name: "group1"});
    group1.orientation = "row";
    group1.alignChildren = ["left","center"];
    group1.spacing = 10;
    group1.margins = 0;

// GROUP2
// ======
var group2 = this.win.add("group", undefined, {name: "group2"});
    group2.orientation = "column";
    group2.alignChildren = ["fill","top"];
    group2.spacing = 10;
    group2.margins = 0;

// PANEL1
// ======
var panel1 = group2.add("panel", undefined, undefined, {name: "panel1"});
    panel1.text = "Page Indentifiers";
    panel1.orientation = "column";
    panel1.alignChildren = ["left","top"];
    panel1.spacing = 10;
    panel1.margins = 10;

// GROUP3
// ======
var group3 = panel1.add("group", undefined, {name: "group3"});
    group3.orientation = "row";
    group3.alignChildren = ["right","center"];
    group3.spacing = 10;
    group3.margins = 0;
    group3.alignment = ["center","top"];

var statictext1 = group3.add("statictext", undefined, undefined, {name: "statictext1"});
    statictext1.text = "Prefix";

this.pageIdentifierPrefixBox = group3.add('edittext {properties: {name: "pageIdentifierPrefixBox"}}');
    this.pageIdentifierPrefixBox.text = ">>";
    this.pageIdentifierPrefixBox.preferredSize.width = 60;

// GROUP4
// ======
var group4 = panel1.add("group", undefined, {name: "group4"});
    group4.orientation = "row";
    group4.alignChildren = ["right","center"];
    group4.spacing = 10;
    group4.margins = 0;
    group4.alignment = ["center","top"];

var statictext2 = group4.add("statictext", undefined, undefined, {name: "statictext2"});
    statictext2.text = "Suffix";

this.pageIdentifierSuffixBox = group4.add('edittext {properties: {name: "pageIdentifierSuffixBox"}}');
    this.pageIdentifierSuffixBox.preferredSize.width = 60;

// PANEL1
// ======
this.ignorePageNumberCB = panel1.add("checkbox", undefined, undefined, {name: "ignorePageNumberCB"});
    this.ignorePageNumberCB.helpTip = "This will ignore or not numbers between both identifiers";
    this.ignorePageNumberCB.text = "Ignore Page Number";

// PANEL2
// ======
var panel2 = group2.add("panel", undefined, undefined, {name: "panel2"});
    panel2.text = "Text Group";
    panel2.orientation = "column";
    panel2.alignChildren = ["left","top"];
    panel2.spacing = 10;
    panel2.margins = 10;

// GROUP5
// ======
var group5 = panel2.add("group", undefined, {name: "group5"});
    group5.orientation = "row";
    group5.alignChildren = ["right","center"];
    group5.spacing = 10;
    group5.margins = 0;
    group5.alignment = ["center","top"];

var statictext3 = group5.add("statictext", undefined, undefined, {name: "statictext3"});
    statictext3.text = "Name";

this.groupNameBox = group5.add('edittext {properties: {name: "groupNameBox"}}');
    this.groupNameBox.text = "Type";
    this.groupNameBox.preferredSize.width = 80;

// PANEL2
// ======
this.visibleGroupCB = panel2.add("checkbox", undefined, undefined, {name: "visibleGroupCB"});
    this.visibleGroupCB.helpTip = "Set Layer to Visible";
    this.visibleGroupCB.text = "Visible";

this.alwaysCreateGroupCB = panel2.add("checkbox", undefined, undefined, {name: "alwaysCreateGroupCB"});
    this.alwaysCreateGroupCB.helpTip = "Always create a new group, otherwise add text layers to an existing group";
    this.alwaysCreateGroupCB.text = "Always Create Group";

this.columnGroupCB = panel2.add("checkbox", undefined, undefined, {name: "columnGroupCB"});
    this.columnGroupCB.helpTip = "Text Columns will be stacked in diferent groups";
    this.columnGroupCB.text = "Column Group";

// PANEL3
// ======
var panel3 = group2.add("panel", undefined, undefined, {name: "panel3"});
    panel3.text = "Text Format";
    panel3.orientation = "column";
    panel3.alignChildren = ["right","top"];
    panel3.spacing = 10;
    panel3.margins = 10;

// GROUP6
// ======
var group6 = panel3.add("group", undefined, {name: "group6"});
    group6.orientation = "row";
    group6.alignChildren = ["left","center"];
    group6.spacing = 10;
    group6.margins = 0;

var statictext4 = group6.add("statictext", undefined, undefined, {name: "statictext4"});
    statictext4.text = "Font";

this.fontListDD = group6.add("dropdownlist", undefined, undefined, {name: "fontListDD", items: fontListDD_array});
    this.fontListDD.selection = 0;

// GROUP7
// ======
var group7 = panel3.add("group", undefined, {name: "group7"});
    group7.orientation = "row";
    group7.alignChildren = ["left","center"];
    group7.spacing = 10;
    group7.margins = 0;

var statictext5 = group7.add("statictext", undefined, undefined, {name: "statictext5"});
    statictext5.text = "Size (px)";

this.fontSizeBox = group7.add('edittext {properties: {name: "fontSizeBox"}}');
    this.fontSizeBox.text = "16";
    this.fontSizeBox.helpTip = "0 will maintain size Unchanged"

this.boxTextCB = group7.add("checkbox", undefined, undefined, {name: "boxTextCB"});
    this.boxTextCB.text = "Box Text";

// GROUP8
// ======
var group8 = panel3.add("group", undefined, {name: "group8"});
    group8.orientation = "row";
    group8.alignChildren = ["left","center"];
    group8.spacing = 10;
    group8.margins = 0;

var statictext6 = group8.add("statictext", undefined, undefined, {name: "statictext6"});
    statictext6.text = "Justification";

this.justificationDD = group8.add("dropdownlist", undefined, undefined, {name: "justificationDD", items: justificationDD_array});
    this.justificationDD.selection = 0;

// GROUP9
// ======
var group9 = panel3.add("group", undefined, {name: "group9"});
    group9.orientation = "row";
    group9.alignChildren = ["left","center"];
    group9.spacing = 10;
    group9.margins = 0;

var statictext7 = group9.add("statictext", undefined, undefined, {name: "statictext7"});
    statictext7.text = "Language";

this.languageDD = group9.add("dropdownlist", undefined, undefined, {name: "languageDD", items: languageDD_array});
    this.languageDD.selection = 0;

// PANEL3
// ======
this.disableCustomFormattingCB = panel3.add("checkbox", undefined, undefined, {name: "disableCustomFormattingCB"});
    this.disableCustomFormattingCB.text = "Disable Custom Formatting";
    this.disableCustomFormattingCB.helpTip = "If true, All text will be formatted ONLY by configurations above"
    this.disableCustomFormattingCB.value = true;

// GROUP10
// =======
var group10 = group2.add("group", undefined, {name: "group10"});
    group10.orientation = "column";
    group10.alignChildren = ["center","center"];
    group10.spacing = 10;
    group10.margins = 0;

this.starterLayersBtn = group10.add("button", undefined, undefined, {name: "starterLayersBtn"});
    this.starterLayersBtn.text = "Layers to be created";
    this.starterLayersBtn.alignment = ["fill","center"];

// this.customTextFormatsBtn = group10.add("button", undefined, undefined, {name: "customTextFormatsBtn"});
//     this.customTextFormatsBtn.enabled = false;
//     this.customTextFormatsBtn.text = "Custom Text Formats";
//     this.customTextFormatsBtn.alignment = ["fill","center"];

// GROUP11
// =======
var group11 = this.win.add("group", undefined, {name: "group11"});
    group11.orientation = "column";
    group11.alignChildren = ["fill","top"];
    group11.spacing = 10;
    group11.margins = 0;

// PANEL4
// ======
var panel4 = group11.add("panel", undefined, undefined, {name: "panel4"});
    panel4.text = "Files";
    panel4.orientation = "column";
    panel4.alignChildren = ["fill","top"];
    panel4.spacing = 10;
    panel4.margins = 10;

var statictext8 = panel4.add("group");
    statictext8.orientation = "column";
    statictext8.alignChildren = ["left","center"];
    statictext8.spacing = 0;

    statictext8.add("statictext", undefined, "Select a Folder including:", {name: "statictext8"});
    statictext8.add("statictext", undefined, "- A '.txt' file containing the text", {name: "statictext8"});
    statictext8.add("statictext", undefined, "- Image Files ('1.png', '2.jpg') ", {name: "statictext8"});
    statictext8.add("statictext", undefined, "", {name: "statictext8"});
    statictext8.add("statictext", undefined, "(if you don't select images, ", {name: "statictext8"});
    statictext8.add("statictext", undefined, "the script will run on a open", {name: "statictext8"});
    statictext8.add("statictext", undefined, "document)", {name: "statictext8"});

var statictext9 = panel4.add("statictext", undefined, undefined, {name: "statictext9"});
    statictext9.helpTip = "'.png', '.jpeg', '.jpg', '.psd', '.psb'";
    statictext9.text = "Formats Supported";
    statictext9.justify = "center";

this.selectAllFilesCB = panel4.add("checkbox", undefined, undefined, {name: "selectAllFilesCB"});
    this.selectAllFilesCB.helpTip = "You need to select all files, not a folder containing these files";
    this.selectAllFilesCB.text = "Select Files Instead";

this.prioritizePSDCB = panel4.add("checkbox", undefined, undefined, {name: "prioritizePSDCB"});
    this.prioritizePSDCB.helpTip = "It will prioritize PSD over more \u0022raw\u0022 files (PNG, JPG)";
    this.prioritizePSDCB.text = "Prioritize PSD Files";

this.selectFilesBtn = panel4.add("button", undefined, undefined, {name: "selectFilesBtn"});
    this.selectFilesBtn.text = "Select";
    this.selectFilesBtn.alignment = ["center","top"];

// PANEL5
// ======
var panel5 = group11.add("panel", undefined, undefined, {name: "panel5"});
    panel5.text = "Configuration";
    panel5.orientation = "column";
    panel5.alignChildren = ["left","top"];
    panel5.spacing = 10;
    panel5.margins = 10;

this.saveConfigBtn = panel5.add("button", undefined, undefined, {name: "saveConfigBtn"});
    this.saveConfigBtn.helpTip = "Quick Save Current Configuration";
    this.saveConfigBtn.text = "Save Config";
    this.saveConfigBtn.alignment = ["fill","top"];

this.registerConfigBtn = panel5.add("button", undefined, undefined, {name: "registerConfigBtn"});
    this.registerConfigBtn.helpTip = "Select a JSON with your custom configuration to use!  :D";
    this.registerConfigBtn.text = "Import Config";
    this.registerConfigBtn.alignment = ["fill","top"];

this.openFolderBtn = panel5.add("button", undefined, undefined, {name: "openFolderBtn"});
    this.openFolderBtn.text = "Open Scripts Folder";
    this.openFolderBtn.alignment = ["fill","top"];

this.resetConfigBtn = panel5.add("button", undefined, undefined, {name: "resetConfigBtn"});
    this.resetConfigBtn.enabled = false;
    this.resetConfigBtn.helpTip = "This will delete the JSON you registered";
    this.resetConfigBtn.text = "Reset Config";
    this.resetConfigBtn.alignment = ["fill","top"];

// GROUP12
// =======
var group12 = this.win.add("group", undefined, {name: "group12"});
    group12.orientation = "column";
    group12.alignChildren = ["fill","top"];
    group12.spacing = 10;
    group12.margins = 0;

this.confirmBtn = group12.add("button", undefined, undefined, {name: "confirmBtn"});
    this.confirmBtn.enabled = false;
    this.confirmBtn.text = "OK";

this.cancelBtn = group12.add("button", undefined, undefined, {name: "cancelBtn"});
    this.cancelBtn.text = "Cancel";

var statictext10 = group12.add("group");
    statictext10.orientation = "column";
    statictext10.alignChildren = ["left","center"];
    statictext10.spacing = 0;

    statictext10.add("statictext", undefined, "Created By ", {name: "statictext10"});
    statictext10.add("statictext", undefined, "KrevlinMen", {name: "statictext10"});
    statictext10.add("statictext", undefined, "ImSamuka", {name: "statictext10"});


}

function formatUserInterface() {

  //* Create a new one by default
  const UI = new createUserInterface()

  //* Set New Variables
  readConfig()
  UI.arrayFiles = []
  UI.Executing = function () {}


  //* Dropdown Sizes
  UI.fontListDD.maximumSize = dropDownSizes
  UI.justificationDD.maximumSize = dropDownSizes
  UI.languageDD.maximumSize = dropDownSizes


  //* Set New Properties
  UI.win.defaultElement = UI.confirmBtn;
  UI.win.cancelElement = UI.cancelBtn;
  UI.resetConfigBtn.enabled = getFileFromScriptPath(savedFilePath).exists


  setUIConfigs()


  //* Functions

  function setUIConfigs() {

    //? Simple Ones

    UI.pageIdentifierPrefixBox.text = isNotUndef(config.pageIdentifierPrefix) ? config.pageIdentifierPrefix : defaultConfig.pageIdentifierPrefix
    UI.pageIdentifierSuffixBox.text = isNotUndef(config.pageIdentifierSuffix) ? config.pageIdentifierSuffix : defaultConfig.pageIdentifierSuffix
    UI.ignorePageNumberCB.value = isNotUndef(config.ignorePageNumber) ? config.ignorePageNumber : defaultConfig.ignorePageNumber

    UI.prioritizePSDCB.value = isNotUndef(config.prioritizePSD) ? config.prioritizePSD : defaultConfig.prioritizePSD
    UI.selectAllFilesCB.value = isNotUndef(config.selectAllFiles) ? config.selectAllFiles : defaultConfig.selectAllFiles
    UI.alwaysCreateGroupCB.value = isNotUndef(config.alwaysCreateGroup) ? config.alwaysCreateGroup : defaultConfig.alwaysCreateGroup

    UI.columnGroupCB.value = isNotUndef(config.columnGroup) ? config.columnGroup : defaultConfig.columnGroup
    UI.disableCustomFormattingCB.value = isNotUndef(config.disableCustomFormatting) ? config.disableCustomFormatting : defaultConfig.disableCustomFormatting

    UI.groupNameBox.text = isNotUndef(config.groupLayer.name) ? config.groupLayer.name : defaultConfig.groupLayer.name
    UI.visibleGroupCB.value = isNotUndef(config.groupLayer.visible) ? config.groupLayer.visible : defaultConfig.LayerFormatObject.visible

    UI.fontSizeBox.text = isNotUndef(config.defaultTextFormat.size) ? config.defaultTextFormat.size :  defaultConfig.LayerFormatObject.size
    UI.boxTextCB.value = isNotUndef(config.defaultTextFormat.boxText) ? config.defaultTextFormat.boxText :  defaultConfig.LayerFormatObject.boxText


    //? Complex Ones - this is used to select the valid option on every dropdown

    var fontListDDFont = getFont(isNotUndef(config.defaultTextFormat.font) ? config.defaultTextFormat.font :  defaultConfig.LayerFormatObject.font)
    UI.fontListDD.selection = isNotUndef(fontListDDFont) ? UI.fontListDD.find(fontListDDFont.name) | 0 : 0

    var justificationDDKey = getKeyFromValue(justificationObj, isNotUndef(config.defaultTextFormat.justification) ? config.defaultTextFormat.justification.toUpperCase() :  defaultConfig.LayerFormatObject.justification)
    UI.justificationDD.selection = UI.justificationDD.find( justificationDDKey ) | 0

    var languageDDKey = getKeyFromValue(languageObj, isNotUndef(config.defaultTextFormat.language) ? config.defaultTextFormat.language.toUpperCase() :  defaultConfig.LayerFormatObject.language)
    UI.languageDD.selection = UI.languageDD.find( languageDDKey ) | 0

    app.refresh(); //? Fallback
  }

  function getUIConfigs() {

    setValidConfigValue(UI.pageIdentifierPrefixBox.text, config, "pageIdentifierPrefix")
    setValidConfigValue(UI.pageIdentifierSuffixBox.text, config, "pageIdentifierSuffix")
    setValidConfigValue(UI.ignorePageNumberCB.value, config, "ignorePageNumber")

    setValidConfigValue(UI.prioritizePSDCB.value, config, "prioritizePSD")
    setValidConfigValue(UI.selectAllFilesCB.value, config, "selectAllFiles")
    setValidConfigValue(UI.alwaysCreateGroupCB.value, config, "alwaysCreateGroup")

    setValidConfigValue(UI.columnGroupCB.value, config, "columnGroup")
    setValidConfigValue(UI.disableCustomFormattingCB.value, config, "disableCustomFormatting")
    setValidConfigValue(UI.groupNameBox.text, config.groupLayer, [ "LayerFormatObject" , "name" ])

    setValidConfigValue(UI.visibleGroupCB.value, config.groupLayer, [ "LayerFormatObject" , "visible" ])

    if (isNaN(parseFloat(UI.fontSizeBox.text)))
      alert("Font size is not a number.")
    else
      setValidConfigValue(parseFloat(UI.fontSizeBox.text), config.defaultTextFormat, [ "LayerFormatObject" , "size" ])

    setValidConfigValue(UI.boxTextCB.value, config.defaultTextFormat, [ "LayerFormatObject" , "boxText" ])

    setValidConfigValue(UI.fontListDD.selection.text, config.defaultTextFormat, [ "LayerFormatObject" , "font" ])
    setValidConfigValue(justificationObj[UI.justificationDD.selection.text], config.defaultTextFormat, [ "LayerFormatObject" , "justification" ])
    setValidConfigValue(languageObj[UI.languageDD.selection.text], config.defaultTextFormat, [ "LayerFormatObject" , "language" ])

  }

  function saveConfigArchive(configObject) {

    const importing = configObject === undefined

    if (importing) {
      const file = File.openDialog("Select Configuration File", "JSON:*.json", false)
      if (file === null) return;

      //? Reading the file
      try {
        var text = readFile(file)
      } catch (error) {
        throwError("Error while reading your file.\nPlease check if the program can read the file.", error)
      }

      //? Converting JSON to Object
      try {
        configObject = JSON.parse(text)
      } catch (error) {
        throwError("Error while converting your file to a object.\nPlease check if the file is a valid JSON.", error)
      }


    }


    try {
      const newFile = getFileFromScriptPath(savedFilePath)

      newFile.encoding = 'UTF8'; // set to 'UTF8' or 'UTF-8'
      newFile.open("w");
      newFile.write(JSON.stringify(configObject))
      newFile.close();

    } catch (error) {
      throwError("Something went wrong when registering configuration.", error)
    }


    UI.resetConfigBtn.enabled = true;

    alert((importing ? "Imported" : "Saved" ) + " Successfully! :D" + (importing ? "\nUnfortunately, it may take a while we read and update the screen" : "" ))

    if (importing){
      readConfig()
      setUIConfigs()
      app.refresh()
    }

  }


  //* Set Methods

  UI.openFolderBtn.onClick = function () {
    getFileFromScriptPath("").execute()
  }

  UI.registerConfigBtn.onClick = saveConfigArchive

  UI.saveConfigBtn.onClick = function () {

    getUIConfigs()

    const comparedConfig = getFileFromScriptPath(savedFilePath).exists ? readJson(savedFilePath, "Saved configuration") : defaultConfig

    if (!isEqualObjects(config, comparedConfig)) {
      saveConfigArchive(config)
    } else {
      alert("Nothing changed.")
    }
  }

  UI.starterLayersBtn.onClick = function () {
    showStarterLayerUI()
  }


  UI.resetConfigBtn.onClick = function () {
    const savedFile = getFileFromScriptPath(savedFilePath)
    if (!savedFile.exists) return;

    try {
      savedFile.remove()
    } catch (error) {
      throwError("Something went wrong when trying to delete saved configuration.", error)
    }

    UI.resetConfigBtn.enabled = false;
    readConfig()
    setUIConfigs()

  }

  UI.groupNameBox.onChange = function () {
    if (!UI.groupNameBox.text.length)
      UI.groupNameBox.text = isNotUndef(config.groupLayer.name) ? config.groupLayer.name : defaultConfig.groupLayer.name
  }

  UI.fontSizeBox.onChanging = function () {
    UI.fontSizeBox.text = UI.fontSizeBox.text.replace(/[^0-9]/g, '')
    if (!UI.fontSizeBox.text.length || isNaN(parseInt(UI.fontSizeBox.text)) )
      UI.fontSizeBox.text = 0

    if (parseInt(UI.fontSizeBox.text) > 255) UI.fontSizeBox.text = 255
  }
  UI.fontSizeBox.onChange = UI.fontSizeBox.onChanging
  UI.fontSizeBox.onChanging()

  UI.selectFilesBtn.onClick = function () {
    try {
      if (UI.selectAllFilesCB.value)
        UI.arrayFiles = File.openDialog("Select Files", ["All:*.txt;*.png;*.jpeg;*.jpg;*.psd;*.psb", "Text:*.txt", "Images:*.png;*.jpeg;*.jpg;*.psd;*.psb"], true)
      else
        UI.arrayFiles = Folder.selectDialog("Select Folder").getFiles()
    } catch (error) {
      UI.arrayFiles = []
    }
    if (UI.arrayFiles === null) UI.arrayFiles = []

    if (UI.arrayFiles.length) {
      UI.confirmBtn.enabled = true;
      UI.selectFilesBtn.text = "Select Again"
    } else {
      UI.confirmBtn.enabled = false;
      UI.selectFilesBtn.text = "Select"
    }
    app.refresh();
  }

  UI.confirmBtn.onClick = function () {
    //* Close Window
    UI.win.close()

    //* Set Configuration Object
    getUIConfigs()

    if (typeof UI.Executing === "function") UI.Executing();
  }

  return UI
}


















































function createStarterLayerTab(index, layerFormat, tabPanel_innerwrap){

  var blendModeDD_array = getKeys(blendModeObj)

  /*
  Just Tab Part:
  {"items":{"item-0":{"id":0,"type":"Dialog","parentId":false,"style":{"text":"Layers to Create","preferredSize":[0,0],"margins":16,"orientation":"column","spacing":10,"alignChildren":["left","top"],"varName":"tab1","windowType":"Dialog","creationProps":{"su1PanelCoordinates":false,"maximizeButton":false,"minimizeButton":false,"independent":false,"closeButton":true,"borderless":false,"resizeable":false},"enabled":true}},"item-42":{"id":42,"type":"Group","parentId":67,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":6,"alignChildren":["right","center"],"alignment":null}},"item-43":{"id":43,"type":"StaticText","parentId":42,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Layer Name","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-44":{"id":44,"type":"EditText","parentId":42,"style":{"enabled":true,"varName":"nameBox","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"Raw","justify":"left","preferredSize":[100,0],"alignment":"fill","helpTip":null}},"item-48":{"id":48,"type":"Checkbox","parentId":61,"style":{"enabled":true,"varName":"visibleCB","text":"Visible","preferredSize":[0,0],"alignment":null,"helpTip":"Visibility of the layer","checked":true}},"item-49":{"id":49,"type":"Checkbox","parentId":61,"style":{"enabled":true,"varName":"isBackgroundLayerCB","text":"Is Background Layer","preferredSize":[0,0],"alignment":null,"helpTip":"Check this to make the layer, the background layer"}},"item-51":{"id":51,"type":"Panel","parentId":67,"style":{"enabled":true,"varName":null,"creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Locking","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["fill","top"],"alignment":null}},"item-52":{"id":52,"type":"Checkbox","parentId":51,"style":{"enabled":true,"varName":"allLockedCB","text":"All Locked","preferredSize":[0,0],"alignment":"center","helpTip":null}},"item-53":{"id":53,"type":"Checkbox","parentId":51,"style":{"enabled":true,"varName":"transparentPixelsLockedCB","text":"Transparent Pixels Locked","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-54":{"id":54,"type":"Checkbox","parentId":51,"style":{"enabled":true,"varName":"pixelsLockedCB","text":"Pixels Locked","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-55":{"id":55,"type":"Checkbox","parentId":51,"style":{"enabled":true,"varName":"positionLockedCB","text":"Position Locked","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-56":{"id":56,"type":"Checkbox","parentId":61,"style":{"enabled":true,"varName":"groupedCB","text":"Clipping Mask","preferredSize":[0,0],"alignment":null,"helpTip":""}},"item-58":{"id":58,"type":"Slider","parentId":59,"style":{"enabled":true,"varName":"opacitySlider","preferredSize":[100,0],"alignment":"fill","helpTip":null}},"item-59":{"id":59,"type":"Group","parentId":67,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["right","center"],"alignment":"fill"}},"item-60":{"id":60,"type":"StaticText","parentId":59,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Opacity","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-61":{"id":61,"type":"Panel","parentId":67,"style":{"enabled":true,"varName":null,"creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":null}},"item-62":{"id":62,"type":"Checkbox","parentId":61,"style":{"enabled":true,"varName":"duplicateCB","text":"Duplicate","preferredSize":[0,0],"alignment":null,"helpTip":"This will duplicate the layer below/before"}},"item-64":{"id":64,"type":"Button","parentId":67,"style":{"enabled":true,"varName":"deleteBtn","text":"Delete","justify":"center","preferredSize":[0,0],"alignment":"fill","helpTip":"Delete this Layer"}},"item-67":{"id":67,"type":"Panel","parentId":0,"style":{"enabled":true,"varName":null,"creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["fill","top"],"alignment":"fill"}},"item-68":{"id":68,"type":"Group","parentId":67,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"column","spacing":10,"alignChildren":["center","center"],"alignment":null}},"item-69":{"id":69,"type":"StaticText","parentId":68,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Blend Mode","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-70":{"id":70,"type":"DropDownList","parentId":68,"style":{"enabled":true,"varName":"blendModeDD","text":"DropDownList","listItems":"Item 1, -, Item 2","preferredSize":[0,0],"alignment":"fill","selection":0,"helpTip":null}}},"order":[0,67,42,43,44,59,60,58,68,69,70,61,48,56,49,62,51,52,53,54,55,64],"settings":{"importJSON":true,"indentSize":false,"cepExport":false,"includeCSSJS":true,"functionWrapper":false,"compactCode":false,"showDialog":true,"afterEffectsDockable":false,"itemReferenceList":"var"},"activeId":70}
  */


  const tab = tabPanel_innerwrap.add("group", undefined, {name: "Layer " + (index + 1)});
  tab.text = "Layer " + (index + 1);
  tab.orientation = "column";
  tab.alignChildren = ["fill","top"];
  tab.spacing = 10;
  tab.margins = 0;



  // PANEL1
  // ======
  var panel1 = tab.add("panel", undefined, undefined, {name: "panel1"});
      panel1.orientation = "column";
      panel1.alignChildren = ["fill","top"];
      panel1.spacing = 10;
      panel1.margins = 10;
      panel1.alignment = ["fill","top"];

  // GROUP1
  // ======
  var group1 = panel1.add("group", undefined, {name: "group1"});
      group1.orientation = "row";
      group1.alignChildren = ["right","center"];
      group1.spacing = 6;
      group1.margins = 0;

  var nameBox = group1.add("statictext", undefined, undefined, {name: "nameBox"});
      nameBox.text = "Layer Name";

  var nameBox = group1.add('edittext {properties: {name: "nameBox"}}');
      nameBox.text = "Raw";
      nameBox.preferredSize.width = 100;
      nameBox.alignment = ["right","fill"];

  // GROUP2
  // ======
  var group2 = panel1.add("group", undefined, {name: "group2"});
      group2.orientation = "row";
      group2.alignChildren = ["right","center"];
      group2.spacing = 10;
      group2.margins = 0;
      group2.alignment = ["fill","top"];

  var statictext2 = group2.add("statictext", undefined, undefined, {name: "statictext2"});
      statictext2.text = "Opacity";

  var opacitySlider = group2.add("slider", undefined, undefined, undefined, undefined, {name: "opacitySlider"});
      opacitySlider.minvalue = 0;
      opacitySlider.maxvalue = 100;
      opacitySlider.value = 100;
      opacitySlider.preferredSize.width = 100;
      opacitySlider.alignment = ["right","fill"];

// GROUP3
// ======
var group3 = panel1.add("group", undefined, {name: "group3"});
    group3.orientation = "row";
    group3.alignChildren = ["right","center"];
    group3.spacing = 10;
    group3.margins = 0;

var statictext3 = group3.add("statictext", undefined, undefined, {name: "statictext3"});
    statictext3.text = "Blend Mode";
    statictext3.justify = "center";

var blendModeDD = group3.add("dropdownlist", undefined, undefined, {name: "blendModeDD", items: blendModeDD_array});
    blendModeDD.alignment = ["right","fill"];

  // PANEL2
  // ======
  var panel2 = panel1.add("panel", undefined, undefined, {name: "panel2"});
      panel2.orientation = "column";
      panel2.alignChildren = ["left","top"];
      panel2.spacing = 10;
      panel2.margins = 10;

  var visibleCB = panel2.add("checkbox", undefined, undefined, {name: "visibleCB"});
      visibleCB.helpTip = "Visibility of the layer";
      visibleCB.text = "Visible";
      visibleCB.value = true;

  var groupedCB = panel2.add("checkbox", undefined, undefined, {name: "groupedCB"});
      groupedCB.text = "Clipping Mask";

  // PANEL3
  // ======
  var panel3 = panel1.add("panel", undefined, undefined, {name: "panel3"});
      panel3.text = "Locking";
      panel3.orientation = "column";
      panel3.alignChildren = ["fill","top"];
      panel3.spacing = 10;
      panel3.margins = 10;

  var allLockedCB = panel3.add("checkbox", undefined, undefined, {name: "allLockedCB"});
      allLockedCB.text = "All Locked";
      allLockedCB.alignment = ["center","top"];

  var transparentPixelsLockedCB = panel3.add("checkbox", undefined, undefined, {name: "transparentPixelsLockedCB"});
      transparentPixelsLockedCB.text = "Transparent Pixels Locked";

  var pixelsLockedCB = panel3.add("checkbox", undefined, undefined, {name: "pixelsLockedCB"});
      pixelsLockedCB.text = "Pixels Locked";

  var positionLockedCB = panel3.add("checkbox", undefined, undefined, {name: "positionLockedCB"});
      positionLockedCB.text = "Position Locked";


  //* -------------------------------------------------------------

  //? --------- Fallbacks ---------

  var duplicateCB = { value:false }
  var isBackgroundLayerCB = { value:false }

  //? --------- Conditional Object Creation ---------



  if (index){
    //? Index is more than 1

    duplicateCB = panel2.add("checkbox", undefined, undefined, {name: "duplicateCB"});
      duplicateCB.helpTip = "This will duplicate the layer below/before";
      duplicateCB.text = "Duplicate";

    var deleteBtn = panel1.add("button", undefined, undefined, {name: "deleteBtn"});
      deleteBtn.helpTip = "Delete this Layer";
      deleteBtn.text = "Delete";
      deleteBtn.alignment = ["fill","top"];

  } else {
    //? Index is 0

    isBackgroundLayerCB = panel2.add("checkbox", undefined, undefined, {name: "isBackgroundLayerCB"});
      isBackgroundLayerCB.helpTip = "Check this to make the layer, the background layer";
      isBackgroundLayerCB.text = "Is Background Layer";

  }



  //? --------- Functions ---------


  function changeOne(element, enabled, value){
    element.enabled = enabled

    if (isNotUndef(value)){

      if (element.type == "checkbox"){
        element.value = value

      } else if (element.type == "slider" && !value){
        element.value = 100
        element.onChange()
      }

    }
  }

  function changeAll(array, enabled, value){
    for (var i = 0, l = array.length; i < l; i++)
      changeOne(array[i], enabled, value)
  }



  //? --------- Set Properties ---------

  tab.alignment = ["fill","fill"];
  tab.visible = false;

  blendModeDD.maximumSize = dropDownSizes

  opacitySlider.onChange = function () {
    opacitySlider.helpTip = opacitySlider.value
  }
  opacitySlider.onChanging = opacitySlider.onChange //? Fallback

  allLockedCB.onClick = function () {
    if (allLockedCB.value)
      changeAll([transparentPixelsLockedCB, pixelsLockedCB, positionLockedCB], false, false)
     else
      changeAll([transparentPixelsLockedCB, pixelsLockedCB, positionLockedCB], true)
  }


  nameBox.onChange = function () {
    if (!nameBox.text.length)
      nameBox.text = defaultConfig.LayerFormatObject.name
  }


  if (index){
    //? Index is more than 1

    duplicateCB.value = isNotUndef(layerFormat.duplicate) ? layerFormat.duplicate : defaultConfig.LayerFormatObject.duplicate
    deleteBtn.onClick = function () {
        tabPanel_innerwrap.deleteLayer(index)
    }

  } else {
    //? Index is 0

    isBackgroundLayerCB.onClick = function () {
      if (isBackgroundLayerCB.value){
        changeOne(visibleCB, false, true)
        changeAll([nameBox,opacitySlider,allLockedCB,transparentPixelsLockedCB, pixelsLockedCB, positionLockedCB], false, false)
      } else {
        changeOne(visibleCB, true)
        changeAll([nameBox,opacitySlider,allLockedCB,transparentPixelsLockedCB, pixelsLockedCB, positionLockedCB], true)
      }
    }

    isBackgroundLayerCB.value = isNotUndef(layerFormat.isBackgroundLayer) ? layerFormat.isBackgroundLayer : defaultConfig.LayerFormatObject.isBackgroundLayer
    isBackgroundLayerCB.onClick()

    groupedCB.enabled = false
  }


  nameBox.text = isNotUndef(layerFormat.name) ? layerFormat.name : defaultConfig.LayerFormatObject.name
  opacitySlider.value = isNotUndef(layerFormat.opacity) ? layerFormat.opacity : defaultConfig.LayerFormatObject.opacity
  visibleCB.value = isNotUndef(layerFormat.visible) ? layerFormat.visible : defaultConfig.LayerFormatObject.visible
  groupedCB.value = isNotUndef(layerFormat.grouped) ? layerFormat.grouped : defaultConfig.LayerFormatObject.grouped
  allLockedCB.value = isNotUndef(layerFormat.allLocked) ? layerFormat.allLocked : defaultConfig.LayerFormatObject.allLocked
  transparentPixelsLockedCB.value = isNotUndef(layerFormat.transparentPixelsLocked) ? layerFormat.transparentPixelsLocked : defaultConfig.LayerFormatObject.transparentPixelsLocked
  pixelsLockedCB.value = isNotUndef(layerFormat.pixelsLocked) ? layerFormat.pixelsLocked : defaultConfig.LayerFormatObject.pixelsLocked
  positionLockedCB.value = isNotUndef(layerFormat.positionLocked) ? layerFormat.positionLocked : defaultConfig.LayerFormatObject.positionLocked

  var blendModeDDKey = getKeyFromValue(blendModeObj, isNotUndef(layerFormat.blendMode) ? layerFormat.blendMode.toUpperCase() : defaultConfig.LayerFormatObject.blendMode)
  blendModeDD.selection = blendModeDD.find( blendModeDDKey ) | 0


  allLockedCB.onClick()
  opacitySlider.onChange()


  tab.items = {
    tab: tab, // dialog
    nameBox: nameBox, // textBox
    opacitySlider: opacitySlider, // slider
    visibleCB: visibleCB, // checkbox
    groupedCB: groupedCB, // checkbox
    isBackgroundLayerCB: isBackgroundLayerCB, // checkbox
    duplicateCB: duplicateCB, // checkbox
    allLockedCB: allLockedCB, // checkbox
    transparentPixelsLockedCB: transparentPixelsLockedCB, // checkbox
    pixelsLockedCB: pixelsLockedCB, // checkbox
    positionLockedCB: positionLockedCB, // checkbox
    blendModeDD: blendModeDD // dropdown
  };

  return tab
  }




function createStarterLayerUI(repeatIndex){

  /*
  JSON Starter Layers:
  {"items":{"item-0":{"id":0,"type":"Dialog","parentId":false,"style":{"text":"Layers to Create","preferredSize":[0,0],"margins":16,"orientation":"column","spacing":10,"alignChildren":["left","top"],"varName":"win","windowType":"Dialog","creationProps":{"su1PanelCoordinates":false,"maximizeButton":false,"minimizeButton":false,"independent":false,"closeButton":true,"borderless":false,"resizeable":false},"enabled":true}},"item-36":{"id":36,"type":"Group","parentId":0,"style":{"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null,"varName":null,"enabled":true}},"item-38":{"id":38,"type":"Button","parentId":36,"style":{"text":"Close","justify":"center","preferredSize":[0,0],"alignment":null,"varName":"closeBtn","helpTip":null,"enabled":true}},"item-39":{"id":39,"type":"VerticalTabbedPanel","parentId":0,"style":{"enabled":true,"varName":"tabPanel","preferredSize":[0,0],"tabNavWidth":0,"margins":0,"alignment":null,"selection":40}},"item-40":{"id":40,"type":"Tab","parentId":39,"style":{"enabled":true,"varName":"nameBox","text":"Layer 1","orientation":"column","spacing":10,"alignChildren":["fill","top"]}},"item-41":{"id":41,"type":"Tab","parentId":39,"style":{"enabled":true,"varName":null,"text":"Layer 2","orientation":"column","spacing":10,"alignChildren":["fill","top"]}},"item-42":{"id":42,"type":"Group","parentId":67,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":6,"alignChildren":["right","center"],"alignment":null}},"item-43":{"id":43,"type":"StaticText","parentId":42,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Layer Name","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-44":{"id":44,"type":"EditText","parentId":42,"style":{"enabled":true,"varName":null,"creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"Raw","justify":"left","preferredSize":[100,0],"alignment":"fill","helpTip":null}},"item-48":{"id":48,"type":"Checkbox","parentId":61,"style":{"enabled":true,"varName":"visibleCB","text":"Visible","preferredSize":[0,0],"alignment":null,"helpTip":"Visibility of the layer","checked":true}},"item-49":{"id":49,"type":"Checkbox","parentId":61,"style":{"enabled":true,"varName":"isBackgroundLayerCB","text":"Is Background Layer","preferredSize":[0,0],"alignment":null,"helpTip":"Check this to make the layer, the background layer"}},"item-51":{"id":51,"type":"Panel","parentId":67,"style":{"enabled":true,"varName":null,"creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Locking","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["fill","top"],"alignment":null}},"item-52":{"id":52,"type":"Checkbox","parentId":51,"style":{"enabled":true,"varName":"allLockedCB","text":"All Locked","preferredSize":[0,0],"alignment":"center","helpTip":null}},"item-53":{"id":53,"type":"Checkbox","parentId":51,"style":{"enabled":true,"varName":"transparentPixelsLockedCB","text":"Transparent Pixels Locked","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-54":{"id":54,"type":"Checkbox","parentId":51,"style":{"enabled":true,"varName":"pixelsLockedCB","text":"Pixels Locked","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-55":{"id":55,"type":"Checkbox","parentId":51,"style":{"enabled":true,"varName":"positionLockedCB","text":"Position Locked","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-56":{"id":56,"type":"Checkbox","parentId":61,"style":{"enabled":true,"varName":"groupedCB","text":"Clipping Mask","preferredSize":[0,0],"alignment":null,"helpTip":""}},"item-58":{"id":58,"type":"Slider","parentId":59,"style":{"enabled":true,"varName":"opacitySlider","preferredSize":[100,0],"alignment":"fill","helpTip":null}},"item-59":{"id":59,"type":"Group","parentId":67,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["right","center"],"alignment":"fill"}},"item-60":{"id":60,"type":"StaticText","parentId":59,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Opacity","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-61":{"id":61,"type":"Panel","parentId":67,"style":{"enabled":true,"varName":null,"creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":null}},"item-62":{"id":62,"type":"Checkbox","parentId":61,"style":{"enabled":true,"varName":"duplicateCB","text":"Duplicate","preferredSize":[0,0],"alignment":null,"helpTip":"This will duplicate the layer below/before"}},"item-63":{"id":63,"type":"StaticText","parentId":41,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"TESTE LAYER 2","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-64":{"id":64,"type":"Button","parentId":67,"style":{"enabled":true,"varName":"deleteBtn","text":"Delete","justify":"center","preferredSize":[0,0],"alignment":"fill","helpTip":"Delete this Layer"}},"item-65":{"id":65,"type":"Checkbox","parentId":36,"style":{"enabled":true,"varName":"disableStarterLayerCB","text":"Disable All","preferredSize":[0,0],"alignment":null,"helpTip":"Disable layer creation","checked":true}},"item-66":{"id":66,"type":"Button","parentId":36,"style":{"text":"Add Layer","justify":"center","preferredSize":[0,0],"alignment":null,"varName":"addLayerBtn","helpTip":"Create a new layer below all others","enabled":true}},"item-67":{"id":67,"type":"Panel","parentId":40,"style":{"enabled":true,"varName":null,"creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["fill","top"],"alignment":"fill"}}},"order":[0,36,65,66,38,39,40,67,42,43,44,59,60,58,61,48,56,49,62,51,52,53,54,55,64,41,63],"settings":{"importJSON":true,"indentSize":false,"cepExport":false,"includeCSSJS":true,"functionWrapper":false,"compactCode":false,"showDialog":true,"afterEffectsDockable":false,"itemReferenceList":"var"},"activeId":58}
  */

  // WIN
  // ===
  var win = new Window("dialog");
      win.text = "Layers to Create";
      win.orientation = "column";
      win.alignChildren = ["left","top"];
      win.spacing = 10;
      win.margins = 16;



  // GROUP1
  // ======
  var group1 = win.add("group", undefined, {name: "group1"});
      group1.orientation = "row";
      group1.alignChildren = ["left","center"];
      group1.spacing = 10;
      group1.margins = 0;

  var disableStarterLayerCB = group1.add("checkbox", undefined, undefined, {name: "disableStarterLayerCB"});
      disableStarterLayerCB.helpTip = "Disable layer creation";
      disableStarterLayerCB.text = "Disable All";
      disableStarterLayerCB.value = true;

  var addLayerBtn = group1.add("button", undefined, undefined, {name: "addLayerBtn"});
      addLayerBtn.helpTip = "Create a new layer below all others";
      addLayerBtn.text = "Add Layer";

  var closeBtn = group1.add("button", undefined, undefined, {name: "closeBtn"});
      closeBtn.text = "Close";



  // TABPANEL
  // ========
  var tabPanel = win.add("group", undefined, undefined, {name: "tabPanel"});
      tabPanel.alignChildren = ["left","fill"];
  var tabPanel_nav = tabPanel.add ("listbox", undefined, [], { columnWidths: [60]});
  var tabPanel_innerwrap = tabPanel.add("group")
      tabPanel_innerwrap.alignment = ["fill","fill"];
      tabPanel_innerwrap.orientation = ["stack"];




  // * -------------------------------------------------------------------


  const tabPanel_tabs = [];


  //? --------- Functions ---------

  function deleteLayer(index){
    config.starterLayerFormats.splice(index,1)
    tabPanel_tabs.splice(index,1)
    tabPanel_nav.remove(index)
    tabPanel_innerwrap.remove(index)
    tabPanel_nav.selection = index - 1;
  }

  function addLayer(index){

    if (index === undefined || index >= config.starterLayerFormats.length){
      index = config.starterLayerFormats.length
      config.starterLayerFormats.push({})
    }

    tabPanel_tabs.push(createStarterLayerTab(index, config.starterLayerFormats[index], tabPanel_innerwrap))
    tabPanel_nav.add ("item", "Layer " + (index + 1))
    tabPanel_nav.selection = index


    if (win.visible){
      win.repeat = index
      win.close()
    }
  }

  function showTab_tabPanel() {
    if ( tabPanel_nav.selection !== null ) {
      for (var i = tabPanel_tabs.length-1; i >= 0; i--)
        tabPanel_tabs[i].visible = false;
      tabPanel_tabs[tabPanel_nav.selection.index].visible = true;
    }
  }

  //? --------- Set Properties ---------

  win.cancelElement = closeBtn
  win.defaultElement = addLayerBtn

  tabPanel_nav.onChange = showTab_tabPanel;
  tabPanel_innerwrap.deleteLayer = deleteLayer
  addLayerBtn.onClick = addLayer

  disableStarterLayerCB.value = config.disableStarterLayer
  disableStarterLayerCB.onClick = function () {
    config.disableStarterLayer = disableStarterLayerCB.value
  }


  //? Add all Layers
  for (var i = 0; i < config.starterLayerFormats.length; i++)
    addLayer(i)

  //? Show the first one by default, or repeatIndex
  tabPanel_nav.selection = repeatIndex === undefined ? 0 : repeatIndex
  showTab_tabPanel() //? Fallback of line above

  win.items = {
    win: win, // dialog
    tabPanel_tabs: tabPanel_tabs,
    disableStarterLayerCB: disableStarterLayerCB, // checkbox
    addLayerBtn: addLayerBtn, // button
    closeBtn: closeBtn, // button
  };

  win.show()

  return {
    tabPanel_tabs: tabPanel_tabs,
    repeat: win.repeat
    }
  }







function showStarterLayerUI(){

    function getUIConfigs(tabs){

      for (var i = 0, len = tabs.length; i < len; i++){
        var ti = tabs[i].items
        var layerFormat = config.starterLayerFormats[i]

        setValidConfigValue(ti.nameBox.text, layerFormat, ["LayerFormatObject", "name"] )
        setValidConfigValue(ti.duplicateCB.value, layerFormat, ["LayerFormatObject", "duplicate"] )
        setValidConfigValue(ti.isBackgroundLayerCB.value, layerFormat, ["LayerFormatObject", "isBackgroundLayer"] )
        setValidConfigValue(ti.opacitySlider.value, layerFormat, ["LayerFormatObject", "opacity"] )
        setValidConfigValue(ti.visibleCB.value, layerFormat, ["LayerFormatObject", "visible"] )
        setValidConfigValue(ti.groupedCB.value, layerFormat, ["LayerFormatObject", "grouped"] )
        setValidConfigValue(ti.allLockedCB.value, layerFormat, ["LayerFormatObject", "allLocked"] )
        setValidConfigValue(ti.transparentPixelsLockedCB.value, layerFormat, ["LayerFormatObject", "transparentPixelsLocked"] )
        setValidConfigValue(ti.pixelsLockedCB.value, layerFormat, ["LayerFormatObject", "pixelsLocked"] )
        setValidConfigValue(ti.positionLockedCB.value, layerFormat, ["LayerFormatObject", "positionLocked"] )

        setValidConfigValue(blendModeObj[ti.blendModeDD.selection.text], layerFormat, [ "LayerFormatObject" , "blendMode" ] )
      }
    }

    var repeatIndex = 0

    while (isNotUndef(repeatIndex)){

      var obj = createStarterLayerUI(repeatIndex)
      repeatIndex = obj.repeat

      getUIConfigs(obj.tabPanel_tabs)
    }

  }

