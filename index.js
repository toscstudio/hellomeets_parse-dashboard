var shell = require('shelljs');

if (shell.exec('node_modules/parse-dashboard/bin/parse-dashboard --config config.json').code !== 0) {
  echo('Error: Dashboard deploy failed');
  exit(1);
}
