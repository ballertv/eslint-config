# eslint-config
The "eslint-config" repository serves as a centralized location for maintaining and sharing a consistent ESLint configuration across multiple repositories. It contains an ESLint configuration file named .eslintrc.js that defines the desired code style, rules, and settings for the associated projects.

# Ruby Mine Setup
![image](https://github.com/ballertv/eslint-config/assets/57688840/31395fdd-3b7d-473d-9d62-3c002777a0a4)


1. **Install ESLint globally:** Run the following command to install ESLint globally: npm install -g eslint.
2. **Open the project settings:** In the top menu, go to "RubyMine" > "Preferences" (macOS) or "File" > "Settings" (Windows/Linux).
   3.** Navigate to the ESLint settings:** In the left sidebar of the Preferences/Settings window, click on "Languages & Frameworks" > "JavaScript" > "Code Quality Tools" > "ESLint".
3. **Enable ESLint on save:** Check Automatic ESLint configuration and Run eslint --fix on save
4. **Save the settings:** Click "Apply" or "OK" to save the ESLint settings.
5. **Verify the ESLint integration:** Open a JavaScript file in your project that should be linted by ESLint.

# Repositories Using This Config
- [x] [ballertv/baller](https://github.com/ballertv/baller)
- [x] [ballertv/BallerApps](https://github.com/ballertv/BallerApps)
- [ ] [ballertv/btv-mobile](https://github.com/ballertv/btv-mobile)

# How to Configure New Repo
1. Remove the existing .eslintrc.js or .eslintrc.json file if it exists.

2. Add the "eslint-config" repository as a submodule to your repository.
```
git submodule add https://github.com/ballertv/eslint-config.git .eslint-config
```
3. Create a symbolic link (symlink) to the shared ESLint configuration file.
```
ln -s .eslint-config/.eslintrc.js .eslintrc.js
```

# Making Updates? 
Whenever updates or improvements to the ESLint configuration are required, they can be made in this "eslint-config" repository, and the changes can be pulled into the individual repositories that depend on it, ensuring all projects benefit from the latest code style guidelines.

```
git submodule update --remote
```
This will fetch and apply the latest changes from the "eslint-config" repository. Please note that you will want to notify other teams / repository owners to pull the latest into their repos as well.

