module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        // "airbnb",
        'eslint:recommended',
        "plugin:@typescript-eslint/recommended",
        'plugin:@typescript-eslint/stylistic',
        'plugin:@typescript-eslint/recommended-type-checked',
        "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
    ],
    overrides: [
        {
            files: ["*.ts", "*.tsx"],
            parser: "@typescript-eslint/parser",
            parserOptions: {
                ecmaVersion: 2021,
                sourceType: "module",
                tsconfigRootDir: __dirname, // Typescript config file location
            },
            extends: [
                // "airbnb",
                "plugin:@typescript-eslint/recommended",
                "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
            ],
            // plugins: ["prettier"],
        },
        {
            env: {
                node: true,
            },
            files: [".eslintrc.{js,cjs}"],
            parserOptions: {
                sourceType: "script",
            },
        },
    ],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    settings: {
        react: {
            version: "detect", // Set the appropriate React version here
        },
    },
    //  Can override any rules we disagree with here
    // https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb/rules
    rules: {
        // example of overriding a rule
        "react/jsx-filename-extension": [
            "error",
            { extensions: [".jsx", ".js", ".ts", ".tsx"] },
        ],
        "react/prop-types": "off",
        "react/require-default-props": "off",

        // https://eslint.style/packages/default
        '@stylistic/array-bracket-newline': ["error", "always"],
        '@stylistic/array-bracket-spacing': ["error", "always"],
        '@stylistic/brace-style': ['error', "1tbs", { "allowSingleLine": true }],
        '@stylistic/dot-location': ["error", "property"],
        '@stylistic/function-paren-newline': ["error", { "minItems": 2 }],
        '@stylistic/indent': ['error', "tab"],
        "@stylistic/indent-binary-ops": ["error", "tab"],
        "@stylistic/jsx/jsx-closing-bracket-location": ["error", 1, 'line-aligned'],
        "@stylistic/jsx/jsx-first-prop-new-line": ["error", "multiline-multiprop"],
        "@stylistic/multiline-ternary": ["error", "always-multiline"],
        "@stylistic/object-curly-newline": ["error", { "minProperties": 2 }],
        "@stylistic/object-property-newline": ["error"],
        "@stylistic/operator-linebreak": ["error", "before"],
        "@stylistic/padded-blocks": ["error", "never"],
        "@stylistic/quote-props": ["error", "consistent-as-needed"],
    },
};
