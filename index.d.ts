export function isClass<T extends new (...args: any[]) => any = new (...args: any[]) => any>(target: any): target is T;
export default isClass;
