import * as React from 'react';
import {Text, Button} from 'react-native';
import BoxCenter from '../components/box-center';
import {Bookmark} from '../components/icons';

function SearchView({navigation}) {
  return (
    <BoxCenter>
      <Text>Sarch!</Text>
      <Button
        title="Go to details"
        onPress={() => navigation.navigate('Detail')}
      />
      <Bookmark width={50} height={50} stroke="rebeccapurple" />
    </BoxCenter>
  );
}

export default SearchView;
