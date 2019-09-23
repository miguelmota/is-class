export default function isClass<T extends new () => any = new () => any>(target: any): target is T;
export { isClass };