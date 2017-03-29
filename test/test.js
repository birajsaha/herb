var app = require('../app');
var request = require('request');
var assert = require('assert');
var expect = require('Chai').expect;

describe('GET /api/categories', function () {
    it('should return 200', function (done) {
        var options = {
            url: 'http://localhost:8000/api/categories/1',
            headers: {
                'Content-Type': 'text/plain'
            }
        };
        request.get(options, function (err, res, body) {
            expect(res.statusCode).to.equal(200);
            expect(res.body).to.contain('category1');
            done();
        });
    });
});
