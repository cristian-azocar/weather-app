import { useCallback, useRef, useState } from 'react';

export default function useLocalStorage<T>(
  key: string,
  initialValue?: T
): [T, (value: T) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const storedValueReference = useRef(storedValue);
  storedValueReference.current = storedValue;

  const setValue = useCallback(
    (value: T) => {
      const valueToStore =
        typeof value === 'function'
          ? value(storedValueReference.current)
          : value;
      localStorage.setItem(key, JSON.stringify(valueToStore));
      setStoredValue(valueToStore);
    },
    [key]
  );

  return [storedValue, setValue];
}
