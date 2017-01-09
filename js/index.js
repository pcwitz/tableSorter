'use strict';

var $ = require('jquery');
require('./jquery.tablesorter');

var sortTable = function() {
  var selector = 'table.sort';
  $(selector).tablesorter({

    sortList : [[ 0,0 ]],
    cssAsc   : 'sorted asc',
    cssDesc  : 'sorted desc',
    cssHeader: 'header'

  });
};
sortTable();

