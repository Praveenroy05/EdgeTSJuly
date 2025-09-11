// API - Application Programming Interface

// Web application

// Frontend - JS/TS, html/css, vue, Ajax
// Backend  - Java/Python/Go/Php/.Net 
// Database - SQL, MySQL, MongoDB, PostgreS

/*

Common HTTP methods:

1. GET - Read only - 200
Used to retrieve the data from a specified resource.

2. POST - Creating on the resouce - 201
Used to submit data to be processed to a specific resource.

3. PUT - Updated or Create
Used to replace an existing resource BUT if the record itself is not available then it will create a new record on the resouce

4. DELETE - Deleting the record
Used to request the removal of a resource.

5. PATCH - Paticial modification
Used to apply partial modification to a resource.

*/


// Request Format
    // URL - Uniform Resource Locator - https://rahulshettyacademy.com/api/ecom/auth/login
    // HTTP Method - GET, POST, PUT, DELETE - POST
    // Headers - key-value {key: value}
    // Body or Payload - JSON/XML, form data  - {"userEmail":"testnHNk@gmail.com","userPassword":"Testing@1234"}

// Response Format
    // Status Code - 200, 201, 400, 401, 500 - 200 OK
    // Headers - {key: value}
    // Response body - JSON
/*
    {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmQ0Njc1NWFlMmFmZDRjMGI2Mjg2YmMiLCJ1c2VyRW1haWwiOiJ0ZXN0bkhOa0BnbWFpbC5jb20iLCJ1c2VyTW9iaWxlIjoxMjM0NTY3ODkwLCJ1c2VyUm9sZSI6ImN1c3RvbWVyIiwiaWF0IjoxNzU2NDc1MjE1LCJleHAiOjE3ODgwMzI4MTV9.pSFgz0RqdoLpdjuilbrRUKLA9o9007tRwjlDQSiLZ0g",
    "userId": "66d46755ae2afd4c0b6286bc",
    "message": "Login Successfully"
    }
*/