import * as React from 'react';
import {View, Text, Button} from 'react-native';

function SearchView({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Sarch!</Text>
      <Button
        title="Go to details"
        onPress={() => navigation.navigate('Detail')}
      />
    </View>
  );
}

export default SearchView;
