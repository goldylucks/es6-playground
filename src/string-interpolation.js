export default function stringInterpolation () {
  const name = 'Adam'
  const profession = 'passionate teacher'
  const age = 19

  console.log("name + ' profession is ' + profession + ' and since he was born, the earth circulated around the sun ' + age + ' times'")
  console.log(name + ' profession is ' + profession + ' and since he was born, the earth circulated around the sun ' + age + ' times')
  // ^^^ YUCK ... such a disgrace ...

  console.log(`${name} profession is ${profession} and since he was born, the earth circulated around the sun ${age} times`)
  // ^^^ OMG ... have you ever seen such a beauty ???
  console.log("`${name} profession is ${profession} and since he was born, the earth circulated around the sun ${age} times`") // eslint-disable-line

  console.groupCollapsed('coercion')
  console.log('typeof 19', typeof 19) // number
  // eslint-disable-next-line
  console.log('typeof `${19}`', typeof `${19}`) // string
  console.groupEnd()
}
