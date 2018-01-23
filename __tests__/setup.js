jest.mock('NativeModules', () => (
  {
    UIManager: {
      AIRMapLite: {},
      AIRMap: {},
    },
    AIRMapLite: {},
    AIRMap: {},
  }
));

jest.mock('react-native-maps', () => {
  const React = require.requireActual('react');
  const MapView = require.requireActual('react-native-maps');

  const MockCallout = props => <MapView.Callout {...props} />;
  const MockMarker = props => <MapView.Marker {...props} />;
  const MockMapView = props => <MapView {...props} />;

  MockCallout.propTypes = MapView.Callout.propTypes;
  MockMarker.propTypes = MapView.Marker.propTypes;
  MockMapView.propTypes = MapView.propTypes;
  MockMapView.Marker = MockMarker;
  MockMapView.Callout = MockCallout;
  return MockMapView;
});

jest.mock('Linking', () => {
  const getInitialURL = jest.fn();
  getInitialURL.mockReturnValueOnce({ then: jest.fn() });

  return {
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    openURL: jest.fn(),
    canOpenURL: jest.fn(),
    getInitialURL
  };
});

jest.mock('WebView', () => 'WebView');

jest.mock('DatePickerIOS', () => 'DatePickerIOS');

Date.now = jest.fn(() => 1482363367071);

// Globals

const mockGeolocation = {
  getCurrentPosition: jest.fn(),
  watchPosition: jest.fn()
};

global.navigator.geolocation = mockGeolocation;
