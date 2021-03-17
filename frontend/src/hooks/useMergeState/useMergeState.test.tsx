import { renderHook, act } from '@testing-library/react-hooks';
import useMergeState from './useMergeState';

test('merges objects', (): void => {
  const { result } = renderHook(() =>
    useMergeState({ name: 'John', lastName: '' })
  );
  const getState = () => result.current[0];
  const setState = result.current[1];

  expect(getState().name).toEqual('John');
  expect(getState().lastName).toEqual('');

  act(() => {
    setState({ lastName: 'Doe' });
  });

  expect(getState().name).toEqual('John');
  expect(getState().lastName).toEqual('Doe');
});
