const fs = require('fs')
const projectsByYear = require('./src/components/Programming/projects.json')
const pictureNames = require('./src/components/Photography/pictureFileNames.json')

const projectScreenshotFileNames = projectsByYear
  .map(({ projects }) => projects)
  .flat()
  .map(project => project.screenshotFileName)

const fileNames = [...projectScreenshotFileNames, ...pictureNames]

fileNames.forEach((fileName) => {
  fs.copyFileSync(`./src/assets/${fileName}`, `./dist/_assets/${fileName}`)
})

const distPreviewsDir = './dist/_assets/previews'
if (!fs.existsSync(distPreviewsDir)) {
  fs.mkdirSync(distPreviewsDir)
}

pictureNames.forEach((fileName) => {
  fs.copyFileSync(`./src/assets/previews/${fileName}`, `${distPreviewsDir}/${fileName}`)
})
