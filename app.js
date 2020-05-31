const fs = require('fs')
const pdfparse = require('pdf-parse')

const pdf_file = fs.readFileSync('PDF_Filenamepdf')
const path = 'Word_Document_Filename.doc'

pdfparse(pdf_file).then(function (data){
    fs.writeFileSync(path,data.text)
})