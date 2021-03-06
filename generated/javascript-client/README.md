# catbs_rest_api

CatbsRestApi - JavaScript client for catbs_rest_api
REST API DESCRIPTION.
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: API TOS
- Package version: API TOS
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen
For more information, please visit [https://github.com/WSudul](https://github.com/WSudul)

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install catbs_rest_api --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your catbs_rest_api from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('catbs_rest_api')` in javascript files from the directory you ran the last 
command above from.

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/YOUR_USERNAME/catbs_rest_api
then install it via:

```shell
    npm install YOUR_USERNAME/catbs_rest_api --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var CatbsRestApi = require('catbs_rest_api');

var api = new CatbsRestApi.AccesscontrollerApi()

var clientRegistration = new CatbsRestApi.ClientRegistration(); // {ClientRegistration} clientRegistration


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.addNewUserUsingPOST(clientRegistration, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://localhost:8080*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*CatbsRestApi.AccesscontrollerApi* | [**addNewUserUsingPOST**](docs/AccesscontrollerApi.md#addNewUserUsingPOST) | **POST** /access/register | addNewUser
*CatbsRestApi.AccesscontrollerApi* | [**changeCredentialsUsingPUT**](docs/AccesscontrollerApi.md#changeCredentialsUsingPUT) | **PUT** /access/credentials | ChangeCredentials
*CatbsRestApi.AccesscontrollerApi* | [**getRegistrationPolicyUsingGET**](docs/AccesscontrollerApi.md#getRegistrationPolicyUsingGET) | **GET** /access/register | GetRegistrationPolicy
*CatbsRestApi.AccesscontrollerApi* | [**validateCredentialsUsingGET**](docs/AccesscontrollerApi.md#validateCredentialsUsingGET) | **GET** /access/credentials | ValidateCredentials
*CatbsRestApi.BookingcontrollerApi* | [**cancelReservationUsingPATCH**](docs/BookingcontrollerApi.md#cancelReservationUsingPATCH) | **PATCH** /bookings/reservation/{id}/cancel | cancelReservation
*CatbsRestApi.BookingcontrollerApi* | [**createReservationUsingPOST**](docs/BookingcontrollerApi.md#createReservationUsingPOST) | **POST** /bookings/reservation/create | createReservation
*CatbsRestApi.BookingcontrollerApi* | [**getMyBookingsUsingGET**](docs/BookingcontrollerApi.md#getMyBookingsUsingGET) | **GET** /bookings/{clientId}/my-bookings | getMyBookings
*CatbsRestApi.BookingcontrollerApi* | [**getScreeningReservationsUsingGET**](docs/BookingcontrollerApi.md#getScreeningReservationsUsingGET) | **GET** /bookings/screening/{id} | getScreeningReservations
*CatbsRestApi.BookingcontrollerApi* | [**getUserBookingsUsingGET**](docs/BookingcontrollerApi.md#getUserBookingsUsingGET) | **GET** /bookings/user/{clientId} | getUserBookings
*CatbsRestApi.BookingcontrollerApi* | [**updateReservationUsingPATCH**](docs/BookingcontrollerApi.md#updateReservationUsingPATCH) | **PATCH** /bookings/reservation/{id}/paid | updateReservation
*CatbsRestApi.RepositorycontrollerApi* | [**addNewMovieUsingPOST**](docs/RepositorycontrollerApi.md#addNewMovieUsingPOST) | **POST** /repository/movie | addNewMovie
*CatbsRestApi.RepositorycontrollerApi* | [**addNewScheduleUsingPOST**](docs/RepositorycontrollerApi.md#addNewScheduleUsingPOST) | **POST** /repository/cinema/{cinemaId}/schedule | addNewSchedule
*CatbsRestApi.RepositorycontrollerApi* | [**addNewScreeningUsingPOST**](docs/RepositorycontrollerApi.md#addNewScreeningUsingPOST) | **POST** /repository/schedule/{scheduleId}/screening | addNewScreening
*CatbsRestApi.RepositorycontrollerApi* | [**getActiveMoviesUsingGET**](docs/RepositorycontrollerApi.md#getActiveMoviesUsingGET) | **GET** /repository/movies/active | getActiveMovies
*CatbsRestApi.RepositorycontrollerApi* | [**getAllMoviesUsingGET**](docs/RepositorycontrollerApi.md#getAllMoviesUsingGET) | **GET** /repository/movies/all | getAllMovies
*CatbsRestApi.RepositorycontrollerApi* | [**getAuditoriumUsingGET**](docs/RepositorycontrollerApi.md#getAuditoriumUsingGET) | **GET** /repository/cinema/{cinemaId}/auditorium/{id} | getAuditorium
*CatbsRestApi.RepositorycontrollerApi* | [**getAuditoriumsUsingGET**](docs/RepositorycontrollerApi.md#getAuditoriumsUsingGET) | **GET** /repository/cinema/{cinemaId}/auditoriums | getAuditoriums
*CatbsRestApi.RepositorycontrollerApi* | [**getCinemasUsingGET**](docs/RepositorycontrollerApi.md#getCinemasUsingGET) | **GET** /repository/cinemas | getCinemas
*CatbsRestApi.RepositorycontrollerApi* | [**getMovieByIdUsingGET**](docs/RepositorycontrollerApi.md#getMovieByIdUsingGET) | **GET** /repository/movie/{id} | getMovieById
*CatbsRestApi.RepositorycontrollerApi* | [**getMoviesByIdsUsingGET**](docs/RepositorycontrollerApi.md#getMoviesByIdsUsingGET) | **GET** /repository/movie | getMoviesByIds
*CatbsRestApi.RepositorycontrollerApi* | [**getSchedulesInCinemaUsingGET**](docs/RepositorycontrollerApi.md#getSchedulesInCinemaUsingGET) | **GET** /repository/cinema/{cinemaId}/schedules | getSchedulesInCinema
*CatbsRestApi.RootcontrollerApi* | [**sampleAdminPageUsingGET**](docs/RootcontrollerApi.md#sampleAdminPageUsingGET) | **GET** /admin/x | sampleAdminPage
*CatbsRestApi.RootcontrollerApi* | [**sampleErrorPageUsingGET**](docs/RootcontrollerApi.md#sampleErrorPageUsingGET) | **GET** /my-error-page | sampleErrorPage
*CatbsRestApi.UsercontrollerApi* | [**getAllClientsUsingGET**](docs/UsercontrollerApi.md#getAllClientsUsingGET) | **GET** /user/clients/all | getAllClients
*CatbsRestApi.UsercontrollerApi* | [**getAllClientsUsingGET1**](docs/UsercontrollerApi.md#getAllClientsUsingGET1) | **GET** /user/clients | getAllClients
*CatbsRestApi.UsercontrollerApi* | [**getAllEmployeesUsingGET**](docs/UsercontrollerApi.md#getAllEmployeesUsingGET) | **GET** /user/employees/all | getAllEmployees
*CatbsRestApi.UsercontrollerApi* | [**getAllEmployeesUsingGET1**](docs/UsercontrollerApi.md#getAllEmployeesUsingGET1) | **GET** /user/employees | getAllEmployees
*CatbsRestApi.UsercontrollerApi* | [**getEmployeeByUserNameUsingGET**](docs/UsercontrollerApi.md#getEmployeeByUserNameUsingGET) | **GET** /user/employee/{login} | getEmployeeByUserName
*CatbsRestApi.UsercontrollerApi* | [**getUserByUserNameUsingGET**](docs/UsercontrollerApi.md#getUserByUserNameUsingGET) | **GET** /user/client/{login} | getUserByUserName
*CatbsRestApi.UsercontrollerApi* | [**updateClientUsingPATCH**](docs/UsercontrollerApi.md#updateClientUsingPATCH) | **PATCH** /user/client/{id}/update | updateClient
*CatbsRestApi.UsercontrollerApi* | [**updateEmployeeUsingPATCH**](docs/UsercontrollerApi.md#updateEmployeeUsingPATCH) | **PATCH** /user/employee/{id}/update | updateEmployee


## Documentation for Models

 - [CatbsRestApi.Client](docs/Client.md)
 - [CatbsRestApi.ClientLoginData](docs/ClientLoginData.md)
 - [CatbsRestApi.ClientRegistration](docs/ClientRegistration.md)
 - [CatbsRestApi.Employee](docs/Employee.md)
 - [CatbsRestApi.Genre](docs/Genre.md)
 - [CatbsRestApi.Movie](docs/Movie.md)
 - [CatbsRestApi.OrderType](docs/OrderType.md)
 - [CatbsRestApi.Price](docs/Price.md)
 - [CatbsRestApi.Reservation](docs/Reservation.md)
 - [CatbsRestApi.Schedule](docs/Schedule.md)
 - [CatbsRestApi.Screening](docs/Screening.md)
 - [CatbsRestApi.SeatOrder](docs/SeatOrder.md)
 - [CatbsRestApi.SeatOrderKey](docs/SeatOrderKey.md)
 - [CatbsRestApi.Timestamp](docs/Timestamp.md)


## Documentation for Authorization

 All endpoints do not require authorization.

