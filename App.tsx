/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Alert, Button, SafeAreaView, StatusBar, Text, View} from 'react-native';
import {BaseConfiguration} from 'realm';
import {openRealm} from './realm/openRealm';
import {realmSchemaWithoutSubclass} from './realm/realmSchemaWithoutSubclass';
import {realmSchemaWithSubclass} from './realm/realmSchemaWithSubclass';

const openRealmAndAlert = async (schema: BaseConfiguration['schema']) => {
  try {
    const realm = await openRealm(schema);
    Alert.alert('Successfully opened realm');
    realm.close();
  } catch (error) {
    Alert.alert('Failed to open/close realm', (error as Error).message);
  }
};

function App() {
  return (
    <SafeAreaView>
      <StatusBar barStyle={'light-content'} />
      <View
        style={{
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 30, margin: 20}}>Realm subclass test</Text>
        <Button
          title={'Open realm NOT using subclass'}
          onPress={async () => {
            await openRealmAndAlert(realmSchemaWithoutSubclass);
          }}
        />
        <Button
          title={'Open realm using subclass'}
          onPress={async () => {
            await openRealmAndAlert(realmSchemaWithSubclass);
          }}
        />
      </View>
    </SafeAreaView>
  );
}

export default App;
