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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Client', 'model/ClientLoginData', 'model/ClientRegistration', 'model/Employee', 'model/Genre', 'model/Movie', 'model/OrderType', 'model/Price', 'model/Reservation', 'model/Schedule', 'model/Screening', 'model/SeatOrder', 'model/SeatOrderKey', 'model/Timestamp', 'api/AccesscontrollerApi', 'api/BookingcontrollerApi', 'api/RepositorycontrollerApi', 'api/RootcontrollerApi', 'api/UsercontrollerApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/Client'), require('./model/ClientLoginData'), require('./model/ClientRegistration'), require('./model/Employee'), require('./model/Genre'), require('./model/Movie'), require('./model/OrderType'), require('./model/Price'), require('./model/Reservation'), require('./model/Schedule'), require('./model/Screening'), require('./model/SeatOrder'), require('./model/SeatOrderKey'), require('./model/Timestamp'), require('./api/AccesscontrollerApi'), require('./api/BookingcontrollerApi'), require('./api/RepositorycontrollerApi'), require('./api/RootcontrollerApi'), require('./api/UsercontrollerApi'));
  }
}(function(ApiClient, Client, ClientLoginData, ClientRegistration, Employee, Genre, Movie, OrderType, Price, Reservation, Schedule, Screening, SeatOrder, SeatOrderKey, Timestamp, AccesscontrollerApi, BookingcontrollerApi, RepositorycontrollerApi, RootcontrollerApi, UsercontrollerApi) {
  'use strict';

  /**
   * REST_API_DESCRIPTION_.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var CatbsRestApi = require('index'); // See note below*.
   * var xxxSvc = new CatbsRestApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new CatbsRestApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new CatbsRestApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new CatbsRestApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version API TOS
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The Client model constructor.
     * @property {module:model/Client}
     */
    Client: Client,
    /**
     * The ClientLoginData model constructor.
     * @property {module:model/ClientLoginData}
     */
    ClientLoginData: ClientLoginData,
    /**
     * The ClientRegistration model constructor.
     * @property {module:model/ClientRegistration}
     */
    ClientRegistration: ClientRegistration,
    /**
     * The Employee model constructor.
     * @property {module:model/Employee}
     */
    Employee: Employee,
    /**
     * The Genre model constructor.
     * @property {module:model/Genre}
     */
    Genre: Genre,
    /**
     * The Movie model constructor.
     * @property {module:model/Movie}
     */
    Movie: Movie,
    /**
     * The OrderType model constructor.
     * @property {module:model/OrderType}
     */
    OrderType: OrderType,
    /**
     * The Price model constructor.
     * @property {module:model/Price}
     */
    Price: Price,
    /**
     * The Reservation model constructor.
     * @property {module:model/Reservation}
     */
    Reservation: Reservation,
    /**
     * The Schedule model constructor.
     * @property {module:model/Schedule}
     */
    Schedule: Schedule,
    /**
     * The Screening model constructor.
     * @property {module:model/Screening}
     */
    Screening: Screening,
    /**
     * The SeatOrder model constructor.
     * @property {module:model/SeatOrder}
     */
    SeatOrder: SeatOrder,
    /**
     * The SeatOrderKey model constructor.
     * @property {module:model/SeatOrderKey}
     */
    SeatOrderKey: SeatOrderKey,
    /**
     * The Timestamp model constructor.
     * @property {module:model/Timestamp}
     */
    Timestamp: Timestamp,
    /**
     * The AccesscontrollerApi service constructor.
     * @property {module:api/AccesscontrollerApi}
     */
    AccesscontrollerApi: AccesscontrollerApi,
    /**
     * The BookingcontrollerApi service constructor.
     * @property {module:api/BookingcontrollerApi}
     */
    BookingcontrollerApi: BookingcontrollerApi,
    /**
     * The RepositorycontrollerApi service constructor.
     * @property {module:api/RepositorycontrollerApi}
     */
    RepositorycontrollerApi: RepositorycontrollerApi,
    /**
     * The RootcontrollerApi service constructor.
     * @property {module:api/RootcontrollerApi}
     */
    RootcontrollerApi: RootcontrollerApi,
    /**
     * The UsercontrollerApi service constructor.
     * @property {module:api/UsercontrollerApi}
     */
    UsercontrollerApi: UsercontrollerApi
  };

  return exports;
}));