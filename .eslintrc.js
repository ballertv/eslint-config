module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: 'airbnb',
    overrides: [
        {
            env: {
                node: true,
            },
            files: [
                '.eslintrc.{js,cjs}',
            ],
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    //  Can override any rules we disagree with here
    // https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb/rules
    rules: {
        // example of overriding a rule
        // 'no-console': ['error', { allow: ['warn', 'error'] }],
        "react/prop-types": "off",
        "camelcase": "off",
        "no-mixed-spaces-and-tabs": ["error", { "fixable": "whitespace" }],
        "no-tabs": ["error", { "fixable": "whitespace" }],
    },
};
