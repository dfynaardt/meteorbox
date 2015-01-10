## <a name="atom-installation">Install Atom (optional)

Go to [atom][atom-home-link] and install the package on your mac.

Setup a symlink so you can run it from the command line:

    $ ln -s /Applications/Atom.app/Contents/MacOS/Atom /usr/local/bin/atom

Remember to make sure that /usr/local/bin/atom is in your $PATH. You can edit ~/.bash_profile and add it as follows:

    export PATH=/usr/local/git/bin:$PATH


now, you an do things like


    $ atom

to open and edit all files in a directory.

### Webstorm

Go to [webstorm][webstorm-home-link] and install the package on your mac.

Symlink is setup for you automatically when you first start webstorm

    $ wstorm

to open and edit all files in a directory.

#### Setting up Themes

Find the theme file on the internet (should have a .icls extension).

Use whoami to find your home directory

    $ whoami

Go to this directory:

    $ /Users/WHOAMIRESULT/Library/Preferences/WebStorm9/colors

place files there.
