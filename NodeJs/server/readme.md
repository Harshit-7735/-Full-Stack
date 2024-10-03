# API's
## Auth API endpoints
1. `POST` `'/api/auth/login'`
   - email
   - password

2. `POST` `'/api/auth/signup'`
  - email
  - password
  - user name  

3. `GET` `'/api/auth/forget-password'`
  - email(query parameter)

4. `POST` `'/api/auth/forget-password' !!(protected)`
  -password  


## application  API endpoints

1. `GET` `'/api/todos' !!(protected)`
2. `POST` `'/api/todos' !!(protected)`
  -title
  -complete
  -id
3. `DELETE` `'/api/todos/:id' !!(protected) `

4. `PUT` `'/api/todos/:id' !!(protected)`
    -title
    -complete



## application endpoints
1. `GET` `'/app/login'`
-returns the login page
2. `GET` `'/app/signup'`
-returns the signup page
3. `GET` `'/app/forget-password'`
-returns the forget password request page
4. `GET` `'/app/reset-password'`
-returns the reset password page
5. `GET` `'/app/todos' !!(protected)`
-returns the todo page

## Schema
1. user.json
-email
-password
-user name
-id

2. todos.json
-title
-complete
-id
-user