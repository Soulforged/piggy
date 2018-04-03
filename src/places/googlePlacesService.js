//@flow
import Config from 'react-native-config';
import ConfigService from 'src/config';

const { placesApi } = ConfigService;

/* eslint-disable camelcase */
const mapPrediction = ({ place_id, description }) => ({
  id: place_id,
  description,
  key: place_id
});

const mapPredictions = (json: Object) => ({
  predictions: json.predictions.map(prediction),
  lastUpdated: Date.now()
});

const mapPlaceDetails = ({ place_id, formatted_address, geometry }: Object) => ({
  id: place_id,
  description: formatted_address,
  coordinates: {
    latitude: geometry.lat,
    longitude: geometry.lng
  }
});
/* eslint-disable */

export default () => ({
  predictions: (desc: string) => (
    fetch(`${placesApi}/autocomplete/json?input=${desc}&types=geocode&key=${Config.GOOGLE_MAPS_API_KEY}`)
      .then(response => response.json(), error => error.message)
      .then(mapPredictions)
  ),
  place: (id) => (
    fetch(`${placesApi}/details/json?placeid=${id}&key=${Config.GOOGLE_MAPS_API_KEY}`)
      .then(response => response.json(), error => error.message)
      .then(mapPlaceDetails)
  )
});
