//@flow
import fetchMock from 'fetch-mock';

import mockStore from 'test/setupStoreMock';
import actions from 'ubex/actions';

const {
  fetchPredictions,
  requestPredictions,
  receivePredictions,
  setPositionById,
  requestPlaceDetails,
  receivePlaceDetails,
  changePosition,
} = actions;

describe('ubex async actions', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('dispatches receivePredictions when fetching predictions succeeds', () => {
    const placeDesc = 'desc';
    const predictions = [
      { place_id: '1', description: 'desc' },
      { place_id: '2', description: 'desc1' },
    ];
    fetchMock.getOnce(
      'begin:https://maps.googleapis.com/maps/api/place/autocomplete/json?input=',
      { body: { predictions }, headers: { 'content-type': 'application/json' } }
    );

    const expectedActions = [
      requestPredictions(placeDesc),
      receivePredictions({ predictions }),
    ];
    const store = mockStore({ ubex: { predictions: [] } });

    return store.dispatch(fetchPredictions(placeDesc)).then(() => (
      expect(store.getActions()).toEqual(expectedActions)
    ));
  });

  it('dispatches changePosition when fetching place details succeeds', () => {
    const placeId = 'id';
    const description = 'Buenos Aires, CABA, Argentina';
    const location = {
      lat: 36.78825,
      lng: -121.4324,
    };
    const details = {
      result: {
        place_id: placeId,
        formatted_address: description,
        geometry: { location }
      }
    };
    fetchMock.getOnce(
      'begin:https://maps.googleapis.com/maps/api/place/details/json?placeid=',
      { body: details, headers: { 'content-type': 'application/json' } }
    );
    const coordinates = {
      latitude: location.lat,
      longitude: location.lng,
    };
    const expectedActions = [
      requestPlaceDetails(placeId),
      receivePlaceDetails(details),
      changePosition(coordinates),
    ];
    const store = mockStore({
      ubex: {
        locations: {
          byIds: {
            [placeId]: { coordinates, description },
          },
          allIds: [placeId]
        }
      }
    });

    return store.dispatch(setPositionById(placeId)).then(() => (
      expect(store.getActions()).toEqual(expectedActions)
    ));
  });
});
