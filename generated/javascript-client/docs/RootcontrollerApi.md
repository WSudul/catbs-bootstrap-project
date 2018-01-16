# CatbsRestApi.RootcontrollerApi

All URIs are relative to *https://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sampleAdminPageUsingGET**](RootcontrollerApi.md#sampleAdminPageUsingGET) | **GET** /admin/x | sampleAdminPage
[**sampleErrorPageUsingGET**](RootcontrollerApi.md#sampleErrorPageUsingGET) | **GET** /my-error-page | sampleErrorPage


<a name="sampleAdminPageUsingGET"></a>
# **sampleAdminPageUsingGET**
> &#39;String&#39; sampleAdminPageUsingGET()

sampleAdminPage

### Example
```javascript
var CatbsRestApi = require('catbs_rest_api');

var apiInstance = new CatbsRestApi.RootcontrollerApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.sampleAdminPageUsingGET(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="sampleErrorPageUsingGET"></a>
# **sampleErrorPageUsingGET**
> &#39;String&#39; sampleErrorPageUsingGET()

sampleErrorPage

### Example
```javascript
var CatbsRestApi = require('catbs_rest_api');

var apiInstance = new CatbsRestApi.RootcontrollerApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.sampleErrorPageUsingGET(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

