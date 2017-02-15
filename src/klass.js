export default function Klass () {
  try {
    // eslint-disable-next-line
    const hondaHoisted = new Car('honda') // error, no hoisting!
  } catch (err) {
    console.groupCollapsed('[hondaHoisted]')
    console.warn(err)
    console.groupEnd()
  }

  class Car {
    setType (type) {
      this.type = type
    }
  }

  const honda = new Car()
  console.groupCollapsed('[honda]')
  console.log('BEFORE set', honda.type) // undefined
  honda.setType('honda')
  console.log('AFTER set', honda.type) // honda
  console.groupEnd()

  class House {
    constructor (type) {
      console.log('House constructor')
      this.type = type
    }

    setType () {
      return this.type
    }
  }

  console.groupCollapsed('[cottage]')
  const cottage = new House('cottage')
  console.log('BEFORE set', cottage.type)
  cottage.setType('creamy cottage')
  console.log('AFTER set', cottage.type)
  console.groupEnd()

  class Animal {
    isOurFriends = 'Could be'
  }

  const cow = new Animal()
  console.log('cow.isOurFriends', cow.isOurFriends)
}
