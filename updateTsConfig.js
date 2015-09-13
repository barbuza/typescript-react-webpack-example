#!/usr/bin/env node

var fs = require('fs');
var glob = require('glob');

var template = JSON.parse(fs.readFileSync('tsconfig.template.json', 'utf-8'));

var typings = ['typings/tsd.d.ts'].concat(glob.sync('local_typings/**/*.d.ts'));
var sources = glob.sync('src/**/*.ts').concat(glob.sync('src/**/*.tsx'));

template.files = typings.concat(sources);

fs.writeFileSync('tsconfig.json', JSON.stringify(template, null, 2));
