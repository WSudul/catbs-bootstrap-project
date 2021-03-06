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
    instance = new CatbsRestApi.BookingcontrollerApi();
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

  describe('BookingcontrollerApi', function() {
    describe('cancelReservationUsingPATCH', function() {
      it('should call cancelReservationUsingPATCH successfully', function(done) {
        //uncomment below and update the code to test cancelReservationUsingPATCH
        //instance.cancelReservationUsingPATCH(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createReservationUsingPOST', function() {
      it('should call createReservationUsingPOST successfully', function(done) {
        //uncomment below and update the code to test createReservationUsingPOST
        //instance.createReservationUsingPOST(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getMyBookingsUsingGET', function() {
      it('should call getMyBookingsUsingGET successfully', function(done) {
        //uncomment below and update the code to test getMyBookingsUsingGET
        //instance.getMyBookingsUsingGET(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getScreeningReservationsUsingGET', function() {
      it('should call getScreeningReservationsUsingGET successfully', function(done) {
        //uncomment below and update the code to test getScreeningReservationsUsingGET
        //instance.getScreeningReservationsUsingGET(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getUserBookingsUsingGET', function() {
      it('should call getUserBookingsUsingGET successfully', function(done) {
        //uncomment below and update the code to test getUserBookingsUsingGET
        //instance.getUserBookingsUsingGET(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateReservationUsingPATCH', function() {
      it('should call updateReservationUsingPATCH successfully', function(done) {
        //uncomment below and update the code to test updateReservationUsingPATCH
        //instance.updateReservationUsingPATCH(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
