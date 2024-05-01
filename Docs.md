# Documentation for development Image

## Prerequisites

This project is tested in:

- NodeJs v18.18.2
- npm v10.2.1

## Getting Started

1. Clone the repository into your local machine

    ```bash
    git clone https://www.github.com/AlstonChan/Image
    ```

2. Install dependencies

    ```bash
    npm i
    ```

3. Start developing the project with

    - Compile TS to JS on save

        ```bash
        npm run dev
        ```

    - Develop with storybook, inspect component changes and compile TS to JS on save

        ```bash
        npm run storybook
        ```

## Deployment

To deploy the project, simply git commit and push to the remote repository in GitHub. `git commit -m "commit message"` will trigger a git pre-commit hook and update the package.json version before committing, so no manual package version updating is require.

The package will be published through GitHub action once pushed to the GitHub remote repository, publishing the package to npm.
