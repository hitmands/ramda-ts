module.exports = {
  scripts: {
    postchangelog: 'yarn prettier CHANGELOG.md -w',
    precommit: 'NODE_ENV=production yarn transpile',
  },
};
