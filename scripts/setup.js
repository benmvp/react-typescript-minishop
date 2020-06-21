const { spawnSync } = require('child_process')

const COLOR_STYLES = {
  blue: { open: '\u001b[34m', close: '\u001b[39m' },
  dim: { open: '\u001b[2m', close: '\u001b[22m' },
  red: { open: '\u001b[31m', close: '\u001b[39m' },
  green: { open: '\u001b[32m', close: '\u001b[39m' },
}

const color = (modifier, message) => {
  return COLOR_STYLES[modifier].open + message + COLOR_STYLES[modifier].close
}
const blue = (message) => color('blue', message)
const dim = (message) => color('dim', message)
const red = (message) => color('red', message)
const green = (message) => color('green', message)

const logRunStart = (title, subtitle) => {
  console.log(blue(`▶️ Starting: ${title}`))
  console.log(`  ${subtitle}`)
}

const logRunSuccess = (title) => {
  console.log(green(`✅ Success: ${title}\n\n`))
}

const run = (title, subtitle, command) => {
  logRunStart(title, subtitle)
  console.log(dim(`  Running the following command: ${command}`))

  const result = spawnSync(command, { stdio: 'inherit', shell: true })

  if (result.status !== 0) {
    console.error(
      red(
        `🚨  Failure: ${title}. Please review the messages above for information on how to troubleshoot and resolve this issue.`,
      ),
    )
    process.exit(result.status)
  }

  logRunSuccess(title)
}

const main = async () => {
  run(
    'System Validation',
    'Ensuring the correct versions of tools are installed on this computer.',
    'npx check-engine',
  )

  run(
    'Dependency Installation',
    'Installing third party code dependencies so the workshop works properly on this computer.',
    'npm install',
  )
}

main()
