# Form flow version monitor

This repository aims to create a single place to see which version of [form flow library] is being used by other [teams at Code for America].

[form flow library]: https://github.com/codeforamerica/form-flow
[teams at Code for America]: https://github.com/codeforamerica/

## Development setup

1. Download this repo locally
2. `npm install`
3. `npm run dev` to start the server locally

### Dependencies

* [Vite.js] is used for localy development and frontend tooling.
* [Octokit] is used to interact with the GitHub Rest API within JavaScript.

[Vite.js]: https://vitejs.dev/
[Octokit]: https://github.com/octokit/octokit.js

## Production

We are following [Vites suggestion] of using a [GitHub Action to deploy] to GitHub pages on commits to `main`.

[Vites suggestion]: https://vitejs.dev/guide/static-deploy.html#github-pages
[GitHub Action to deploy]: .github/workflows/deploy-to-pages.yml

### Under the hood commands

Package files to be used for production:

```
npm run build
```

Preview built files with a static site server:

```
npm run preview
```
