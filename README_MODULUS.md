[modulus-home]: https://modulus.io/ "SaaP meteor hosting"

# Meteor Projects on Modulus

# <a name="toc"></a>TOC

* [TOC](#toc)
* [Introduction](#introduction)
* [Delete a Project](#delete-a-project)

---

# <a name="introduction"></a>Introduction

Help with using [modulus][modulus-home]. Everything will be done from the command line (a lot of this can also be done from the website).

# Primary Tools

[modulus-home]: https://modulus.io/ "SaaP meteor hosting"

# Resources

* [Modulus Getting Started Guide](http://help.modulus.io/customer/portal/articles/1640060-getting-started-guide)
* [Modulus Mongo Getting Started](http://help.modulus.io/customer/portal/articles/1649367-using-modulus-mongo)
* [Deploying a Meteor App to Modulus](http://rywalker.com/deploying-a-meteor-app-to-modulus/)
* [CLI Quck Refenrece](http://help.modulus.io/customer/portal/articles/1706234-cli-quick-reference)

# Setup

## Setup CLI and User

Install Modulus's CLI

    $ npm install -g modulus

Create a user with your github account:

    $ modulus login --github

Then:

    [?] Enter your GitHub username or email:
    [?] Enter your password:


# Example Using Clock

Create a new meteor project:

    $ meteor create --example clock
    $ cd clock

Create a new modulus project:

    $ modulus project create stellarj-clock -s 396

Deploy to modulus

    $ modulus deploy -p stellarj-clock

Note url of your project. Example:

    stellarjclock-40043.onmodulus.net

Set root of your project

    $ modulus env set ROOT_URL http://stellarjclock-40043.onmodulus.net -p stellarj-clock

Verify root was set

    $ modulus env list -p stellarj-clock

Clear any logs:

    $ modulus project logs clear -p stellarj-clock

Restart the project

    $ modulus project restart -p stellarj-clock

Verify everything is going ok

    $ modulus project logs -p stellarj-clock

## Create Mongodb (Optional)

Modulus

$ modulus mongo create

TODO:

modulus env set MONGO_URL "mongodb://<user>:<pass>@mongo.onmodulus.net:27017/<database_name>"

# <a name="delete-a-project"></a>Delete a Project/Database

You will need to go to the admin page to delete a project/database:

Browse to:

    https://modulus.io/user/dashboard

* Click on a project.
* Click on 'ADMINISTRATION' (menu to the left).
* Click on DELETE (scroll down to bottom of page).
* Type confirmation

#### Setup MongoDB

    $ modulus mongo create
    [?] Enter a database name:
    Please choose a region:

    $ modulus mongo user create

    Please choose which database to use:
    1) ...
    [?] database NUMBER
    Selected MongoDB database xxxxx.

    [?] Enter username: stellarj-boiler
    [?] Enter password:
    [?] Read only permissions? (yes) no
    [✓] New MongoDB database user stellarj-boiler created.
    Database available at: IMPORTANT!!! YOU NEED THIS LINK

Setup a mongo link:

* User name created above and password
* mongo link generated above

Final link:
    mongodb://stellarj-boiler:Wazook106er@novus.modulusmongo.net:27017/zi4sybOw

    $ modulus project create
    [?] Enter a project name:
    [?] Enter a servo size in MB [396, 512, or 1024]


#### Deploy

    $ modulus deploy
    $ modulus deploy -p PROJNAME

A link will be provided to navigate to.

#### Logs

Seeing "Unable to connect to any application instances."?

    $ modulus project logs

modulus env set  http://stellarjclock-40040.onmodulus.net/

### To Meteor

    $ meteor deploy PROJNAME.meteor.com


## To Consider

### Coffeescript

    $ meteor add coffeescript
