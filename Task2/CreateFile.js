const fs = require('fs')

function CreateFile(FilePath, FileContent) {
    fs.writeFile(FilePath, FileContent, () => {
        console.log(`Файл ${FilePath} створено`)
    })
}

CreateFile("CreatedFile.txt", 'Файл створено')