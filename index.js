const core = require('@actions/core');
const github = require('@actions/github');
const wait = require('./wait');


// most @actions toolkit packages have async methods
async function run() {
  try {
    const emojii_list_string = core.getInput('list_of_emojiis');
    const octokit = getOctokit(token);

    // Select random emojii from list
    const chosen_emojii = emojii_list[Math.floor(Math.random() * emojii_list_string.length)]

    // Construct URL
    // let base_url = octokit.

    core.setOutput('random_url', new Date().toTimeString());
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
