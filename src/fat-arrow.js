export default function fatArrow () {
  const arrOneLiner = [1, 2, 3].map(i => i * 2) // notice no return!
  // ^^^ look how pretty!
  console.log('arrOneLiner', arrOneLiner)

  // const arrOneLiner = [1,2,3].map(function (i) { return i * 2})
  // ^^^ YUCK!

  const arrMultipleLines = [1, 2, 3].map(i => {
    if (i > 1) {
      i * 2
    }
    return i // if it's multiple lines, we need to return :(
  })
  console.log('arrMultipleLines', arrMultipleLines)

  // const twoArgumentsFunc = (age, gender) => { // more then one argument needs to be wrapped in ()
  //   console.log(age < 20 && gender === 'male' ? 'Sry, this is a private event' : 'Right this way!')
  // }

  // const twoArgumentsFunc = age, gender => { // error!
  //   console.log(age < 20 && gender === 'male' ? 'Sry, this is a private event' : 'Right this way!')
  // }
}
