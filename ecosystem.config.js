module.exports = {
  apps: [{
    name: "wifi-gui",
    script: "npm",
    args: "dev",
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    }
  }]
}
