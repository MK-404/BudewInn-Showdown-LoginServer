module.exports = {
  apps: [{
    name: "loginserver",
    script: "./.dist/src/index.js",
    exec_mode: "cluster",
  }],
};
