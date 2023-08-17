import Realm from 'realm';

abstract class MyBaseRealmObject<
  T = unknown,
  RequiredProperties extends keyof OmittedRealmTypes<T> = never,
> extends Realm.Object<T, RequiredProperties> {
  abstract myOwnFunction(): string; // A function applies to all my realm classes
}

class TestRealmAddress extends MyBaseRealmObject<TestRealmAddress, 'line1'> {
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

  myOwnFunction(): string {
    return '';
  }
}

export const realmSchemaWithSubclass: Realm.ConfigurationWithoutSync['schema'] =
  [TestRealmAddress];
