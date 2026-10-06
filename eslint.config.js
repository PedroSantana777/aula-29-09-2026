module.exports = [
    {
        file: ["src/**/*.js"],
        languageOptions: {
            acmaVersion: "latetest",
            sourceType: "module"
        },
        rules: {
            semi: ["error", "always"],
            "no-unused-vars": "error"
        }
    }
];