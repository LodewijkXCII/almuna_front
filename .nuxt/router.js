import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _824f6904 = () => interopDefault(import('..\\pages\\catering.vue' /* webpackChunkName: "pages_catering" */))
const _b6cc84ba = () => interopDefault(import('..\\pages\\gallery.vue' /* webpackChunkName: "pages_gallery" */))
const _6cf9ab14 = () => interopDefault(import('..\\pages\\gallery_single.vue' /* webpackChunkName: "pages_gallery_single" */))
const _17dced3a = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/catering",
    component: _824f6904,
    name: "catering"
  }, {
    path: "/gallery",
    component: _b6cc84ba,
    name: "gallery"
  }, {
    path: "/gallery_single",
    component: _6cf9ab14,
    name: "gallery_single"
  }, {
    path: "/",
    component: _17dced3a,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
