import { createRouter } from "@nanostores/router"

export const $router = createRouter({
    home: '/',
    login: '/auth/login',
}, { search: true })

// openPage($router, 'home')
// $router.open('/')

// check
// not working when there's a preventDefault
