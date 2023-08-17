import Realm from 'realm';

class TestRealmAddress extends Realm.Object<TestRealmAddress, 'line1'> {
  static schema: Realm.ObjectSchema = {
    name: 'TestRealmAddress',
    properties: {
      line1: 'string',
      line2: 'string?',
      city: 'string?',
      postcode: 'string?',
    },
  };
  public line1!: Realm.Types.String;
  public line2!: Realm.Types.String | null;
  public city!: Realm.Types.String | null;
  public postcode!: Realm.Types.String | null;
}

export const realmSchemaWithoutSubclass: Realm.ConfigurationWithoutSync['schema'] =
  [TestRealmAddress];
