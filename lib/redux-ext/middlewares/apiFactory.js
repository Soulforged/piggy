//@flow
import { normalize } from 'normalizr';
import { camelizeKeys } from 'humps';

const checkStatus = resp => resp.ok ? resp.json() : Promise.reject(resp.message);

const callApi = (endpoint, { body, schema }) => {
  const options = {
    credentials: 'include',
    method: body ? 'POST' : 'GET'
  };
  return fetch(endpoint, options)
    .then(checkStatus)
    .then(camelizeKeys)
    .then(json => schema ? normalize(json, schema) : json);
};

export const CALL_API = 'Call API';

export default uri => store => next => action => {
  const callAPI = action[CALL_API];
  if (typeof callAPI === 'undefined') {
    return next(action);
  }

  let { endpoint } = callAPI;
  const { schema, types, body } = callAPI;

  if (typeof endpoint === 'function') {
    endpoint = endpoint(store.getState());
  }

  if (typeof endpoint !== 'string') {
    throw new Error('Specify a string endpoint URL.');
  }

  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error('Expected an array of three action types.');
  }

  if (!types.every(type => typeof type === 'string')) {
    throw new Error('Expected action types to be strings.');
  }

  const actionWith = data => {
    const finalAction = { ...action, ...data };
    delete finalAction[CALL_API];
    return finalAction;
  }

  const [ requestType, successType, failureType ] = types;
  next(actionWith({ type: requestType }));

  return callApi(uri + endpoint, { body, schema }).then(
    response => next(actionWith({
      response,
      type: successType
    })),
    error => next(actionWith({
      type: failureType,
      error: error.message || 'Something bad happened'
    }))
  );
}
