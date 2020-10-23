[Tuto ESLint](https://dev.to/onygami/eslint-and-prettier-for-react-apps-bonus-next-js-and-typescript-3e46) 

## Getting Started

First, deploy TypeScript React App:

```bash
npx create-next-app .
```

Install eslint & prettier packages

```bash
npm i -D eslint prettier eslint-plugin-prettier eslint-config-prettier eslint-plugin-simple-import-sort eslint-plugin-react-hooks eslint-plugin-react eslint-plugin-jsx-a11y  typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser @types/react @types/node
```

Making the config files

```bash
touch .eslintrc.js .prettierrc
```

We need for telling eslint and prettier not to target certain files and folder

```bash
touch .eslintignore .prettierignore
```

Create an empty tsconfig.json

```bash
touch tsconfig.json
```

Add the following to both files

```bash
node_modules
.next
```

Add eslint config
```bash
module.exports = {
  root: true, // Make sure eslint picks up the config at the root of the directory
  parser: '@typescript-eslint/parser',
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
    'plugin:@typescript-eslint/eslint-recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended' // Make this the last element so prettier config overrides other formatting rules
  ],
  rules: {
    'prettier/prettier': ['error', {}, { usePrettierrc: true }], // Use our .prettierrc file as source
    'react/react-in-jsx-scope': 'off',
    'simple-import-sort/sort': 'error',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton']
      }
    ],
    'react/prop-types': ['error']
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

For populate .tsconfig.json and create next.config file for TS, you need to start server
```bash
npm run dev
```

Then run linter if autosave option is disabled
```bash
npm run lint
```