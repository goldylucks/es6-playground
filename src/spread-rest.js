export default function spreadRest () {
  console.groupCollapsed('[Arr Rest]')
  const arr = [3, 4, 5]
  console.log(1, 2, arr) // 1, 2, [3, 4, 5]
  console.log(1, 2, ...arr) // 1, 2, 3, 4, 5
  console.groupEnd()

  const mysterious = { isAlive: 'unknown' }

  const greatestMartialArtistEver = {
    name: 'Bruce Lee',
    ...mysterious,
  }
  console.log('[Bruce Lee]', greatestMartialArtistEver)

  const interesting = { isIntersting: true }
  const veryInterestingGuy = {
    name: 'Jaqcue Fresco',
    age: 101,
    ...interesting,
  }
  console.log('[Fresco]', veryInterestingGuy)

  const { name, ...rest } = veryInterestingGuy
  console.groupCollapsed('[rest]')
  console.log('name', name)
  console.log('rest', rest)
  console.log('...rest', ...rest)
  console.groupEnd()
  // function familia (father, ...kids) {
  //   console.log(`${father}: I am padre familia!`)
  //   console.log(...kids, 'we are the kids, the future generation! So much depends on us ...')
  // }
}
