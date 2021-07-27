const process = require('process');
const cp = require('child_process');
const path = require('path');

// shows how the runner will run a javascript action with env / stdout protocol
test('test runs', () => {
  process.env['INPUT_LIST_OF_EMOJIIS'] = '🍎🌶🍜🏀🏆😀😱😤';
  process.env['INPUT_GH_BASE_URL'] = 'ethanchewy/ethanchewy';
  const ip = path.join(__dirname, 'index.js');

  console.log(cp.execSync(`node ${ip}`, {env: process.env}).toString());
})
