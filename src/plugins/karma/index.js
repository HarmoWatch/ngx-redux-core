"use strict";
var path = require("path");

function createPattern(pattern) {
    return { pattern: pattern, included: true, served: true, watched: false };
}

function factory(files) {
    files.push(createPattern(path.join(__dirname, '/bundle.js')));
}

factory['$inject'] = ['config.files'];
module.exports = {
    'framework:@harmowatch/ngx-redux-core': ['factory', factory]
};
