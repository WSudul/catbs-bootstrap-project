# CatbsRestApi.AccesscontrollerApi

All URIs are relative to *https://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addNewUserUsingPOST**](AccesscontrollerApi.md#addNewUserUsingPOST) | **POST** /access/register | addNewUser
[**changeCredentialsUsingPUT**](AccesscontrollerApi.md#changeCredentialsUsingPUT) | **PUT** /access/credentials | ChangeCredentials
[**getRegistrationPolicyUsingGET**](AccesscontrollerApi.md#getRegistrationPolicyUsingGET) | **GET** /access/register | GetRegistrationPolicy
[**validateCredentialsUsingGET**](AccesscontrollerApi.md#validateCredentialsUsingGET) | **GET** /access/credentials | ValidateCredentials


<a name="addNewUserUsingPOST"></a>
# **addNewUserUsingPOST**
> Object addNewUserUsingPOST(clientRegistration)

addNewUser

### Example
```javascript
var CatbsRestApi = require('catbs_rest_api');

var apiInstance = new CatbsRestApi.AccesscontrollerApi();

var clientRegistration = new CatbsRestApi.ClientRegistration(); // ClientRegistration | clientRegistration


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addNewUserUsingPOST(clientRegistration, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientRegistration** | [**ClientRegistration**](ClientRegistration.md)| clientRegistration | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="changeCredentialsUsingPUT"></a>
# **changeCredentialsUsingPUT**
> Object changeCredentialsUsingPUT(loginData)

ChangeCredentials

### Example
```javascript
var CatbsRestApi = require('catbs_rest_api');

var apiInstance = new CatbsRestApi.AccesscontrollerApi();

var loginData = new CatbsRestApi.ClientLoginData(); // ClientLoginData | loginData


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.changeCredentialsUsingPUT(loginData, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loginData** | [**ClientLoginData**](ClientLoginData.md)| loginData | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRegistrationPolicyUsingGET"></a>
# **getRegistrationPolicyUsingGET**
> Object getRegistrationPolicyUsingGET()

GetRegistrationPolicy

### Example
```javascript
var CatbsRestApi = require('catbs_rest_api');

var apiInstance = new CatbsRestApi.AccesscontrollerApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRegistrationPolicyUsingGET(callback);
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

<a name="validateCredentialsUsingGET"></a>
# **validateCredentialsUsingGET**
> Object validateCredentialsUsingGET(login, password)

ValidateCredentials

### Example
```javascript
var CatbsRestApi = require('catbs_rest_api');

var apiInstance = new CatbsRestApi.AccesscontrollerApi();

var login = "login_example"; // String | login

var password = "password_example"; // String | password


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.validateCredentialsUsingGET(login, password, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **String**| login | 
 **password** | **String**| password | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

