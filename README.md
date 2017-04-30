Weekend Challenge 03
====================

Assignment Details
------------------

Base Mode
---------

This weekend is all about showing us that you have a handle on each of the different parts of the full stack. For this weekends challenge, you are going to create a 'TO DO' application. This is the type of application that is very common to tackle when learning a new language, which makes it extremely valuable to work through for the first time, since chances are good that at some point in your career you will tackle this type of application, but in another language.

Here are the specific components for the challenge:

- Create a front end experience that allows a user to create a task.
- When the task is created, it should be stored inside of a database (SQL)
- Whenever a task is created the front end should refresh to show all tasks that need to be completed.
- Each task should have an option to 'Complete' or 'Delete'.
- When a task is complete, its visual representation should change on the front end (for example, the background of the task        container could change from gray to green, as well as the complete option 'checked off'. Each of these are accomplished in CSS, but will need to hook into logic to know whether or not the task is complete)
- Whether or not a task is complete should also be stored in the database.
- Deleting a task should remove it both from the Front End as well as the Database.

Make sure that you also show us your best styling chops.

We would recommend you spend some time thinking about how to approach this problem. Think through all the logic that will be needed prior to writing any code. Take your time, relax, remember that impostor syndrome is real, and that you are capable of knocking this out of the park!

Additionally, please include some way to recreate your initial database schema. This can be a .sql file with CREATE TABLE statements or you can create your schema automatically when your app loads.

Hard Mode
---------

In whatever fashion you would like, create an 'are you sure: yes / no' option when deleting a task. Once again, you can interrupt this however you would like.

Pro Mode
--------
Adjust the logic so that completed tasks are brought to the bottom of the page, where the remaining tasks left to complete are brought to the top of the list.

***TODO's***

**Set up Node + Express to use Body-Parser**

- [x] npm init
- [x] npm install express --save
- [x] npm install body-parser --save
- [] add npm start by adding node server.js to package.json

**Client Side Setup**

- [x] create public folder
- [x] create vendors folder in public
- [x] create views folder in public
- [x] create index.html and styles.css in views folder
- [x] place jquery js file in vendors
- [x] create scripts folder in public
- [x] create client.js in scripts
- [x] src jquery, then client.js in index.html
- [x] link styles.css in index.html
- [x] add .gitignore file
- [x] gitignore .DS_Store and node_modules

**Server Side Setup**

- [x] create'server.js'
- [x] require the following:
    express
    path
    body-parser
- [x] set app to be an express app: var app = express() ;
- [x] set up uses:
- [x] bodyParser.urlencoded
- [x] express.static for public folder
- [x] add spin up server code (app.listen)
- [x] test server up
- [x] add serve the html file code(base url)
- [x] restart server
- [x] open page in browser

**Database Setup**
- [x] create new database ('weekend-challenge-03')
- [x] create a table within db ('todo')
- [x] id
- [x] name
- [x] task
- [x] date to be done
- [x] completed/or not
- [x] npm install pg --save
- [x] in server.js add require for pg
- [x] add pool.config object
- [x] create new pool with config
