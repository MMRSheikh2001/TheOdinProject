const fs = require('fs');

//read file
fs.readFile('./docs/hello.txt', (err, data) => {
    if (err) {
        console.log(err);
    }

    console.log(data.toString());
})

//write file

fs.writeFile('./docs/hello.txt', 'Again Hello World Writing', () => {
    console.log("File Was written");
})

// create file
fs.writeFile('./docs/hello2.txt', 'Again Hello World Writing Create', () => {
    console.log("File Was Created");
})

//create folder  delete folder

if (!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log("Folder created successfully");
        }

    })
} else {
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log("Folder deleted Successfully");


    })
}


//Delete File

if (fs.existsSync('./docs/deleteMe.txt')) {

    fs.unlink('./docs/deleteMe.txt', (err) => {
        if (err) {
            console.log(err);
        }
        console.log("File deleted successfully");
    })
}