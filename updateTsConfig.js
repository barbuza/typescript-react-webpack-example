#!/usr/bin/env node

var fs = require('fs');
var glob = require('glob');

var template = JSON.parse(fs.readFileSync('tsconfig.template.json', 'utf-8'));
template.files = glob.sync('src/**/*.ts').concat(glob.sync('src/**/*.tsx')).concat(['typings/tsd.d.ts']); 
fs.writeFileSync('tsconfig.json', JSON.stringify(template, null, 2));
