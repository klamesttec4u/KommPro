/** Returns a random element of a non-empty array, avoiding `exclude` when possible. */
export function randomItem<T>(items: readonly T[], exclude?: T): T {
  if (items.length === 0) throw new Error('randomItem: empty array')
  const pool = exclude === undefined ? items : items.filter((item) => item !== exclude)
  const source = pool.length > 0 ? pool : items
  const item = source[Math.floor(Math.random() * source.length)]
  if (item === undefined) throw new Error('randomItem: unreachable')
  return item
}
