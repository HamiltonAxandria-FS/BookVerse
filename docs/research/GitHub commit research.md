**Github Commit Research**

Commiting to Github from VS code:
Make sure you're on the right branch: git branch
Change branches: git checkout -b (name of branch)
Then follow  these commands to push updates to that branch:
- git add .
- git commit -m "message here"
- git push origin (name of branch)

**Troubleshooting**

Remote origin already exists:
- rename the existing origin
- run the rename command with the remote
more info here -> {https://komodor.com/learn/git-errors/}

failed to push some refs to:
- --rebase flag can fix this issue. --rebase moves commit files to the newest pull code.
- git code: git pull --rebase origin (branch)

fatal: not a git repository:
  - Make sure you are in the right folder
  - When in the right place use git init 






**Work Cited**
{https://graphite.dev/guides/how-to-push-code-from-vscode-to-github}
{https://komodor.com/learn/git-errors/}
