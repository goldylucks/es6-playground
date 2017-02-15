export default function deconstructArrays () {
  const arrConst = [1, 2, 3]
  const [a, b, c] = arrConst
  console.groupCollapsed('[arrConst]')
  console.log('a', a)
  console.log('b', b)
  console.log('c', c)
  console.groupEnd()

  const arrLet = [1, 2, 3]
  let [d, e, f] = arrLet // eslint-disable-line
  console.groupCollapsed('[arrLet]')
  console.log('d', d)
  console.log('e', e)
  console.log('f', f)
  console.groupEnd()

  const arrVar = [1, 2, 3]
  var [g, h, i] = arrVar // eslint-disable-line
  console.groupCollapsed('[arrVar]')
  console.log('g', g)
  console.log('h', h)
  console.log('i', i)
  console.groupEnd()

  function isSecondItemEven (arr) {
    return arr[1] % 2 === 0
  }

  console.groupCollapsed('funcs')
  console.log('[isSecondItemEven]', isSecondItemEven([2, 4, 6]))

  function isSecondItemEvenEs6DecoAwe ([first, second]) {
    return second % 2 === 0
  }

  console.log('[isSecondItemEvenEs6DecoAwe]', isSecondItemEvenEs6DecoAwe([2, 4, 6]))
  console.groupEnd()

  const arr = [1, 2]
  const [j = 5, k, l = 9, m, n] = arr
  console.groupCollapsed('[soft]')
  console.log('j', j)
  console.log('k', k)
  console.log('l', l)
  console.log('m', m)
  console.log('n', n)
  console.groupEnd()
}
