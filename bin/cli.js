#!/usr/bin/env node

const { execSync } = require('child_process')

const runCmd = cmd => {
  try {
    execSync(`${cmd}`, { stdio: 'inherit' })
  } catch (ex) {
    console.error(`Failed to execute ${cmd}`, ex)
    return false
  }
  return true
}

const repoName = process.argv[2]
const gitCheckoutCommand = `git clone --depth 1 https://github.com/hystolytc/create-app-react ${repoName}`
const installDepsCommand = `cd ${repoName} && npm install`
const changeDirectoryCommand = `cd ${repoName}`

console.log(`Scaffold the repository with name ${repoName}`)
const checkedOut = runCmd(gitCheckoutCommand)
if (checkedOut) process.exit(-1)

console.log(`Installing dependency for ${repoName}`)
const installedDeps = runCmd(installDepsCommand)
if (!installedDeps) process.env(-1)

console.log(`Change directory to ${repoName}`)
const changedDirectory = runCmd(changeDirectoryCommand)
if (!changedDirectory) process.exit(-1)

console.log('Yeay all setup is success, let\'s try it with typing this command npm dev')
