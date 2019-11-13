import {ADD_FEATURE, DELETE_FEATURE} from './actions';

export const addFeature = (feature) => {
  return {
    type: ADD_FEATURE,
    payload: feature
  }
}

export const deleteFeature = (id) => {
  return {
    type: DELETE_FEATURE,
    payload: id
  }
}