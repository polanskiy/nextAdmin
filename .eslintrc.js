module.exports = {
    "extends": "airbnb",
    "parser": "babel-eslint",
    "rules": {
        "react/jsx-filename-extension": 0,
        "react/prop-types": 0,
        "jsx-a11y/anchor-is-valid": 0,
        "no-console": 0,
        "no-underscore-dangle": 0,
        "max-len": 0,
        "jsx-a11y/no-static-element-interactions": 0,
        "jsx-a11y/no-autofocus": 0,
        "no-nested-ternary": 0,
        "jsx-a11y/label-has-for": 0,
        "jsx-a11y/label-has-associated-control":0,
        "jsx-a11y/click-events-have-key-events": 0,
        "react/jsx-props-no-spreading": 0
    },
    "globals": {
        "window": true,
        "Image": true,
        "browser": true,
        "node": true,
        "FormData": true,
        "document": true,
        "navigator": true
    },
    "parserOptions": {
        "allowImportExportEverywhere": true
      }
};