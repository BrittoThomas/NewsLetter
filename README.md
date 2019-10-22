# NewsLetter-SignUp


## Configuration in Project for Heroku Publish

1. Create New File - Procfile
2. Add server initial running code in the Procfile
      
       web: node app.js

3. Change Port to 

       process.env.PORT

Example

    app.listen(process.env.PORT || 3000, function() {
      console.log("Server is ready");
    });

## Heroku Publish

Download and Install Heroku Command Line Tool
https://devcenter.heroku.com/articles/heroku-cli#download-and-install

Open Terminal
Check node, npm, git versions are upto date.

    $ node --version
    $ npm --version
    $ git --version
   
Check heroku properly installed
   
    $ heroku --version
    
Login to heroku command line 

    $ heroku login

Intialise and Add files to git local in the project 

    $ cd /PROJECT_FOLDER
    $ git init
    $ git add .
    $ git commit -m "COMMIT_MESSAGE"
  
Create Heroku App
If every thing works fine you get the link to your app.

    $ heroku create

    
Push Project to Heroku Server

    $ git push heroku master
    
    
