import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import { check, PERMISSIONS, request, RESULTS } from 'react-native-permissions';

const App = () => {
  const [location, setLocation] = useState({ latitude: 0, longitude: 0 });

  const getLocation = () => {
    check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
      .then((result) => {
        switch (result) {
          case RESULTS.UNAVAILABLE:
            console.log('Feature is not available on this device.');
            break;
          case RESULTS.DENIED:
            request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION).then((result) => {
              if (result === RESULTS.GRANTED) {
                getCurrentLocation();
              }
            });
            break;
          case RESULTS.GRANTED:
            getCurrentLocation();
            break;
          case RESULTS.BLOCKED:
            console.log('Permission is blocked and not requestable.');
            break;
        }
      });
  };

  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => {
        console.log(error);
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <View>
      <Text>Latitude: {location.latitude}</Text>
      <Text>Longitude: {location.longitude}</Text>
      <Button title="Get Location" onPress={getCurrentLocation} />
    </View>
  );
};