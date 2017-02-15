export default function find () {
  const arr = [1, 2, 3, 4]
  const filtered = arr.filter(n => n > 1)
  const found = arr.find(n => n > 1)

  console.log('filtered', filtered)
  console.log('found', found)
}
