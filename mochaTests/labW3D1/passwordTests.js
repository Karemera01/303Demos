"use strict";
/* global require */
const assert = require("assert");
const pas = require("./passwords.js");

describe("fix function that loses 'this'", function () {

    it("tests rockstar", function () {
        assert.strictEqual(pas.askPassword(pas.user.loginOk.bind(pas.user), pas.user.loginFail.bind(pas.user), "rockstar"), "John logged in");
    });

    it("tests wrong password", function () {
        assert.strictEqual(pas.askPassword(pas.user.loginOk.bind(pas.user), pas.user.loginFail.bind(pas.user), "1234"), "John failed to log in");
    });

});

describe("Partial application for login", function () {

    it("tests rockstar", function () {
        assert.strictEqual(pas.askPassword2(() => pas.user2.login(true), () => pas.user2.login(false), "rockstar"), "John logged in");
    });

    it("tests wrong password", function () {
        assert.strictEqual(pas.askPassword2(() => pas.user2.login(true), () => pas.user2.login(false), "1234"), "John failed to log in");
    });

});