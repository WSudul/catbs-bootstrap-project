# CatbsRestApi.RepositorycontrollerApi

All URIs are relative to *https://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addNewMovieUsingPOST**](RepositorycontrollerApi.md#addNewMovieUsingPOST) | **POST** /repository/movie | addNewMovie
[**addNewScheduleUsingPOST**](RepositorycontrollerApi.md#addNewScheduleUsingPOST) | **POST** /repository/cinema/{cinemaId}/schedule | addNewSchedule
[**addNewScreeningUsingPOST**](RepositorycontrollerApi.md#addNewScreeningUsingPOST) | **POST** /repository/schedule/{scheduleId}/screening | addNewScreening
[**getActiveMoviesUsingGET**](RepositorycontrollerApi.md#getActiveMoviesUsingGET) | **GET** /repository/movies/active | getActiveMovies
[**getAllMoviesUsingGET**](RepositorycontrollerApi.md#getAllMoviesUsingGET) | **GET** /repository/movies/all | getAllMovies
[**getAuditoriumUsingGET**](RepositorycontrollerApi.md#getAuditoriumUsingGET) | **GET** /repository/cinema/{cinemaId}/auditorium/{id} | getAuditorium
[**getAuditoriumsUsingGET**](RepositorycontrollerApi.md#getAuditoriumsUsingGET) | **GET** /repository/cinema/{cinemaId}/auditoriums | getAuditoriums
[**getCinemasUsingGET**](RepositorycontrollerApi.md#getCinemasUsingGET) | **GET** /repository/cinemas | getCinemas
[**getMovieByIdUsingGET**](RepositorycontrollerApi.md#getMovieByIdUsingGET) | **GET** /repository/movie/{id} | getMovieById
[**getMoviesByIdsUsingGET**](RepositorycontrollerApi.md#getMoviesByIdsUsingGET) | **GET** /repository/movie | getMoviesByIds
[**getSchedulesInCinemaUsingGET**](RepositorycontrollerApi.md#getSchedulesInCinemaUsingGET) | **GET** /repository/cinema/{cinemaId}/schedules | getSchedulesInCinema


<a name="addNewMovieUsingPOST"></a>
# **addNewMovieUsingPOST**
> Object addNewMovieUsingPOST(movie)

addNewMovie

### Example
```javascript
var CatbsRestApi = require('catbs_rest_api');

var apiInstance = new CatbsRestApi.RepositorycontrollerApi();

var movie = new CatbsRestApi.Movie(); // Movie | movie


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addNewMovieUsingPOST(movie, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **movie** | [**Movie**](Movie.md)| movie | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addNewScheduleUsingPOST"></a>
# **addNewScheduleUsingPOST**
> Object addNewScheduleUsingPOST(schedule, cinemaId)

addNewSchedule

### Example
```javascript
var CatbsRestApi = require('catbs_rest_api');

var apiInstance = new CatbsRestApi.RepositorycontrollerApi();

var schedule = new CatbsRestApi.Schedule(); // Schedule | schedule

var cinemaId = 789; // Number | cinemaId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addNewScheduleUsingPOST(schedule, cinemaId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **schedule** | [**Schedule**](Schedule.md)| schedule | 
 **cinemaId** | **Number**| cinemaId | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addNewScreeningUsingPOST"></a>
# **addNewScreeningUsingPOST**
> Object addNewScreeningUsingPOST(scheduleId, screening)

addNewScreening

### Example
```javascript
var CatbsRestApi = require('catbs_rest_api');

var apiInstance = new CatbsRestApi.RepositorycontrollerApi();

var scheduleId = 789; // Number | scheduleId

var screening = new CatbsRestApi.Screening(); // Screening | screening


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addNewScreeningUsingPOST(scheduleId, screening, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scheduleId** | **Number**| scheduleId | 
 **screening** | [**Screening**](Screening.md)| screening | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getActiveMoviesUsingGET"></a>
# **getActiveMoviesUsingGET**
> Object getActiveMoviesUsingGET()

getActiveMovies

### Example
```javascript
var CatbsRestApi = require('catbs_rest_api');

var apiInstance = new CatbsRestApi.RepositorycontrollerApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getActiveMoviesUsingGET(callback);
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

<a name="getAllMoviesUsingGET"></a>
# **getAllMoviesUsingGET**
> Object getAllMoviesUsingGET()

getAllMovies

### Example
```javascript
var CatbsRestApi = require('catbs_rest_api');

var apiInstance = new CatbsRestApi.RepositorycontrollerApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllMoviesUsingGET(callback);
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

<a name="getAuditoriumUsingGET"></a>
# **getAuditoriumUsingGET**
> Object getAuditoriumUsingGET(cinemaId, id)

getAuditorium

### Example
```javascript
var CatbsRestApi = require('catbs_rest_api');

var apiInstance = new CatbsRestApi.RepositorycontrollerApi();

var cinemaId = 789; // Number | cinemaId

var id = 789; // Number | id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAuditoriumUsingGET(cinemaId, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cinemaId** | **Number**| cinemaId | 
 **id** | **Number**| id | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="getAuditoriumsUsingGET"></a>
# **getAuditoriumsUsingGET**
> Object getAuditoriumsUsingGET(cinemaId)

getAuditoriums

### Example
```javascript
var CatbsRestApi = require('catbs_rest_api');

var apiInstance = new CatbsRestApi.RepositorycontrollerApi();

var cinemaId = 789; // Number | cinemaId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAuditoriumsUsingGET(cinemaId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cinemaId** | **Number**| cinemaId | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="getCinemasUsingGET"></a>
# **getCinemasUsingGET**
> Object getCinemasUsingGET()

getCinemas

### Example
```javascript
var CatbsRestApi = require('catbs_rest_api');

var apiInstance = new CatbsRestApi.RepositorycontrollerApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCinemasUsingGET(callback);
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

<a name="getMovieByIdUsingGET"></a>
# **getMovieByIdUsingGET**
> Object getMovieByIdUsingGET(id)

getMovieById

### Example
```javascript
var CatbsRestApi = require('catbs_rest_api');

var apiInstance = new CatbsRestApi.RepositorycontrollerApi();

var id = 789; // Number | id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getMovieByIdUsingGET(id, callback);
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

<a name="getMoviesByIdsUsingGET"></a>
# **getMoviesByIdsUsingGET**
> Object getMoviesByIdsUsingGET(id)

getMoviesByIds

### Example
```javascript
var CatbsRestApi = require('catbs_rest_api');

var apiInstance = new CatbsRestApi.RepositorycontrollerApi();

var id = [3.4]; // [Number] | id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getMoviesByIdsUsingGET(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**[Number]**](Number.md)| id | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="getSchedulesInCinemaUsingGET"></a>
# **getSchedulesInCinemaUsingGET**
> Object getSchedulesInCinemaUsingGET(cinemaId)

getSchedulesInCinema

### Example
```javascript
var CatbsRestApi = require('catbs_rest_api');

var apiInstance = new CatbsRestApi.RepositorycontrollerApi();

var cinemaId = 789; // Number | cinemaId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSchedulesInCinemaUsingGET(cinemaId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cinemaId** | **Number**| cinemaId | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

