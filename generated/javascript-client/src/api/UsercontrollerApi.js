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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Client', 'model/Employee'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Client'), require('../model/Employee'));
  } else {
    // Browser globals (root is window)
    if (!root.CatbsRestApi) {
      root.CatbsRestApi = {};
    }
    root.CatbsRestApi.UsercontrollerApi = factory(root.CatbsRestApi.ApiClient, root.CatbsRestApi.Client, root.CatbsRestApi.Employee);
  }
}(this, function(ApiClient, Client, Employee) {
  'use strict';

  /**
   * Usercontroller service.
   * @module api/UsercontrollerApi
   * @version API TOS
   */

  /**
   * Constructs a new UsercontrollerApi. 
   * @alias module:api/UsercontrollerApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getAllClientsUsingGET operation.
     * @callback module:api/UsercontrollerApi~getAllClientsUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getAllClients
     * @param {module:api/UsercontrollerApi~getAllClientsUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.getAllClientsUsingGET = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/user/clients/all', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllClientsUsingGET1 operation.
     * @callback module:api/UsercontrollerApi~getAllClientsUsingGET1Callback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getAllClients
     * @param {Boolean} active active
     * @param {module:api/UsercontrollerApi~getAllClientsUsingGET1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.getAllClientsUsingGET1 = function(active, callback) {
      var postBody = null;

      // verify the required parameter 'active' is set
      if (active === undefined || active === null) {
        throw new Error("Missing the required parameter 'active' when calling getAllClientsUsingGET1");
      }


      var pathParams = {
      };
      var queryParams = {
        'active': active
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/user/clients', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllEmployeesUsingGET operation.
     * @callback module:api/UsercontrollerApi~getAllEmployeesUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getAllEmployees
     * @param {module:api/UsercontrollerApi~getAllEmployeesUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.getAllEmployeesUsingGET = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/user/employees/all', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllEmployeesUsingGET1 operation.
     * @callback module:api/UsercontrollerApi~getAllEmployeesUsingGET1Callback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getAllEmployees
     * @param {Boolean} active active
     * @param {module:api/UsercontrollerApi~getAllEmployeesUsingGET1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.getAllEmployeesUsingGET1 = function(active, callback) {
      var postBody = null;

      // verify the required parameter 'active' is set
      if (active === undefined || active === null) {
        throw new Error("Missing the required parameter 'active' when calling getAllEmployeesUsingGET1");
      }


      var pathParams = {
      };
      var queryParams = {
        'active': active
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/user/employees', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getEmployeeByUserNameUsingGET operation.
     * @callback module:api/UsercontrollerApi~getEmployeeByUserNameUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getEmployeeByUserName
     * @param {String} login login
     * @param {module:api/UsercontrollerApi~getEmployeeByUserNameUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.getEmployeeByUserNameUsingGET = function(login, callback) {
      var postBody = null;

      // verify the required parameter 'login' is set
      if (login === undefined || login === null) {
        throw new Error("Missing the required parameter 'login' when calling getEmployeeByUserNameUsingGET");
      }


      var pathParams = {
        'login': login
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/user/employee/{login}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getUserByUserNameUsingGET operation.
     * @callback module:api/UsercontrollerApi~getUserByUserNameUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getUserByUserName
     * @param {String} login login
     * @param {module:api/UsercontrollerApi~getUserByUserNameUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.getUserByUserNameUsingGET = function(login, callback) {
      var postBody = null;

      // verify the required parameter 'login' is set
      if (login === undefined || login === null) {
        throw new Error("Missing the required parameter 'login' when calling getUserByUserNameUsingGET");
      }


      var pathParams = {
        'login': login
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/user/client/{login}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateClientUsingPATCH operation.
     * @callback module:api/UsercontrollerApi~updateClientUsingPATCHCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * updateClient
     * @param {module:model/Client} partialUpdate partialUpdate
     * @param {Number} id id
     * @param {module:api/UsercontrollerApi~updateClientUsingPATCHCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.updateClientUsingPATCH = function(partialUpdate, id, callback) {
      var postBody = partialUpdate;

      // verify the required parameter 'partialUpdate' is set
      if (partialUpdate === undefined || partialUpdate === null) {
        throw new Error("Missing the required parameter 'partialUpdate' when calling updateClientUsingPATCH");
      }

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateClientUsingPATCH");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/user/client/{id}/update', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateEmployeeUsingPATCH operation.
     * @callback module:api/UsercontrollerApi~updateEmployeeUsingPATCHCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * updateEmployee
     * @param {module:model/Employee} partialUpdate partialUpdate
     * @param {Number} id id
     * @param {module:api/UsercontrollerApi~updateEmployeeUsingPATCHCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.updateEmployeeUsingPATCH = function(partialUpdate, id, callback) {
      var postBody = partialUpdate;

      // verify the required parameter 'partialUpdate' is set
      if (partialUpdate === undefined || partialUpdate === null) {
        throw new Error("Missing the required parameter 'partialUpdate' when calling updateEmployeeUsingPATCH");
      }

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateEmployeeUsingPATCH");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/user/employee/{id}/update', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));