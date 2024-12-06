export default [
    {
        "rules": {
            "@typescript-eslint/ban-types": [
                "error",
                {
                    "extendDefaults": true,
                    "types": {
                        "{}": false
                    }
                }
            ]
        }
    }
];