const { initializeApp } = require("firebase-admin/app");
initializeApp();

const updateUser = require("./api/updateUser");

exports.updateUser = updateUser.updateUser;