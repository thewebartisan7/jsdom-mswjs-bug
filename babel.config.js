module.exports = {
  "plugins": ["@babel/plugin-syntax-jsx"],
  presets: [
    ["@babel/preset-env", { "targets": { "esmodules": true } }],
    ["@babel/preset-react"],
    ["@babel/preset-typescript"]
  ],
}
