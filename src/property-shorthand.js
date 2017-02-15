export default function propertyShorthand () {
  const foo = 4
  const bar = 5

  const obj = {
    foo: foo,
    bar: bar,
  }
  // ^^ OMG .. so much duplication .. system shutdown .. goodbye ES5 .. you suck!

  console.log('obj', obj)

  const awesomeEs6PropertyShorthandObj = { foo, bar }
  // ^^ look at me ma, me so pretty!
  console.log('awesomeEs6PropertyShorthandObj', awesomeEs6PropertyShorthandObj)
}
