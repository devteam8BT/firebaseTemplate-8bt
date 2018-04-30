var observableModule = require("data/observable");
var dialogs = require("ui/dialogs");
var utils = require("utils/utils");
var fs = require("file-system");
var firebase = require("nativescript-plugin-firebase");
const firebaseWebApi = require("nativescript-plugin-firebase/app");
var platform = require("platform");

function econtactFrmViewModel() {
    var viewModel = observableModule.fromObject({

    });
  
    viewModel.registerUser = function () {
        firebase.push(
            '/users',
            {
              'first': 'Eddy',
              'last': 'Verbruggen',
              'birthYear': 1977,
              'isMale': true,
              'address': {
                'street': 'foostreet',
                'number': 123
              }
            }
        ).then(
            function (result) {
                dialogs.alert({
                    title: "Working",
                    message: result.key,
                    okButtonText: "OK"
                  });
            },
            function (error) {
                dialogs.alert({
                    title: "Login error",
                    message: error,
                    okButtonText: "OK, pity"
                  });
            }
        );
    };

    return viewModel;
}

module.exports = econtactFrmViewModel;