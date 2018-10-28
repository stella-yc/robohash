module.exports = {
  extends: ["airbnb", "prettier"],
  env: {
    browser: true,
    node: true,
    jest: true
  },
  rules: {
    "import/prefer-default-export": "off",
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }]
  }
};
