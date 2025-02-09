export interface Iterator<T> {
  next(): T | undefined;
  hasNext(): boolean;
  current(): T | undefined;
}
