export default function deconstruct () {
  const objConst = {
    foo: 1,
    bar: 'moo', // trailing comma not an error! moving this will result in one less line change on git
  }

  const { foo, bar } = objConst
  console.groupCollapsed('[objConst]')
  console.log('foo', foo)
  console.log('bar', bar)
  console.groupEnd()

  const objLet = {
    foo2: 1,
    bar2: 'moo',
  }

  console.groupCollapsed('[objLet]')
  let { foo2, bar2 } = objLet // eslint-disable-line
  console.log('foo2', foo2)
  console.log('bar2', bar2)
  console.groupEnd()

  const objVar = {
    foo3: 1,
    bar3: 'moo',
  }

  var { foo3, bar3 } = objVar // eslint-disable-line
  console.groupCollapsed('[objVar]')
  console.log('foo3', foo3)
  console.log('bar3', bar3)
  console.groupEnd()

  function shouldServeDrink (opts) {
    const { age, isAlcoholic } = opts
    if (age < 18 && isAlcoholic) {
      console.log('[lame es5 args] nice try kiddo')
      return false
    }
    return true
  }

  shouldServeDrink({ age: 17, isAlcoholic: true })

  function shouldServeDrinkEs6DeconstructingAwesomeness ({ age, isAlcoholic }) {
    if (age < 18 && isAlcoholic) {
      console.log('[kickass es6 deconstruction!] nice try kiddo')
      return false
    }
    return true
  }

  shouldServeDrinkEs6DeconstructingAwesomeness({ age: 17, isAlcoholic: true })
}
