import { Action } from 'redux';

export interface IPayloadAction extends Action {
  payload?: any;
}

export const ACTION_PROVIDERS = [];

export {};
