const fs = require('fs');
const os = require("os");

console.log(os.platform(),os.homedir());

const readStream = fs.createReadStream('./docs/hello2.txt', { encoding: 'utf8' });

const writeStream = fs.createWriteStream('./docs/writeStream.txt');

readStream.on('data', (chunk) => {
    console.log("----New Chunk-----");
    console.log(chunk);

    writeStream.write('\nNew Chunk\n');
    writeStream.write(chunk);

})