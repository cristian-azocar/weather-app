export function isEmpty(str: string): boolean {
  if (str === null || str === undefined) {
    return true;
  }

  return str.length === 0;
}

export function isBlank(str: string): boolean {
  if (str === null || str === undefined) {
    return true;
  }

  return str.trim().length === 0;
}

export function isEmptyOrBlank(str: string): boolean {
  return isEmpty(str) || isBlank(str);
}

export function decapitalize(str: string): string {
  if (str === null || str === undefined) {
    return '';
  }

  return str.charAt(0).toLowerCase() + str.slice(1);
}

export function camelCase(str: string): string {
  if (str === null || str === undefined) {
    return '';
  }

  const result = str.replace(/[-_\s]+(.)?/g, (_, c) => c.toUpperCase().trim());

  return decapitalize(result);
}
