export function toSet<TItem, TKey = TItem>(
   arr: TItem[],
   keySelector: (item: TItem) => TKey,
): Set<TKey> {
   return arr.reduce((acc, cur) => acc.add(keySelector(cur)), new Set<TKey>());
}

export function toMap<TItem, TKey, TVal>(
   arr: TItem[],
   keySelector: (item: TItem) => TKey,
   valueSelector: (item: TItem) => TVal,
   initialValue: Map<TKey, TVal> = new Map<TKey, TVal>(),
): Map<TKey, TVal> {
   return arr.reduce(
      (acc, cur) => acc.set(keySelector(cur), valueSelector(cur)),
      initialValue,
   );
}

export function toGroupMap<TItem, TKey, TValue>(
   arr: TItem[],
   keySelector: (item: TItem) => TKey,
   valueSelector: (item: TItem) => TValue,
): Map<TKey, TValue[]> {
   return arr.reduce((acc, cur) => {
      const group = keySelector(cur);
      const existing = acc.get(group);
      const item = valueSelector(cur);

      return acc.set(group, !existing ? [item] : [...existing, item]);
   }, new Map<TKey, TValue[]>());
}

const _empty: any[] = [];
export function emptyList<T>(): T[] {
   return _empty;
}
