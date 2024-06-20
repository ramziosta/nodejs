const path = require("node:path");

// console.log(path);
// console.log("dir :",__dirname);
// console.log("file: ",__filename);
// console.log("base dir :",path.basename(__dirname));
// console.log("base file: ",path.basename(__filename));
// console.log("ext dir :",path.extname(__dirname));
// console.log("ext file: ",path.extname(__filename));
// console.log("parse dir :",path.parse(__dirname));
// console.log("parse file: ",path.parse(__filename));

console.log("join :", path.resolve("folder1", "folder2", "../index.html"));
console.log("join :", path.resolve("/folder1", "folder2", "../index.html"));
console.log("join :", path.resolve("/folder1", "/folder2", "../index.html"));
console.log("join :", path.resolve("folder1", "/folder2", "../index.html"));
console.log("join :", path.resolve(__dirname, "data.json"));

