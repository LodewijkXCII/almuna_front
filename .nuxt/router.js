import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7973bf44 = () => interopDefault(import('..\\pages\\catering\\index.vue' /* webpackChunkName: "pages_catering_index" */))
const _24f8e83b = () => interopDefault(import('..\\pages\\gallerij\\index.vue' /* webpackChunkName: "pages_gallerij_index" */))
const _4ea2716c = () => interopDefault(import('..\\pages\\gerechten\\index.vue' /* webpackChunkName: "pages_gerechten_index" */))
const _673ef9c8 = () => interopDefault(import('..\\pages\\over-ons\\index.vue' /* webpackChunkName: "pages_over-ons_index" */))
const _675fb784 = () => interopDefault(import('..\\pages\\zakelijk\\index.vue' /* webpackChunkName: "pages_zakelijk_index" */))
const _43de73c0 = () => interopDefault(import('..\\pages\\gallerij\\pakket\\_title.vue' /* webpackChunkName: "pages_gallerij_pakket__title" */))
const _4c3fea07 = () => interopDefault(import('..\\pages\\gallerij\\thema\\_title.vue' /* webpackChunkName: "pages_gallerij_thema__title" */))
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
    component: _7973bf44,
    name: "catering"
  }, {
    path: "/gallerij",
    component: _24f8e83b,
    name: "gallerij"
  }, {
    path: "/gerechten",
    component: _4ea2716c,
    name: "gerechten"
  }, {
    path: "/over-ons",
    component: _673ef9c8,
    name: "over-ons"
  }, {
    path: "/zakelijk",
    component: _675fb784,
    name: "zakelijk"
  }, {
    path: "/gallerij/pakket/:title?",
    component: _43de73c0,
    name: "gallerij-pakket-title"
  }, {
    path: "/gallerij/thema/:title?",
    component: _4c3fea07,
    name: "gallerij-thema-title"
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
