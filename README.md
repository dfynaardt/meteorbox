[meteor-home-link]: https://www.meteor.com "Meteor home website."
[meteor-package-doc-link]: https://docs.meteor.com/#writingpackages "Writing Packages"
[atmosphere-installing-link]: https://atmospherejs.com/i/installing "Getting started with packages"
[atom-home-link]: https://atom.io/ "A text editor written in javascript"
[kimonolabs-home-link]: https://www.kimonolabs.com "Web Scraping software"
[webstorm-home-link]: https://www.jetbrains.com/webstorm/ "A full featured javascript editor."
[sublime-home-link]: http://www.sublimetext.com// "Industry standard, solid, editor."
[velocity-home-link]: https://github.com/meteor-velocity/velocity "Meteor's unified testing framework."
[mike-mocha-home-link]: https://github.com/mad-eye/meteor-mocha-web "Easily run mocha tests in meteor"

# Ultimate Meteor 1.0 iOS and Android Device Stack Cheat

# <a name="toc"></a>TOC

* [TOC](#toc)
* [Introduction](#introduction)
* [Deploying to Meteor](#deploying-to-meteor)

---

# <a name="introduction"></a>Introduction

This document will, hopefully, get you up and running creating [meteor][meteor-home-link] apps on iOS and Android.

We are trying for a full javascript stack (editor and all).

# Primary Packages

[less-home]: http://lesscss.org/ "CSS pre-processor"
[meteor-home]: https://www.meteor.com/ "Platform
for building web and mobile apps in JavaScript."
[meteor-bootstrap-home]: https://github.com/Nemo64/meteor-bootstrap "Bootstrap for meteor"
[modulus-home]: https://modulus.io/ "SaaP meteor hosting"
[mongodb-home]: http://www.mongodb.org/ "Document database"
[mongoose-home]: http://mongoosejs.com/ "Mongodb object modeling for node.js"

# Tools

* [Meteor][meteor-home-link] - Web and mobile apps.
* [Less][less-home] - CSS pre-processor.
* [Meteor Bootstrap][meteor-bootstrap-home] - Bootstrap for meteor.
* [Modulus][modulus-home] - SaaP meteor hosting.
* [Mongo][mongodb-home] - Document database.
* [Mongoose][mongoose-home] - Mongodb object modeling.

# Resources

* [Discover Meteor](https://book.discovermeteor.com/) - Great book to learn about meteor.

## Editors

* [atom][atom-home-link] - A pure javascript open source editor by Github.
* [webstorm][webstorm-home-link] - A full featured javascript editor.
* [sublime][sublime-home-link] - Industry standard, solid, editor.

### Setting up Sublime

#### Adding LESS

[Less-Sublime](https://github.com/danro/Less-sublime)

    $ cd ~/Library/Application\ Support/Sublime\ Text\ 2/Packages/
    $ git clone git://github.com/danro/LESS-sublime.git LESS


## Utlities

* [kimonolabs][kimonolabs-home-link] - Web scraping software.


# <a name="external-setup"></a>External Setup

## Enroll Into iOS Developer Program

Start now as it takes time to get approved. It will cost $99 USD.

To do iOS development, you will need to entroll in the [iOS Developer Program](https://developer.apple.com/programs/ios/).

# <a name="development-setup"></a>Development Environment Setup

## <a name="xcode-setup"></a>XCode Setup

You will need [XCode](https://itunes.apple.com/us/app/xcode/id497799835?ls=1&mt=12) on your Macintosh.


## <a name="android-setup"></a>Android Setup

If you are doing android development then:

    $ meteor install-sdk android

You will be asked to install HAXM.

## <a name="meteor-installation"></a>Meteor Installation

Go to [meteor][meteor-home-link] and follow "Get Started Now!"

    $ curl https://install.meteor.com/ | sh

## <a name="git-installation">Install Git

Install git on your machine.

## <a name="editor-installation">Install Your Editor (optional)

See editor setup readme.

# <a name="meteor-installation"></a>Creating a Meteor Project

We will:

* Create a project
* Add mobile platforms to the project
* Get it running on your device (for iOS requires iOS apple developers license)


# Create Project Example

Using stellarj-boilerplate as PROJNAME

## Create Project

    $ cd ~/Projects
    $ meteor create stellarj-boilerplate
    $ cd stellarj-boilerplate
    $ rm stellarj-boilerplate.*

## Secure the Project

    $ meteor remove autopublish
    $ meteor remove insecure

## Add Platform

    $ meteor add-platform ios

## Setup Project Directory

    mkdir client
    mkdir client/styles
    mkdir client/views
    mkdir lib
    mkdir lib/collections
    mkdir lib/router
    mkdir private
    mkdir public
    mkdir server
    mkdir tests

    touch client/main.html
    touch client/main.js
    touch lib/router/routes.js

## Setup Boilerplate-Less

    $ meteor add nemo64:bootstrap less
    $ touch ./client/styles/custom.bootstrap.json
    $ meteor // generates custom.bootstrap.json

Enable module navbar in file ./client/styles/custom.bootstrap.json:

    "navbar": true (from false)

## Iron Router

    $ meteor add iron:router

## Coffeescript

    $ meteor add coffeescript

## Security

[Working With Accounts](http://www.artandlogic.com/blog/2014/01/meteor-working-with-accounts/)

    $ meteor add accounts-password
    $ meteor add accounts-ui



## Simple Schema

    $ meteor add aldeed:collection2

## Filesystem storage adapter for CollectionFS

    $ meteor add meteor add cfs:standard-packages // For FS.*
    $ meteor add cfs:filesystem
    $ meteor add matb33:collection-hooks

S3 support

    $ meteor add cfs:s3


## Create Basic Home Page

    <head>
      <title>Stellarj.io - Bootstrap</title>
    </head>
    <body>
      <div class="container">
        <header class="navbar navbar-default" role="navigation">
          <div class="navbar-header">
            <a class="navbar-brand" href="/">Stellarj.io - Bootstrap</a>
          </div>
        </header>
      </div>
    </body>

## Push to Git

Create git project (git@github.com:stellarj/stellarj-boilerplate.git)

    $ git init
    $ git remote add origin git@github.com:stellarj/stellarj-boilerplate.git
    $ git add .
    $ git commit

## Push to Modulus

    $ modulus project create stellarj-boilerplate -s 396
    $ modulus deploy -p stellarj-boilerplate

Note url:

    stellarjboilerplate-nnnnnn.onmodulus.net

    $ modulus env set ROOT_URL http://stellarjboilerplate-nnnnnn.onmodulus.net -p stellarj-boilerplate
    $ modulus project logs clear -p stellarj-boilerplate
    $ modulus project restart -p stellarj-boilerplate
    $ modulus project logs -p stellarj-boilerplate

Navigate to http://stellarjboilerplate-nnnnnn.onmodulus.net

## Put it On Your Device(s)

    $ meteor run ios-device --production --mobile-server http://usportstag.mod.bz





WHEN REBUILDING SET

of CDVInAppBrowser.m in - (void)createViews

    self.webView.opaque = NO;


// TODO:

    $ meteor remove autopublish
    $ meteor remove insecure

## Create Project

Go to your "projects" directory:

    $ cd ~/Projects

Create a meteor project

    $ meteor create PROJNAME
    $ cd PROJNAME

Test it out

    $ meteor // start meteor

browse to http://localhost:3000

## Remove AutoPublish and

* [](http://psychopyko.com/cool-stuff/meteor-6-simple-tips/)
* [Publish and Subscribe](https://docs.meteor.com/#/full/meteor_release)
* [Stack Overflow - Managa What Data is Synced](https://stackoverflow.com/questions/10346057/how-can-i-manage-what-data-is-synced-to-a-meteor-clients-cache)

    $ meteor remove autopublish
    $ meteor remove insecure


## Add Platforms

We will be using [Meteor Cordova Phonegap Integration](https://github.com/meteor/meteor/wiki/Meteor-Cordova-Phonegap-integration).

### iOS

In Project directory add the iOS platform:

    $ meteor add-platform ios

Run it in development (the window may pop-up behind other windows):

    $ meteor run ios

or in production:

    $ meteor --production run ios

#### Physical iOS Device

Read and follow [How to Run Your App on an iOS Device](https://github.com/meteor/meteor/wiki/How-to-run-your-app-on-an-iOS-device).

### Android

In Project directory add the Android platform:

    $ meteor add-platform android

Run it in development:

    $ meteor run android

or in production:

    $ meteor --production run android

## Setup Project Structure

Meteor supports many types of projects. This means there is no default structure similar to ruby on rails.

* [In Search of a Meteor Boilerplate](https://medium.com/things-i-did-and-learned-today/in-search-of-a-meteor-boilerplate-6f01fe5abfd1)
* [Spreadsheet of Project Folder Structures](https://docs.google.com/spreadsheets/d/1ZL5884zIRETLgSZr4n3ButsoPLxXQFom7VMtxZ4G4gk/edit#gid=0)

### Remove Files Generated by Create (Optional)

May want to remove files created by meteor create:

    $ rm PROJNAME.*

### Stellarj.io App Project Structure

* [Structuring Your App](https://docs.meteor.com/#/full/structuringyourapp)

Key Points:

* if (Meteor.isServer) { ... } - code doesn't run on client but still sent to client.
* Server code runs in a single thread per request.
* src="public/bg.png" is src="/bg.png"

The project structure for apps:

```
|- client
  main.html
  main.js
  |- styles
  |- views
|- lib
  |- collections
  |- router
|- private
|- public
|- server
|- tests
```

mkdir client
mkdir client/styles
mkdir client/views
mkdir lib
mkdir lib/collections
mkdir lib/router
mkdir private
mkdir public
mkdir server
mkdir tests

touch client/main.html
touch client/main.js

## Add Bootstrap-Less

We will be using bootstrap-less.

* [Meteor Bootstrap](https://github.com/Nemo64/meteor-bootstrap) - Twitter Bootstrap Less Library
* [Meteorjs and Twitter Bootstrap - The Right Way](http://www.manuel-schoebel.com/blog/meteorjs-and-twitter-bootstrap---the-right-way) - Talks about how and why to use less with Meteor

    $ meteor add nemo64:bootstrap less

Create the following file:

    $ touch ./client/styles/custom.bootstrap.json

While meteor is running (or then run meteor) will cause necessary files to generate in the styles directory.

Enable modules:

    "navbar": true (from false)

## Setup Testing

### Research

* [Tutorial Jasmine](http://doctorllama.wordpress.com/2014/09/22/bullet-proof-internationalised-meteor-applications-with-velocity-unit-testing-integration-testing-and-jasmine/) - Seems to be a dead end now. Can't seem to add jasmine-client-integration sample tests.
* [Tutorial Velocity Mocha](http://www.meteortesting.com/chapter/velocity) -
* [Velocity Examples](https://github.com/meteor-velocity/velocity-examples)
* [Test Driven Development](https://github.com/awatson1978/meteor-cookbook/blob/master/cookbook/test-driven-development.md)
* [Meteor Cookbook](https://github.com/awatson1978/meteor-cookbook)
* end-to-end - Nightwatch multiple browsers
* https://github.com/cucumber/cucumber/wiki/Gherkin
* https://github.com/meteor-velocity/velocity-examples/tree/master/leaderboard-mocha
* https://github.com/mad-eye/meteor-mocha-web
* [Velocity][velocity-home-link] is meteors chosen testing environment.
* velocity-ci NPM package (continuous integration)
* mirror apps custom stubs auto-stubbin
* https://github.com/meteor-velocity/velocity#register-testing-framework-to-velocity

### Mocha

[Mocha][mike-mocha-home-link] is a behavior driven centric testing approach.

Add mocha testing

    $ meteor add mike:mocha

Create default example tests

    $ meteor // start meteor

Open browser to http://localhost:3000 (or port meteor was run on)  

Click on "Add mocha sample tests"

Wait a little for tests to pass





# Creating a Meteor Package

## Generate Package

Turn off any meteor instances running.

See [meteor packages][meteor-package-doc-link] and [atmosphere installing packages][atmosphere-installing-link].

    $ meteor create --package METEORUSER:PACKAGENAME

edit PROJECTNAME/packages/METEORUSER:PACKAGENAME/package.js

* Add in a summary.
* Optional: Add in a git repository.
* Optional: Change version to 0.1.1


Change package.onUse to:

```javascript
    Package.onUse(function(api) {
      api.versionsFrom('METEOR@0.9.4'); // from undefined
      api.addFiles('PACKAGENAME:PACKAGENAME.js');
      if (api.export) {
         api.export("PACKAGENAME");
      }
    });
```

NOTE:!!! PACKAGENAME in this case should be upper case. Like user:mypackage should be Mypackage (for PACKAGENAME).

WARNING: api.export("PACKAGENAME") is required or you can't test it.

## Install Your Package

You need to install your own package.

    $ meteor add PACKAGENAME:PACKAGENAME

## Create Your Package

edit PROJECTNAME/packages/METEORUSER:PACKAGENAME/METEORUSER:PACKAGENAME.js

and make a very minimal package:

```javascript
PACKAGENAME = {
   sayHello: function() {
      return "HELLO!"
   }
};
```

NOTE:!!! PACKAGENAME in this case should be upper case. Like user:mypackage should be Mypackage (for PACKAGENAME).

## Testing!!!!

Let's make sure it all works. Remember those mocha tests?

edit PROJNAME/tests/mocha/server/sampleServerTest.js

update it so that we include the following:

```javascript
....
describe("Server initialization", function(){
  it("should have a Meteor version defined", function(){
    chai.assert(Meteor.release);
  });
  it("should give us access to our new package file", function(){
    chai.assert(PACKAGENAME.sayHello);
  });
});
```

NOTE:!!! PACKAGENAME in this case should be upper case. Like user:mypackage should be Mypackage (for PACKAGENAME).

Run meteor if it isn't already running:

    $ meteor

go to http://localhost:3000/

You should see a "should give us access to our new package file" pass.

Note that you may need to edit the server file to get the tests to re-run so you can see that message.

Congrats! You you've built meteor package that is testable.

## Push To Git

You know the drill.


### To Meteor

    $ meteor deploy PROJNAME.meteor.com


## To Consider

### Coffeescript

    $ meteor add coffeescript
