import { Dispatch, useCallback, useState } from 'react';

export default function useMergeState<T>(
  initialState: T
): [T, Dispatch<Partial<T>>] {
  const [state, setState] = useState<T>(initialState);
  const setMergeState: Dispatch<Partial<T>> = useCallback(
    (value: Partial<T>) => {
      setState((previousState: T) => ({ ...previousState, ...value }));
    },
    []
  );

  return [state, setMergeState];
}
