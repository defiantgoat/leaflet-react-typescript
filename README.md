# Leaflet / React / Typescript Boilerplate

This boilerplate uses the following
* React: v. 16.13.1
* Redux: v. 4.0.5
* Typescript: v. 3.6.3
* Leaflet: v. 1.7.1
* Webpack: v. 4.42.0
* Jest: v. 24.9.0

### Setup
* Clone repo locally
* `yarn install`

### Development
To run in development run the following at the root:

`npm start`

This will run the application in 'hot' mode, so that edits to the files within the src directory will cause the app to reload in the browser.

Development occurs in the 'src' folder.

### Building
To produce the distribution files:

`npm run build`

This will run the Jest tests and produce a coverage report.
* To view coverage report run `npm run view-coverage-report`

If all tests and lint rules pass, then the distribution files will be built.

This will compile the ts and tsx files and produce a 'dist' folder. The dist folder should contain the following after a successful build:
* index.html
* index_bundle.js
* index_bundle.js.map
