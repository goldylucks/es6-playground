export default function includes () {
  console.groupCollapsed('[arr]')
  console.log('[1, 2, 3].includes(1)', [1, 2, 3].includes(1)) // true
  console.log('[1, 2, 3].includes(7)', [1, 2, 3].includes(7)) // false
  console.groupEnd()

  console.groupCollapsed('[str]')
  console.log("'the fox'.includes('fox')", 'the fox'.includes('fox')) // true
  console.log("'the foxy lady'.includes('fox')", 'the foxy lady'.includes('fox')) // true
  console.log("'the foxy lady'.includes('foxes')", 'the foxy lady'.includes('foxes')) // false
  console.groupEnd()
}
