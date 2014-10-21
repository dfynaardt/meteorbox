[meteor-home-link]: https://www.meteor.com "Meteor home website."
[meteor-package-doc-link]: https://docs.meteor.com/#writingpackages "Writing Packages"
[atmosphere-installing-link]: https://atmospherejs.com/i/installing "Getting started with packages"
[atom-home-link]: https://atom.io/ "A text editor written in javascript"
[kimonolabs-home-link]: https://www.kimonolabs.com "Web Scraping software"

# Ultimate Meteor 0.9.4 Full Stack Cheat

# <a name="toc"></a>TOC

* [TOC](#toc)
* [Introduction](#introduction)

---

# <a name="introduction"></a>Introduction

This document will, hopefully, get you up and running creating [meteor][meteor-home-link] applications and creating meteor plugins.

We are trying for a full javascript stack (editor and all).

# Tools

* [meteor][meteor-home-link] - Platform for building responsive web apps using javascript, nodejs and their own package management system.

# Resources

* [atom][atom-home-link] - A pure javascript open source editor by Github.
* [kimonolabs][kimonolabs-home-link] - Web scraping software.




# <a name="development-setup"></a>Development Environment Setup

## <a name="meteor-installation"></a>Meteor Installation

Go to [meteor][meteor-home-link] and follow "Get Started Now!"

    $ curl https://install.meteor.com/ | sh

## <a name="git-installation">Install Git

Install git on your machine.

## <a name="atom-installation">Install Atom

Go to [atom][atom-home-link] and install the package on your mac.

Setup a symlink so you can run it from the command line:

    $ ln -s /Applications/Atom.app/Contents/MacOS/Atom /usr/local/bin/atom

Remember to make sure that /usr/local/bin/atom is in your $PATH. You can edit ~/.bash_profile and add it as follows:

    export PATH=/usr/local/git/bin:$PATH


now, you an do things like


    $ atom .

to open and edit all files in a directory.

# <a name="meteor-installation"></a>Creating a Meteor Project

Go to your "projects" directory:

    $ cd ~/Projects

Create a meteor project

    $ meteor create PROJNAME
    $ cd PROJNAME

Add mocha testing

    $ meteor add mike:mocha

Create default example tests

    $ meteor

Open browser to http://localhost:3000 (or port meteor was run on)  

Click on "Add mocha sample tests"

RESTART meteor

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
