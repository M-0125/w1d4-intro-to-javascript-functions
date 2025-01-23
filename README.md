# WAD102 - Week 1 Day 4 - Exercise

Please follow the instructions in this `README.md` file carefully.

Each exercise can be found in the `assignment` folder.

The instructions for each exercise can be found in their respective file.

Attempt each exercise and commit your changes.

You are free to write the commit message as you see fit. But remember to follow the best practices for commit messages.

When you are done, push the commits to the remote repository.

If you need help, please ask the instructor for help.

---

## From remote repository to local repository

1. Open your terminal (Git Bash, PowerShell, etc.)
2. Navigate to your workspace (e.g. `cd ~/workspace`)
3. Run `cd <Repository Name>`
4. Run `code .` to open the workspace in VS Code

---

## Testing Your Code

To test the output of your JavaScript files, run the following command in your terminal:

```sh
node assignment/<file name>
```

Replace `<file name>` with the name of the JavaScript file you want to test. For example:

```sh
node assignment/exercise1.js
```

---

## Add, Commit, Push

1. Open your terminal in VS Code (Terminal -> New Terminal | Ctrl + J)
2. Run `git status` to check the changes
3. Run `git add .` to add all changes to the staging area (or you can specify the file name to add specific changes)
4. Run `git commit -m "<Your Commit Message>"` to commit the changes
5. Run `git push` to push your changes to the remote repository

---

### Optional

If you want to test the output of your JavaScript files in watch mode, you can use the following command:

```sh
node --watch assignment/<file name>
```

Replace `<file name>` with the name of the JavaScript file you want to test. For example:

```sh
node --watch assignment/exercise1.js
```

To exit the watch mode, press `Ctrl + C`.
