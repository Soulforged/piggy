//@flow
import configureStore from 'redux-mock-store';

const middlewares = []; // you can mock any middlewares here if necessary
const mockStore = configureStore(middlewares);

export default mockStore;
