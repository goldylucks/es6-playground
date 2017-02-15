export default function classStatic () {
  class PowerRanger {

    constructor (color) {
      this.color = color
    }

    static moves = ['punch', 'cry', 'jump']

    static modes = {
      lame: -2,
      superLame: -9,
    }

    static sayMode = () => {
      console.log(`[${this.color}] my mode is ${this.mode}`)
    }

    mode = 'lame'
  }

  const redPR = new PowerRanger('red')
  const bluePR = new PowerRanger('blue')
  try {
    PowerRanger.sayMode()
  } catch (err) {
    console.groupCollapsed('PowerRanger.sayMode()')
    console.warn('[PowerRanger.sayMode()]', err)
    console.groupEnd()
  }
  try {
    bluePR.sayMode()
  } catch (err) {
    console.groupCollapsed('bluePR.sayMode()')
    console.warn('[bluePR.sayMode()]', err)
    console.groupEnd()
  }
  console.log(redPR.moves)
  console.log(bluePR.moves)
}
