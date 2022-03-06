// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ##Title
  ${data.title}

  ##Description
  ${data.description}

  ##Table of Contents
  * [Install](#install)
  * [Usage](#usage)
  * [License](#license)
  * [contribute](#contribute)
  * [Test](#test)


  ##Instal
  ${data.install}

  #Useage
  ${data.usage}

  ##License
  ${data.license}

  ##Contribute
  ${data.contribute}
  
  ##Test
  ${data.test}
`;
}

module.exports = generateMarkdown;
