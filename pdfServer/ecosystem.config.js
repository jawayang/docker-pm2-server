module.exports = {
    apps: [
        {
            name: "PDFServer",
            script: "./app/index.js",
            watch: false,
            env: {
                "NODE_ENV": "development"
            },
            env_production: {
                "NODE_ENV": "production"
            }
        }
    ]
}
