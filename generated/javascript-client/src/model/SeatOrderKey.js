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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.CatbsRestApi) {
      root.CatbsRestApi = {};
    }
    root.CatbsRestApi.SeatOrderKey = factory(root.CatbsRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SeatOrderKey model module.
   * @module model/SeatOrderKey
   * @version API TOS
   */

  /**
   * Constructs a new <code>SeatOrderKey</code>.
   * @alias module:model/SeatOrderKey
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>SeatOrderKey</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SeatOrderKey} obj Optional instance to populate.
   * @return {module:model/SeatOrderKey} The populated <code>SeatOrderKey</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('reservationId')) {
        obj['reservationId'] = ApiClient.convertToType(data['reservationId'], 'Number');
      }
      if (data.hasOwnProperty('seatId')) {
        obj['seatId'] = ApiClient.convertToType(data['seatId'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} reservationId
   */
  exports.prototype['reservationId'] = undefined;
  /**
   * @member {Number} seatId
   */
  exports.prototype['seatId'] = undefined;



  return exports;
}));


