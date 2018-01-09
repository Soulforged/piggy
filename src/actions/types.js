//@flow

import type { Region } from 'src/Types';

export type ChangePosition = {
  position: Region
};

export type SetHasError = {
  hasError: boolean
};

//FIXME use Symbols maybe
export const LOGIN = 'LOGIN';
export const CHANGE_POSITION = 'CHANGE_POSITION';
export const SET_HAS_ERROR = 'SET_HAS_ERROR';
