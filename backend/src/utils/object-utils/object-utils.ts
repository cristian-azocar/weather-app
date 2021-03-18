import camelCase from 'lodash/camelCase';

type AnyObject = Record<string, unknown>;

export function camelizeKeys(obj: AnyObject): unknown {
  if (Array.isArray(obj)) {
    return obj.map((o: AnyObject) => camelizeKeys(o));
  }

  if (obj !== null && obj.constructor === Object) {
    return Object.keys(obj).reduce(
      (result: AnyObject, key: string) => ({
        ...result,
        [camelCase(key)]: camelizeKeys(obj[key] as AnyObject),
      }),
      {}
    );
  }

  return obj;
}

export function areEqual(object: AnyObject, other: AnyObject): boolean {
  const objectKeys: string[] = Object.keys(object);
  const otherKeys: string[] = Object.keys(other);

  if (objectKeys.length !== otherKeys.length) {
    return false;
  }

  return objectKeys.every((key: string) => {
    if (typeof object[key] === 'object') {
      return areEqual(object[key] as AnyObject, other[key] as AnyObject);
    }

    return object[key] === other[key];
  });
}
