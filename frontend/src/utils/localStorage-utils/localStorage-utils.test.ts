import * as localStorageUtils from './localStorage-utils';

jest.spyOn(Object.getPrototypeOf(window.localStorage), 'setItem');
jest.spyOn(Object.getPrototypeOf(window.localStorage), 'getItem');

const objectMock = { bar: true, baz: 'baz' };

afterEach(() => {
  Object.getPrototypeOf(window.localStorage).getItem.mockClear();
  Object.getPrototypeOf(window.localStorage).setItem.mockClear();
});

test('saves an item to localStorage', (): void => {
  localStorageUtils.setItem('foo', objectMock);

  expect(localStorage.setItem).toHaveBeenCalledTimes(1);
  expect(localStorage.setItem).toHaveBeenCalledWith(
    'foo',
    '{"bar":true,"baz":"baz"}'
  );
});

test('returns an item from localstorage', (): void => {
  localStorageUtils.getItem('foo');

  expect(localStorage.getItem).toHaveBeenCalledTimes(1);
  expect(localStorage.getItem).toHaveBeenCalledWith('foo');
});
