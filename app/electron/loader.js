async function load(filePath = null) {
  const csv = require("csvtojson");
  const path = require('path');
  const csvFilePath = filePath || path.resolve(__dirname, "../../resources/data.csv");
  const array = await csv().fromFile(csvFilePath);
  return array;
}

module.exports = {
  load
}
