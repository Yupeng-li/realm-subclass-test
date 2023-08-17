import {BaseConfiguration} from 'realm';

export const openRealm = async (schema: BaseConfiguration['schema']) => {
  return Realm.open({
    schema,
    schemaVersion: 1,
  });
};
