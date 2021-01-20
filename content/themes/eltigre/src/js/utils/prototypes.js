String.prototype.regexpAccentify = function () {
  return this.toString().toLowerCase()
    .replace(/([\u00C0-\u00C6]|a|A)/ig, '([\u00C0-\u00C6]|a|A)')
    .replace(/([\u00C8-\u00CB]|e|E)/ig, '([\u00C8-\u00CB]|e|E)')
    .replace(/([\u00CC-\u00CF]|i|I)/ig, '([\u00CC-\u00CF]|i|I)')
    .replace(/([\u00D2-\u00D6]|o|O)/ig, '([\u00D2-\u00D6]|o|O)')
    .replace(/([\u00D9-\u00DC]|u|U)/ig, '([\u00D9-\u00DC]|u|U)')
};