This is the client side of the website.

NPM: we use NPM to manage dev dependencies required for the build tasks (e.g. gulp, bower, etc.)
Bower: we use Bower for managing frontend app dependencies (e.g. angular, bootstrap, etc.)
Gulp: we use Gulp for task automation

Installation
------------

Run the default 'npm install' command to download & install
1) the dev dependencies required for the build tasks (see package.json)
2) the frontend app dependencies (see bower.json); these dependencies will be installed to app/lib)

Optional: if you would like to run individual build tasks (gulpfile.js), then you need to install gulp globally:
npm install -g gulp


Cleanup
-------

'npm run cleanup' or 'gulp clean:all'


Important files
---------------
package.json - contains the dev dependencies for the build tasks
bower.json - contains the frontend app dependencies, e.g. angular, bootstrap, etc.
.bowerrc - defines the target directory for the frontend app dependencies
gulpfile.js - defines the build tasks


!!! THIS IS WORK IN PROGRESS !!!