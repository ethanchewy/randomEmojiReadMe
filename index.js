const core = require('@actions/core');
const github = require('@actions/github');


// most @actions toolkit packages have async methods
async function run() {
  try {
    const emojii_list_string = core.getInput('list_of_emojiis');
    const gh_repo = core.getInput('gh_base_url');
    const octokit = getOctokit(token);

    // Select random emojii from list
    const chosen_emojii = emojii_list[Math.floor(Math.random() * emojii_list_string.length)]

    // Construct base_url for emojii
    let base_url =  "https://github.com/" + gh_repo + "/issues/new?title=emojii%7C" + chosen_emojii + "&body=Just+click+%27Submit+new+issue%27.+That+is+it."

    core.setOutput('random_url', base_url);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
