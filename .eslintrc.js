module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['airbnb', 'plugin:@typescript-eslint/recommended'],
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                ecmaVersion: 2021,
                sourceType: 'module',
                project: './tsconfig.js', // Config file for TypeScript
            },
            extends: [
                'airbnb',
                'plugin:@typescript-eslint/recommended',
                'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
            ],
        },
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
    settings: {
        react: {
            version: 'detect', // Set the appropriate React version here
        },
    },
    //  Can override any rules we disagree with here
    // https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb/rules
    rules: {
        // example of overriding a rule
        // 'no-console': ['error', { allow: ['warn', 'error'] }],
        "react/prop-types": "off",
        "camelcase": "off",
    },
};
