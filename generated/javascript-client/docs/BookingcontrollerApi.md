# CatbsRestApi.BookingcontrollerApi

All URIs are relative to *https://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelReservationUsingPATCH**](BookingcontrollerApi.md#cancelReservationUsingPATCH) | **PATCH** /bookings/reservation/{id}/cancel | cancelReservation
[**createReservationUsingPOST**](BookingcontrollerApi.md#createReservationUsingPOST) | **POST** /bookings/reservation/create | createReservation
[**getMyBookingsUsingGET**](BookingcontrollerApi.md#getMyBookingsUsingGET) | **GET** /bookings/{clientId}/my-bookings | getMyBookings
[**getScreeningReservationsUsingGET**](BookingcontrollerApi.md#getScreeningReservationsUsingGET) | **GET** /bookings/screening/{id} | getScreeningReservations
[**getUserBookingsUsingGET**](BookingcontrollerApi.md#getUserBookingsUsingGET) | **GET** /bookings/user/{clientId} | getUserBookings
[**updateReservationUsingPATCH**](BookingcontrollerApi.md#updateReservationUsingPATCH) | **PATCH** /bookings/reservation/{id}/paid | updateReservation


<a name="cancelReservationUsingPATCH"></a>
# **cancelReservationUsingPATCH**
> Object cancelReservationUsingPATCH(id)

cancelReservation

### Example
```javascript
var CatbsRestApi = require('catbs_rest_api');

var apiInstance = new CatbsRestApi.BookingcontrollerApi();

var id = 789; // Number | id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.cancelReservationUsingPATCH(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| id | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createReservationUsingPOST"></a>
# **createReservationUsingPOST**
> Object createReservationUsingPOST(reservation)

createReservation

### Example
```javascript
var CatbsRestApi = require('catbs_rest_api');

var apiInstance = new CatbsRestApi.BookingcontrollerApi();

var reservation = new CatbsRestApi.Reservation(); // Reservation | reservation


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createReservationUsingPOST(reservation, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reservation** | [**Reservation**](Reservation.md)| reservation | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getMyBookingsUsingGET"></a>
# **getMyBookingsUsingGET**
> Object getMyBookingsUsingGET(clientId)

getMyBookings

### Example
```javascript
var CatbsRestApi = require('catbs_rest_api');

var apiInstance = new CatbsRestApi.BookingcontrollerApi();

var clientId = 789; // Number | clientId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getMyBookingsUsingGET(clientId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **Number**| clientId | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="getScreeningReservationsUsingGET"></a>
# **getScreeningReservationsUsingGET**
> Object getScreeningReservationsUsingGET(id)

getScreeningReservations

### Example
```javascript
var CatbsRestApi = require('catbs_rest_api');

var apiInstance = new CatbsRestApi.BookingcontrollerApi();

var id = 789; // Number | id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getScreeningReservationsUsingGET(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| id | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="getUserBookingsUsingGET"></a>
# **getUserBookingsUsingGET**
> Object getUserBookingsUsingGET(clientId, unpaid, active)

getUserBookings

### Example
```javascript
var CatbsRestApi = require('catbs_rest_api');

var apiInstance = new CatbsRestApi.BookingcontrollerApi();

var clientId = 789; // Number | clientId

var unpaid = true; // Boolean | unpaid

var active = true; // Boolean | active


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUserBookingsUsingGET(clientId, unpaid, active, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **Number**| clientId | 
 **unpaid** | **Boolean**| unpaid | 
 **active** | **Boolean**| active | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="updateReservationUsingPATCH"></a>
# **updateReservationUsingPATCH**
> Object updateReservationUsingPATCH(id, paid)

updateReservation

### Example
```javascript
var CatbsRestApi = require('catbs_rest_api');

var apiInstance = new CatbsRestApi.BookingcontrollerApi();

var id = 789; // Number | id

var paid = true; // Boolean | paid


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateReservationUsingPATCH(id, paid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| id | 
 **paid** | **Boolean**| paid | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

