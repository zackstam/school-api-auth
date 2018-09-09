'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use('Route')

Route.get('/', ({ request }) => {
  return { greeting: 'Hello world in JSON' }
})

Route.group(() => {
  Route.get('students', 'StudentController.index').middleware(['auth:jwt'])
  Route.get('students/:id', 'StudentController.show').middleware(['auth:jwt'])
  Route.post('students', 'StudentController.store').middleware(['auth:jwt'])
  Route.put('students/:id', 'StudentController.update').middleware(['auth:jwt'])
  Route.delete('students/:id', 'StudentController.delete').middleware(['auth:jwt'])
}).prefix('api/v1')

// bisa disingkat menjadi seperti ini
// Route
//   .resource('students', 'StudentController').middleware(['auth:jwt'])
//   .apiOnly()

Route.group(() => {
  Route.post('login', 'AuthController.postLoginJwt').as('loginJwt')
}).prefix('api/auth')

