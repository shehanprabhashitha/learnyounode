const fs = require('fs')
const file = process.argv[2]

fs.readFile(file, function (error, contents) {
  if (error) {
    return console.log(error);
  }
  const newlines = contents.toString().split('\n').length - 1
  console.log(newlines);
}) 