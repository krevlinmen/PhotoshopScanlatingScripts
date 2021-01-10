/* 
<javascriptresource>
  <enableinfo>false</enableinfo>
</javascriptresource>
*/


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