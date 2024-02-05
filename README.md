# eslint-config
The "eslint-config" repository serves as a centralized location for maintaining and sharing a consistent ESLint configuration across multiple repositories. It contains an ESLint configuration file named .eslintrc.js that defines the desired code style, rules, and settings for the associated projects.

# VSCode Setup
Todo

# Ruby Mine Setup
![image](https://github.com/ballertv/eslint-config/assets/57688840/31395fdd-3b7d-473d-9d62-3c002777a0a4)


1. **Install ESLint globally:** Run the following command to install ESLint globally: npm install -g eslint.
2. **Open the project settings:** In the top menu, go to "RubyMine" > "Preferences".
3. **Navigate to the ESLint settings:** In the left sidebar of the Preferences/Settings window, click on "Languages & Frameworks" > "JavaScript" > "Code Quality Tools" > "ESLint".
4. **Enable ESLint on save:** Check Automatic ESLint configuration and Run eslint --fix on save
5. **Save the settings:** Click "Apply" or "OK" to save the ESLint settings.
6. **Verify the ESLint integration:** Open a JavaScript file in your project that should be linted by ESLint.

# Repositories Using This Config
Below is a list of repositories that have been setup using this submodule. If your repo is checked off there isn't anything for you to do aside from setting up your IDE to support eslint.
- [x] [ballertv/baller](https://github.com/ballertv/baller)
- [x] [ballertv/BallerApps](https://github.com/ballertv/BallerApps)
- [ ] [ballertv/btv-mobile](https://github.com/ballertv/btv-mobile)

# How to Configure New Repo
1. Remove the existing .eslintrc.js or .eslintrc.json file if it exists.

2. Add the "eslint-config" repository as a submodule to your repository.
```
git submodule add https://github.com/ballertv/eslint-config.git .eslint-config
```

# Making Updates? 
Whenever updates or improvements to the ESLint configuration are required, they can be made in this "eslint-config" repository, and the changes can be pulled into the individual repositories that depend on it, ensuring all projects benefit from the latest code style guidelines.

```
git submodule update --remote
```
This will fetch and apply the latest changes from the "eslint-config" repository. Please note that you will want to notify other teams / repository owners to pull the latest into their repos as well.

# Why Not Prettier?
We prefer to use ESLint Stylistic instead. See the following link for more information: https://eslint.style/guide/why