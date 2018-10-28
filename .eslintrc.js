module.exports = {
  extends: ["airbnb", "prettier"],
  env: {
    browser: true,
    node: true
  },
  rules: {
    "import/prefer-default-export": "off"
  }
};
