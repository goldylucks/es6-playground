export default function classInheritance () {
  class Car {
    isAutomobile = true

    constructor (model) {
      this.isCar = true
      this.model = model
    }
  }

  class NoConstructor extends Car {
    color = 'red'
  }

  const noConstructor = new NoConstructor('Honda')
  console.group('[No Constructor]')
  console.log('color', noConstructor.color)
  console.log('model', noConstructor.model)
  console.log('isCar', noConstructor.isCar)
  console.log('isAutomobile', noConstructor.isAutomobile)
  console.groupEnd()

  class EmptySuper extends Car {
    color = 'red'
    // eslint-disable-next-line
    constructor () {
      super() // syntax error without super
    }
  }

  const emptySuper = new EmptySuper('Honda')
  console.group('[EmptySuper]')
  console.log('color', emptySuper.color)
  console.log('model', emptySuper.model)
  console.log('isCar', emptySuper.isCar)
  console.log('isAutomobile', emptySuper.isAutomobile)
  console.groupEnd()

  class FilledSuper extends Car {
    color = 'red'

    constructor (model, rednessLevel) {
      super(model)
      this.rednessLevel = rednessLevel
    }
  }

  const filledSuper = new FilledSuper()
  console.group('[filledSuper]')
  console.log('color', filledSuper.color)
  console.log('model', filledSuper.model)
  console.log('isCar', filledSuper.isCar)
  console.log('isAutomobile', filledSuper.isAutomobile)
  console.log('rednessLevel', filledSuper.rednessLevel)
  console.groupEnd()
}
