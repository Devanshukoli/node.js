# NPM (Node Package Manager)

- `npm` manages downloads of dependencies of your project.

- if you want to install any packages `npm install <package-name>` // This is for specific packages.
    - if you want to install everything then run `npm install` 
        - This will install everything that a project needs. Also, create `node_modules` file that stores all the packages that a project needs.
    - There are also some short-hand *flags* to say...
        - `--save-dev` or `-S`:  adds it to devDependencies.
        - `--no-save`: It installs that dependencies but does not entry to `package.json` file.
    -`NOTE`: The only difference between *devDependencies* and *dependencies* is that formar contains development tools, like a testing library, while the latter bundled with app in production.

- if you want to *update* any packages `npm update <package-name>` 
    - if you want to update every dependencies then use only `npm update`.

- if you want to manage **versoning**, that can also be done by `npm install <package-name>@<version>`.

- if you want to run some task by using `npm run <task-name>`.
