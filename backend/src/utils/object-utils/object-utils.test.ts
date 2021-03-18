import { camelizeKeys, areEqual } from './object-utils';

test('transforms an object keys to camel case', (): void => {
  const obj = {
    boolean_property: true,
    number_property: 100,
    string_property: 'foo',
    array_property: [1, 2, { inner_property: false }],
    PascalProperty: '',
    'kebab-property': '',
    'period.property': '',
    ALL_CAPS_PROPERTY: '',
  };

  const expectedObj = {
    booleanProperty: true,
    numberProperty: 100,
    stringProperty: 'foo',
    arrayProperty: [1, 2, { innerProperty: false }],
    pascalProperty: '',
    kebabProperty: '',
    periodProperty: '',
    allCapsProperty: '',
  };

  expect(camelizeKeys(obj)).toEqual(expectedObj);
});

test('compares two objects', (): void => {
  expect(areEqual({ name: 'John' }, { name: 'John' })).toBeTruthy();
  expect(
    areEqual({ name: 'John' }, { name: 'John', lastName: 'Doe' })
  ).toBeFalsy();
  expect(
    areEqual({ outer: { inner: true } }, { outer: { inner: true } })
  ).toBeTruthy();
  expect(
    areEqual(
      {
        array: [1, 2, 3],
        string: 'foo',
        object: {
          number: 1,
          amotherObject: { bar: 1 },
        },
      },
      {
        array: [1, 2, 3],
        string: 'foo',
        object: {
          number: 1,
          amotherObject: { bar: 1 },
        },
      }
    )
  ).toBeTruthy();
});
