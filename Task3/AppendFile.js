const fs = require('fs')

function AppendContentToFile(FilePath, FileContent) {
    fs.appendFile(FilePath, FileContent, () => {
        console.log(`Контент "${FileContent}" додано до файлу ${FilePath}`)
    })
}

AppendContentToFile("CreatedFile.txt", `
Додано контент до файлу`)