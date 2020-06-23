import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _ca170412 = () => interopDefault(import('..\\pages\\catering\\index.vue' /* webpackChunkName: "pages_catering_index" */))
const _4679a6ee = () => interopDefault(import('..\\pages\\gallerij\\index.vue' /* webpackChunkName: "pages_gallerij_index" */))
const _31744212 = () => interopDefault(import('..\\pages\\gerechten\\index.vue' /* webpackChunkName: "pages_gerechten_index" */))
const _ee808f0a = () => interopDefault(import('..\\pages\\over-ons\\index.vue' /* webpackChunkName: "pages_over-ons_index" */))
const _ee3f1392 = () => interopDefault(import('..\\pages\\zakelijk\\index.vue' /* webpackChunkName: "pages_zakelijk_index" */))
const _f37082f6 = () => interopDefault(import('..\\pages\\pakket\\_title.vue' /* webpackChunkName: "pages_pakket__title" */))
const _08609abc = () => interopDefault(import('..\\pages\\thema\\_title.vue' /* webpackChunkName: "pages_thema__title" */))
const _53470854 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

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
    component: _ca170412,
    name: "catering"
  }, {
    path: "/gallerij",
    component: _4679a6ee,
    name: "gallerij"
  }, {
    path: "/gerechten",
    component: _31744212,
    name: "gerechten"
  }, {
    path: "/over-ons",
    component: _ee808f0a,
    name: "over-ons"
  }, {
    path: "/zakelijk",
    component: _ee3f1392,
    name: "zakelijk"
  }, {
    path: "/pakket/:title?",
    component: _f37082f6,
    name: "pakket-title"
  }, {
    path: "/thema/:title?",
    component: _08609abc,
    name: "thema-title"
  }, {
    path: "/",
    component: _53470854,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
