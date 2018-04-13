//@flow
import Config from 'react-native-config';

export const predictions = (desc: string) => (
    `/autocomplete/json?input=${desc}&types=geocode&key=${Config.GOOGLE_MAPS_API_KEY}`
);

export const place = (id: string) => (
    `/details/json?placeid=${id}&key=${Config.GOOGLE_MAPS_API_KEY}`
);
