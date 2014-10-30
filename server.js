/* jshint node: true*/
'use strict';

var express     = require('express'),
    exphbs      = require('express-handlebars'),
    bodyParser  = require('body-parser'),
    model       = require('./model.js');

// -- Setup Express App --------------------------------------------------------

var app    = express(),
    router = express.Router();

app.engine('hbs', exphbs({ extname: 'hbs'}));
app.set('view engine', 'hbs');

// -- Middleware ---------------------------------------------------------------

app.use(router);

// -- Policy -------------------------------------------------------------------

var nonceToken = Math.random().toString(24).slice(2 + Math.floor(Math.random() * 10));
var cspRules = [
    "default-src: 'self'",
    "script-src : 'self' 'nonce-" + nonceToken + "' https://cdn.company.com/",
    "connect-src: 'none'",
    "img-src    : *",
    "style-src  : https://cdn.company.com/",
    "font-src   : 'none'"
].join(', ');

// -- Routes -------------------------------------------------------------------

router.get('/secure', function (req, res, next) {
    res.setHeader('Content-Security-Policy', cspRules);
    res.setHeader('X-Content-Security-Policy', cspRules); // IE10+
    res.render('page', {
        items: model.getItems(),
        nonce: nonceToken
    });
});

router.get('/sloppy', function (req, res, next) {
    res.setHeader('Content-Security-Policy-Report-Only',
            cspRules + 'report-uri: /my_amazing_csp_report_parser');
    res.render('page', {
        items: model.getItems(),
        nonce: nonceToken
    });
});

router.post('/add', bodyParser.urlencoded({ extended: false }), function (req, res, next) {
    var data = model.addItem(req.body);
    if (!data) {
        console.warn('Dude! What are you doing?');
        console.warn(req.body);
        // intentionally doing nothing
    } else {
        // setting custom cookie for the steal
        res.cookie('name',   data.name,   { maxAge: 900000 });
        res.cookie('secret', data.secret, { maxAge: 900000 });
    }
    res.redirect(req.headers.referer);
});

app.listen(3000, function () {
    console.log('listening on: %d', 3000);
});
