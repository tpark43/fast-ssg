import fs from 'fs';
import chalk from 'chalk';

const header = (title) => `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>${title}</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
<!-- Your generated content here... -->
`

const footer = `</body>\n</html>`

const defaultDir = "public";

const processFileToHTML = (filename, dirname = "") => {
    if(!filename) {
        throw new Error('filename is required!');
    }
    fs.promises.readFile(`${defaultDir}/${dirname}/${filename}`, 'utf-8')
        .then(res => {
            console.log(process.platform);
            const delimiter = process.platform !== 'win32' ? '\n' : '\r\n';
            const resArr = res.split(delimiter + delimiter);
            const addPTagArr = resArr.map(e => `<p>${e}</p>${delimiter}`);
            // if file is not existed.
            const outputDir = 'dist';
            !fs.existsSync(outputDir) && fs.mkdirSync(outputDir);
            fs.promises.writeFile(`${outputDir}/${filename.split('.')[0]}.html`, header(filename) + addPTagArr.join("") + footer);
        })
        .catch(err => {
            console.error(chalk.red(err.message));        
        });
}

export const processConvertingToHTML = (fileOrDirectoryName) => {
    console.log(fileOrDirectoryName);
    if (fs.lstatSync(`${defaultDir}/${fileOrDirectoryName}`).isDirectory()) {
        fs.promises.readdir(`${defaultDir}/${fileOrDirectoryName}`).then(files => {
            for(const file of files) {
                processFileToHTML(file, fileOrDirectoryName);
            }
        })
    } else {
        processFileToHTML(fileOrDirectoryName);
    }
}