module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        "airbnb",
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
                "airbnb",
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
    // plugins: ["prettier"],
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
        camelcase: "off",

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
        // To be continued... current progress, `no-confusing-arrow`
        // https://eslint.style/packages/default



        // "prettier/prettier": [
        //     "error",
        //     {
        //         trailingComma: "all",
        //         tabWidth: 4,
        //         semi: true,
        //         printWidth: 80,
        //         arrowParens: "avoid",
        //         bracketSpacing: true,
        //         endOfLine: "auto",
        //         htmlWhitespaceSensitivity: "css",
        //         proseWrap: "preserve",
        //         quoteProps: "as-needed",
        //     },
        // ],
    },
};
