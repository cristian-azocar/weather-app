export function getItem(key: string): unknown {
  const item: string | null = localStorage.getItem(key);

  if (typeof item === 'string') {
    return JSON.parse(item);
  }

  return undefined;
}

export function setItem(key: string, value: unknown): void {
  localStorage.setItem(key, JSON.stringify(value));
}
