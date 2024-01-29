## STEPS TO ADD A WEB HOOK FOR A REPOSITORY

1. CREATE A NEW SSH KEY WITH 

```
ssh-keygen -t rsa -f ~/.ssh/id_rsa.REPONAME
```

2. Add the id_rsa.REPONAME.pub file as a deploy key to the Github repo

3. Edit the ~/.ssh/config file to add

```
Host tableau-rarefaction.github.com
  HostName github.com
  User git
  IdentityFile /home/shiny/.ssh/id_rsa.rarefaction
```

4. Git clone the repository with

```
git clone git@REPONAME.github.com:ReseauBiodiversiteQuebec/REPONAME.git
```

5. Edit the hook.js file of the shiny_hooks_node app (~/shiny_hooks_node) to add the repo.

6. Edit the .sh file (tableau_rarefaction_webhook.sh) with the proper commands.

7. Restart shiny hook with

```sudo pm2 restart shiny hook```

8. Add the webhook to the GitHub repo (settings -> Webhooks) using https://coleo.biodiversite-quebec.ca/shiny-hook/
