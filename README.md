[Tuto ESLint](https://dev.to/onygami/eslint-and-prettier-for-react-apps-bonus-next-js-and-typescript-3e46) 

## Getting Started

First, deploy Next React App:

```bash
npx create-next-app .
```

Install eslint & prettier packages

```bash
npm i -D eslint prettier eslint-plugin-prettier eslint-config-prettier eslint-plugin-simple-import-sort eslint-plugin-react-hooks eslint-plugin-react eslint-plugin-jsx-a11y
```

Making the config files

```bash
touch .eslintrc.js .prettierrc
```

We need for telling eslint and prettier not to target certain files and folder

```bash
touch .eslintignore .prettierignore
```

Add the following to both files

```bash
node_modules
```

Add eslint config
```bash
module.exports = {
  root: true, // Make sure eslint picks up the config at the root of the directory
  plugins: ['simple-import-sort'], // Order of your import statements
  parserOptions: {
    ecmaVersion: 2020, // Use the latest ecmascript standard
    sourceType: 'module', // Allows using import/export statements
    ecmaFeatures: {
      jsx: true // Enable JSX since we're using React
    }
  },
  settings: {
    react: {
      version: 'detect' // Automatically detect the react version
    }
  },
  env: {
    browser: true, // Enables browser globals like window and document
    amd: true, // Enables require() and define() as global variables as per the amd spec.
    node: true // Enables Node.js global variables and Node.js scoping.
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended' // Make this the last element so prettier config overrides other formatting rules
  ],
  rules: {
    'prettier/prettier': ['error', {}, { usePrettierrc: true }], // Use our .prettierrc file as source
    'react/react-in-jsx-scope': 'off',
    'simple-import-sort/sort': 'error',
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton']
      }
    ],
    'react/prop-types': ['off']
  }
};

```

Add prettier config

```bash
{
  "semi": true,
  "tabWidth": 2,
  "printWidth": 100,
  "singleQuote": true,
  "trailingComma": "none",
  "jsxBracketSameLine": true
}

```

Add scripts to package.json
```bash
  "scripts": {
    "lint": "eslint --fix .",
    "format": "prettier --write './**/*.{js,jsx,ts,tsx,css,md,json}' --config ./.prettierrc"
  },
```

Run linter if autosave option is disabled
```bash
npm run lint
```