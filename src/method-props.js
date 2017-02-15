export default function methodProps () {
  const obj = {
    name: 'Inigo Montoya',
    getName: function () {
      return this.name
    },
    killerPhrase: function () {
      console.log(`[obj] my name is ${this.name}. U Killed my fada. Prepare to die!`)
    },
  }

  obj.killerPhrase()

  const objEs6 = {
    name: 'Inigo Montoya',
    getName () {
      return this.name
    },
    killerPhrase () {
      console.log(`[objEs6] my name is ${this.name}. U Killed my fada. Prepare to die!`)
    },
  }

  objEs6.killerPhrase()
}
