/**
 * CATBS REST API
 * REST API DESCRIPTION.
 *
 * OpenAPI spec version: API TOS
 * Contact: wojciech.sudul@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.CatbsRestApi);
  }
}(this, function(expect, CatbsRestApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new CatbsRestApi.UsercontrollerApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('UsercontrollerApi', function() {
    describe('getAllClientsUsingGET', function() {
      it('should call getAllClientsUsingGET successfully', function(done) {
        //uncomment below and update the code to test getAllClientsUsingGET
        //instance.getAllClientsUsingGET(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAllClientsUsingGET1', function() {
      it('should call getAllClientsUsingGET1 successfully', function(done) {
        //uncomment below and update the code to test getAllClientsUsingGET1
        //instance.getAllClientsUsingGET1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAllEmployeesUsingGET', function() {
      it('should call getAllEmployeesUsingGET successfully', function(done) {
        //uncomment below and update the code to test getAllEmployeesUsingGET
        //instance.getAllEmployeesUsingGET(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAllEmployeesUsingGET1', function() {
      it('should call getAllEmployeesUsingGET1 successfully', function(done) {
        //uncomment below and update the code to test getAllEmployeesUsingGET1
        //instance.getAllEmployeesUsingGET1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getEmployeeByUserNameUsingGET', function() {
      it('should call getEmployeeByUserNameUsingGET successfully', function(done) {
        //uncomment below and update the code to test getEmployeeByUserNameUsingGET
        //instance.getEmployeeByUserNameUsingGET(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getUserByUserNameUsingGET', function() {
      it('should call getUserByUserNameUsingGET successfully', function(done) {
        //uncomment below and update the code to test getUserByUserNameUsingGET
        //instance.getUserByUserNameUsingGET(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateClientUsingPATCH', function() {
      it('should call updateClientUsingPATCH successfully', function(done) {
        //uncomment below and update the code to test updateClientUsingPATCH
        //instance.updateClientUsingPATCH(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateEmployeeUsingPATCH', function() {
      it('should call updateEmployeeUsingPATCH successfully', function(done) {
        //uncomment below and update the code to test updateEmployeeUsingPATCH
        //instance.updateEmployeeUsingPATCH(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));