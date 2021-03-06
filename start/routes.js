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
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')
Route.get('/auth/:provider', 'AuthController.redirectToProvider').as(
  'social.login'
)
Route.get(
  '/authenticated/:provider',
  'AuthController.handleProviderCallback'
).as('social.login.callback')
Route.get('/logout', 'AuthController.logout').as('logout')
