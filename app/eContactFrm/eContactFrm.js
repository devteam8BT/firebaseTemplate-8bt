var frameModule = require("ui/frame");
var dialogsModule = require("ui/dialogs");
var viewModule = require("ui/core/view");
var colorModule = require("tns-core-modules/color");
var timer = require("timer");
var eContactViewModel = require("./eContactFrm-view-model");
var eContactFrmViewModel = new eContactViewModel();

exports.pageLoaded = function (args) {
    var bg = args.object;
    bg.bindingContext = eContactFrmViewModel;
}

exports.register = function () {
    alert("Working");
};