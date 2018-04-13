//@flow
import { schema } from 'normalizr';

const mapPrediction = ({ place_id, description }) => ({
  id: place_id,
  description,
  key: place_id
});

export const predictionSchema = new schema('predictions', {}, {
  idAttribute: { placeId } => placeId,
  
});

// const throwOnError = (json) => {
//   if (json.status === 'OK' || json.status === 'ZERO_RESULTS'){
//     return json;
//   }
//   throw new Error({ status: json.status, message: json.error_message });
// };

const mapPredictions = ({ predictions }: Object) => ({
  predictions: predictions.map(mapPrediction),
  lastUpdated: Date.now()
});

const mapPlaceDetails = ({
  place_id,
  formatted_address,
  geometry
}: Object) => ({
  id: place_id,
  description: formatted_address,
  coordinates: {
    latitude: geometry.lat,
    longitude: geometry.lng
  }
});
