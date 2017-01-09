Table Sorter
====================

[cli] c:/inetpub/ahclaims/modules/tableSorter/
[dev](http://ahclaims.ahcsdev.ibx.com/modules/tableSorter/index.html)
[prod](https://ahclaims.amerihealth.com/)

OBJECTIVE
--------------------
make tables sortable, client-side.

USERS AND AUDIENCE
--------------------
AHclaims users

FEATURES
--------------------
###  makes tables sortable, client-side

DEVELOPMENT
--------------------
###  node
###  gulp
###  browserify
###  for development using browserify
  *  cd to ahclaims and cli: 'gulp watch --module tableSorter'
  *  writes to ./modules/<module>/src folder
###  for production build
  *  cli: 'gulp --module tableSorter'
  *  build css and js into ./js folder

INSTALLATION
--------------------
*  give target table class of sort (for jquery and required css to target)
*  add thead and tbody tags to table
*  link css containing table.sort styles
*  add script tag for js/tableSorter.js above closing body tag