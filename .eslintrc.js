module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": 0,
        "linebreak-style": 0,
        "quotes": [
            "off",
            "double"
        ],
        "semi": [
            "off",
            "always"
        ],
        "no-unused-vars": [
            "warn"
        ]
    }
};