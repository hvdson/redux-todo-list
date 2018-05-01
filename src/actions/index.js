// index.js
// Actions are payloads of info that send data from app -> store
// the ONLY source of info for the store

// Actions are just objects with a 'type' property

// These are Action Creators : functions that create actions 

export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export const addTodo = (text) => {
  return {type: ADD_TODO, text}
}

export const toggleTodo = (index) => {
  return { type: TOGGLE_TODO, index }
}

export const setVisibilityFilter = (filter) => {
  return { type: SET_VISIBILITY_FILTER, filter}
}