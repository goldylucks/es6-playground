/* eslint no-var: off */

export default function letConst () {
  var trailingCommaSWEEEEEET = {
    Arnold: 'Talking about willis???',
    Willis: 'Look trailing comma, for realz bro!', // trailing comma not an error! moving this will result in one less line change on git
  }

  console.log('[trailing comma]', trailingCommaSWEEEEEET)

  // const foo = 4
  // foo++ // syntax error

  let bar = 5
  bar++
  console.log('[let bar]', bar) // 6

  console.groupCollapsed('for var')
  for (var i = 0; i < 3; i++) {
    console.log('[for/var i]', i)
  }
  console.log('[for/var i/after]', i) // 3
  console.groupEnd()

  console.groupCollapsed('for let')
  for (let j = 0; j < 3; j++) {
    console.log('[for/let j]', j)
  }
  try {
    // eslint-disable-next-line
    console.log('[for/let j/after]', j) // error, j undefined
  } catch (err) {
    console.warn('[for/let j/after]', err)
  }
  console.groupEnd()
}
