const fs = require('fs')

function MoveFile(SoursePath, DestinationPath) {
    fs.rename(SoursePath, DestinationPath, function (err) {
        if (err) {
            console.error(err)
        }
        else {
            console.log(`Файл "${SoursePath}" успішно переміщено`)
        }
    })
}

MoveFile("CreatedFile.txt", "./Task5/Destination/CreatedFile.txt")