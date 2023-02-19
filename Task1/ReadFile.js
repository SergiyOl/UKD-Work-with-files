const fs = require('fs')

function ReadAndPrint(FilePath) {
    fs.readFile(FilePath, 'utf-8', (err, data) => {
        if (err) {
            console.error(err)
        }
        else {
            console.log(data)
        }    
    })
}

ReadAndPrint("Hello.txt")