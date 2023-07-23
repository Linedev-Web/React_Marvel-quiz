module.exports = {
  extends: ["react-app", "react-app/jest"],
  ignorePatterns: ["build/"],
  rules: {
    "no-duplicate-imports": "error",
    "prefer-arrow-callback": "warn",
    "dot-notation": "warn",
    "no-var": "error",
    "no-unused-vars": "warn",
    "react/no-typos": "error",
    "react/jsx-no-duplicate-props": "error",
    "no-console": "warn",
    "camelcase": "error",
    "react/self-closing-comp": "warn",
    "prefer-template": "warn",
    "react/prop-types": "warn",
    "object-shorthand": "warn",
    "no-useless-concat": "warn",
    "no-redeclare": "error",
    "no-shadow": "warn",
    "arrow-body-style": "warn",
    "react/jsx-curly-brace-presence": ["warn", "never"],
    "import/no-anonymous-default-export": "off",
    "no-multiple-empty-lines": ["warn", { max: 2, maxBOF: 0, maxEOF: 1 }],
    "import/order": [
      "warn",
      {
        "newlines-between": "always",
        "groups": [
          "type",
          "builtin",
          "internal",
          "external",
          "parent",
          "sibling",
          "index",
          "object"
        ],
        "pathGroups": [
          { pattern: "prop-types", group: "type" },
          { pattern: "config/types", group: "type" }
        ],
        "warnOnUnassignedImports": true,
        "pathGroupsExcludedImportTypes": ["prop-types"]
      }
    ]
  },
  "settings": {
    "import/resolver": {
      "alias": {
        "extensions": [".js", ".jsx"],
        "map": [
          ["@", "."]
        ]
      }
    }
  }
};
