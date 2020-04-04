import * as React from 'react';
import {Text, Button} from 'react-native';
import BoxCenter from '../components/box-center';

function SearchView({navigation}) {
  return (
    <BoxCenter>
      <Text>Sarch!</Text>
      <Button
        title="Go to details"
        onPress={() => navigation.navigate('Detail')}
      />
    </BoxCenter>
  );
}

export default SearchView;
