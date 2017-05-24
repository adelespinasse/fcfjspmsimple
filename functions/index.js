'use strict';

const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

const build = require('./build');

exports.makeUppercase = build.makeUppercase(functions, admin);
