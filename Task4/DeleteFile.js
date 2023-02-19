const fs = require('fs')

function DeleteFile(FilePath) {
    try {
        if (fs.existsSync(FilePath)) {
            fs.unlinkSync(FilePath)
            console.log(`Файл "${FilePath}" успішно видалено`)
        }
        else {
            console.log(`Файл "${FilePath}" не існує`)
        }
    }
    catch (error) {
        console.error(error)
    }
}

DeleteFile("CreatedFile.txt")