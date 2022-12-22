// app
export const SIDEBAR_COLLAPSED_TOGGLE = 'SIDEBAR_COLLAPSED_TOGGLE'
export type SIDEBAR_COLLAPSED_TOGGLE_TYPE = typeof SIDEBAR_COLLAPSED_TOGGLE
export const SHOW_RIGHT_PANEL_TOGGLE = 'SHOW_RIGHT_PANEL'
export type SHOW_RIGHT_PANEL_TOGGLE_TYPE = typeof SHOW_RIGHT_PANEL_TOGGLE
export const TOGGLE_LANG = 'TOGGLE_LANG'
export type TOGGLE_LANG_TYPE = typeof TOGGLE_LANG
export const APP_ENTER_LOADING = 'APP_ENTER_LOADING'
export type APP_ENTER_LOADING_TYPE = typeof APP_ENTER_LOADING
export const INTL_LOADING_TOGGLE = 'INTL_LOADING_TOGGLE'
export type INTL_LOADING_TOGGLE_TYPE = typeof INTL_LOADING_TOGGLE

// settings
export const SHOW_LOGO_TOGGLE = 'SHOW_LOGO_TOGGLE'
export type SHOW_LOGO_TOGGLE_TYPE = typeof SHOW_LOGO_TOGGLE
export const FIX_HEADER_TOGGLE = 'FIX_HEADER_TOGGLE'
export type FIX_HEADER_TOGGLE_TYPE = typeof FIX_HEADER_TOGGLE
export const OPEN_TAGS_VIEW = 'OPEN_TAGS_VIEW'
export type OPEN_TAGS_VIEW_TYPE = typeof OPEN_TAGS_VIEW
export const SET_SHOW_SIDEBAR = 'SET_SHOW_SIDEBAR'
export type SET_SHOW_SIDEBAR_TYPE = typeof SET_SHOW_SIDEBAR
export const BREADCRUMB_TOGGLE = 'BREADCRUMB_TOGGLE'
export type BREADCRUMB_TOGGLE_TYPE = typeof BREADCRUMB_TOGGLE
export const FIX_SIDEBAR_TOGGLE = 'FIX_SIDEBAR_TOGGLE'
export type FIX_SIDEBAR_TOGGLE_TYPE = typeof FIX_SIDEBAR_TOGGLE
export const COLLAPSED_MENU_BTN_POSITION = 'COLLAPSED_MENU_BTN_POSITION'
export type COLLAPSED_MENU_BTN_POSITION_TYPE = typeof COLLAPSED_MENU_BTN_POSITION
export const WEEK_MODE_TOGGLE = 'WEEK_MODE_TOGGLE'
export type WEEK_MODE_TOGGLE_TYPE = typeof WEEK_MODE_TOGGLE
export const GRAY_MODE_TOGGLE = 'GRAY_MODE_TOGGLE'
export type GRAY_MODE_TOGGLE_TYPE = typeof GRAY_MODE_TOGGLE

// user
export const SET_TOKEN = 'SET_TOKEN'
export type SET_TOKEN_TYPE = typeof SET_TOKEN
export const RESET_USER = 'RESET_USER'
export type RESET_USER_TYPE = typeof RESET_USER
export const GET_USERINFO = 'GET_USERINFO'
export type GET_USERINFO_TYPE = typeof GET_USERINFO
export const SET_USERINFO = 'SET_USERINFO'
export type SET_USERINFO_TYPE = typeof SET_USERINFO
export const SET_ROUTES = 'SET_ROUTES'
export type SET_ROUTES_TYPE = typeof SET_ROUTES

// auth
export const AUTH_LOGIN = 'AUTH_LOGIN'
export type AUTH_LOGIN_TYPE = typeof AUTH_LOGIN
export const AUTH_LOGOUT = 'AUTH_LOGOUT'
export type AUTH_LOGOUT_TYPE = typeof AUTH_LOGOUT

// tagsView
export const ADD_TAGS_VIEW = 'TAGS_VIEW'
export type ADD_TAGS_VIEW_TYPE = typeof ADD_TAGS_VIEW
export const REMOVE_TAGS_VIEW = 'REMOVE_TAGS_VIEW'
export type REMOVE_TAGS_VIEW_TYPE = typeof REMOVE_TAGS_VIEW
export const CLOSE_ALL_TAGS_VIEW = 'CLOSE_ALL_TAGS_VIEW'
export type CLOSE_ALL_TAGS_VIEW_TYPE = typeof CLOSE_ALL_TAGS_VIEW
export const CLOSE_OTHERS_TAG_VIEW = 'CLOSE_OTHERS_TAG_VIEW'
export type CLOSE_OTHERS_TAG_VIEW_TYPE = typeof CLOSE_OTHERS_TAG_VIEW

export enum Types {
  // app
  APP_SIDEBAR_COLLAPSED_TOGGLE = 'App_SIDEBAR_COLLAPSED_TOGGLE',
  APP_SHOW_RIGHT_PANEL_TOGGLE = 'APP_SHOW_RIGHT_PANEL_TOGGLE',
  APP_TOGGLE_LANG = 'APP_TOGGLE_LANG',
  APP_ENTER_LOADING = 'APP_ENTER_LOADING',
  APP_INTL_LOADING_TOGGLE = 'APP_INTL_LOADING_TOGGLE',

  // settings
  SETTINGS_SHOW_LOGO_TOGGLE = 'SETTINGS_SHOW_LOGO_TOGGLE',
  SETTINGS_FIX_HEADER_TOGGLE = 'SETTINGS_FIX_HEADER_TOGGLE',
  SETTINGS_OPEN_TAGS_VIEW = 'SETTINGS_OPEN_TAGS_VIEW',
  SETTINGS_SET_SHOW_SIDEBAR = 'SETTINGS_SET_SHOW_SIDEBAR',
  SETTINGS_FIX_SIDEBAR_TOGGLE = 'SETTINGS_FIX_SIDEBAR_TOGGLE',
  SETTINGS_COLLAPSED_MENU_BTN_POSITION_TYPE = 'SETTINGS_COLLAPSED_MENU_BTN_POSITION_TYPE',
  SETTINGS_WEEK_MODE_TOGGLE = 'SETTINGS_WEEK_MODE_TOGGLE',
  SETTINGS_GRAY_MODE_TOGGLE = 'SETTINGS_GRAY_MODE_TOGGLE',

  // user
  USER_SET_TOKEN = 'USER_SET_TOKEN',
  USER_RESET_USER = 'USER_RESET_USER',
  USER_GET_USERINFO = 'USER_GET_USERINFO',
  USER_SET_USERINFO = 'USER_SET_USERINFO',
  USER_SET_ROUTES = 'USER_SET_ROUTES',

  // auth
  AUTH_LOGIN = 'AUTH_LOGIN',
  AUTH_LOGOUT = 'AUTH_LOGOUT',

  // tagsView
  TAG_VIEWS_ADD_TAGS_VIEW = 'TAG_VIEWS_ADD_TAGS_VIEW',
  TAG_VIEWS_REMOVE_TAGS_VIEW = 'TAG_VIEWS_REMOVE_TAGS_VIEW',
  TAG_VIEWS_CLOSE_ALL_TAGS_VIEW = 'TAG_VIEWS_CLOSE_ALL_TAGS_VIEW',
  TAG_VIEWS_CLOSE_OTHERS_TAG_VIEW = 'TAG_VIEWS_CLOSE_OTHERS_TAG_VIEW',
}