
import { combineReducers, Reducer } from 'redux';
import { jsonformsReducer, JsonFormsState } from '@jsonforms/core';
import { angularMaterialRenderers } from './json-form-angular';


export const rootReducer: Reducer<JsonFormsState> = combineReducers({
  jsonforms: jsonformsReducer(),
});

export const initialState = {
  jsonforms: {
    renderers: angularMaterialRenderers
  }
};
