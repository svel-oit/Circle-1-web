var React = require('react');
var TestUtils = require('react/lib/ReactTestUtils'); //I like using the Test Utils, but you can just use the DOM API instead.
var LogsService = require('../Services/LogsService'); 

describe('Calculator', function () {

    // inject the HTML fixture for the tests
    beforeEach(function () {  });

    // remove the html fixture from the DOM
    afterEach(function () { });

    it("Проверка", function () {

        var result = LogsService.GetLogRecords(null)

        expect(test_str).toBe("test")
    })

});