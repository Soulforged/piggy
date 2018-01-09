//@flow

import type { Region } from 'src/Types';
import { LOGIN, CHANGE_POSITION, SET_HAS_ERROR } from './types';

export const login = () => ({ type: LOGIN });
export const changePosition = (position: Region) => ({ type: CHANGE_POSITION, position });
export const setHasError = (hasError: boolean) => ({ type: SET_HAS_ERROR, hasError });
