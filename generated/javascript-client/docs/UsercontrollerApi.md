# CatbsRestApi.UsercontrollerApi

All URIs are relative to *https://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAllClientsUsingGET**](UsercontrollerApi.md#getAllClientsUsingGET) | **GET** /user/clients/all | getAllClients
[**getAllClientsUsingGET1**](UsercontrollerApi.md#getAllClientsUsingGET1) | **GET** /user/clients | getAllClients
[**getAllEmployeesUsingGET**](UsercontrollerApi.md#getAllEmployeesUsingGET) | **GET** /user/employees/all | getAllEmployees
[**getAllEmployeesUsingGET1**](UsercontrollerApi.md#getAllEmployeesUsingGET1) | **GET** /user/employees | getAllEmployees
[**getEmployeeByUserNameUsingGET**](UsercontrollerApi.md#getEmployeeByUserNameUsingGET) | **GET** /user/employee/{login} | getEmployeeByUserName
[**getUserByUserNameUsingGET**](UsercontrollerApi.md#getUserByUserNameUsingGET) | **GET** /user/client/{login} | getUserByUserName
[**updateClientUsingPATCH**](UsercontrollerApi.md#updateClientUsingPATCH) | **PATCH** /user/client/{id}/update | updateClient
[**updateEmployeeUsingPATCH**](UsercontrollerApi.md#updateEmployeeUsingPATCH) | **PATCH** /user/employee/{id}/update | updateEmployee


<a name="getAllClientsUsingGET"></a>
# **getAllClientsUsingGET**
> Object getAllClientsUsingGET()

getAllClients

### Example
```javascript
var CatbsRestApi = require('catbs_rest_api');

var apiInstance = new CatbsRestApi.UsercontrollerApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllClientsUsingGET(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="getAllClientsUsingGET1"></a>
# **getAllClientsUsingGET1**
> Object getAllClientsUsingGET1(active)

getAllClients

### Example
```javascript
var CatbsRestApi = require('catbs_rest_api');

var apiInstance = new CatbsRestApi.UsercontrollerApi();

var active = true; // Boolean | active


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllClientsUsingGET1(active, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **active** | **Boolean**| active | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="getAllEmployeesUsingGET"></a>
# **getAllEmployeesUsingGET**
> Object getAllEmployeesUsingGET()

getAllEmployees

### Example
```javascript
var CatbsRestApi = require('catbs_rest_api');

var apiInstance = new CatbsRestApi.UsercontrollerApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllEmployeesUsingGET(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="getAllEmployeesUsingGET1"></a>
# **getAllEmployeesUsingGET1**
> Object getAllEmployeesUsingGET1(active)

getAllEmployees

### Example
```javascript
var CatbsRestApi = require('catbs_rest_api');

var apiInstance = new CatbsRestApi.UsercontrollerApi();

var active = true; // Boolean | active


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllEmployeesUsingGET1(active, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **active** | **Boolean**| active | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="getEmployeeByUserNameUsingGET"></a>
# **getEmployeeByUserNameUsingGET**
> Object getEmployeeByUserNameUsingGET(login)

getEmployeeByUserName

### Example
```javascript
var CatbsRestApi = require('catbs_rest_api');

var apiInstance = new CatbsRestApi.UsercontrollerApi();

var login = "login_example"; // String | login


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getEmployeeByUserNameUsingGET(login, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **String**| login | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="getUserByUserNameUsingGET"></a>
# **getUserByUserNameUsingGET**
> Object getUserByUserNameUsingGET(login)

getUserByUserName

### Example
```javascript
var CatbsRestApi = require('catbs_rest_api');

var apiInstance = new CatbsRestApi.UsercontrollerApi();

var login = "login_example"; // String | login


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUserByUserNameUsingGET(login, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **String**| login | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="updateClientUsingPATCH"></a>
# **updateClientUsingPATCH**
> Object updateClientUsingPATCH(partialUpdate, id)

updateClient

### Example
```javascript
var CatbsRestApi = require('catbs_rest_api');

var apiInstance = new CatbsRestApi.UsercontrollerApi();

var partialUpdate = new CatbsRestApi.Client(); // Client | partialUpdate

var id = 789; // Number | id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateClientUsingPATCH(partialUpdate, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **partialUpdate** | [**Client**](Client.md)| partialUpdate | 
 **id** | **Number**| id | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateEmployeeUsingPATCH"></a>
# **updateEmployeeUsingPATCH**
> Object updateEmployeeUsingPATCH(partialUpdate, id)

updateEmployee

### Example
```javascript
var CatbsRestApi = require('catbs_rest_api');

var apiInstance = new CatbsRestApi.UsercontrollerApi();

var partialUpdate = new CatbsRestApi.Employee(); // Employee | partialUpdate

var id = 789; // Number | id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateEmployeeUsingPATCH(partialUpdate, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **partialUpdate** | [**Employee**](Employee.md)| partialUpdate | 
 **id** | **Number**| id | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

