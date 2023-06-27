# eslint-config
The "eslint-config" repository serves as a centralized location for maintaining and sharing a consistent ESLint configuration across multiple repositories. It contains an ESLint configuration file (typically named .eslintrc.js or .eslintrc.json) that defines the desired code style, rules, and settings for the associated projects.

By having a dedicated "eslint-config" repository, you can ensure that all repositories that use ESLint adhere to the same code style guidelines, making it easier to maintain consistency and readability across the codebase.

The purpose of the "eslint-config" repository is to provide a single source of truth for the ESLint configuration, allowing easy updates and synchronization of the code style across all associated repositories. It enables developers to share and collaborate on the same ESLint rules, reducing the time spent on manual configuration and ensuring a unified code quality standard.

Whenever updates or improvements to the ESLint configuration are required, they can be made in the "eslint-config" repository, and the changes can be pulled into the individual repositories that depend on it, ensuring all projects benefit from the latest code style guidelines.

Overall, the "eslint-config" repository promotes efficient code maintenance, collaboration, and consistent code style enforcement across multiple repositories using ESLint.


# How to Configure
Add the "eslint-config" repository as a submodule to your repository.
```
git submodule add [<eslint-config-repo-url>](https://github.com/ballertv/eslint-config.git)https://github.com/ballertv/eslint-config.git .eslint-config
```
Create a symbolic link (symlink) to the shared ESLint configuration file.
```
ln -s .eslint-config/.eslintrc.js .eslintrc.js
```

# Making Updates? 
Whenever you update the shared config in the "eslint-config" repository, you can pull the latest changes in your individual repositories by running the following commands
```
git submodule update --remote
```
This will fetch and apply the latest changes from the "eslint-config" repository.

