'use strict';

describe('Controller: RegistrationController', function () {

  // load the controller's module
  beforeEach(module('myApp'));

  var RegistrationController,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AboutCtrl = $controller('RegistrationController', {
      $scope: scope
      // place here mocked dependencies

    });
  }));

  it('should have a string longer than 1', function () {
    expect(RegistrationController.scope.user.length).toBe(3);
  });
});
