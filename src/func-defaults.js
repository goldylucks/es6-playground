export default function funcDefaults () {
  function whatsapp (name, lastName, awesomenessLvl) {
    awesomenessLvl = awesomenessLvl || 7
    console.log(`[whatsapp] Hi! my name is ${name} ${lastName} and my awesomenessLvl is ${awesomenessLvl}`)
  }

  whatsapp('Tupac', 'Shakur')
  whatsapp('Britney', 'Spears', -1) // lol, sry britney

  function whatsappEs6Defaults (name, lastName, awesomenessLvl = 7) {
    console.log(`[whatsappEs6Defaults] Hi! my name is ${name} ${lastName} and my awesomenessLvl is ${awesomenessLvl}`)
  }

  whatsappEs6Defaults('Tupac', 'Shakur')
  whatsappEs6Defaults('Britney', 'Spears', -1) // ROFL!, sry britney, I did it again

  // limitations
  // function defualtObject ({ name, lastName, awesomenessLvl: 7 }) { // syntax error
  //   console.log('[whatsappEs6Defaults] Hi! my name is ' + name + ' ' + lastName ' and my awesomenessLvl is' + awesomenessLvl)
  // }

  function defualtObject ({ name, lastName, awesomenessLvl } = { awesomenessLvl: 7 }) {
    console.log(`[defualtObject] Hi! my name is ${name} lastName and my awesomenessLvl is ${awesomenessLvl}`)
  }

  defualtObject({ name: 'Tupac', lastName: 'Shakur' }) // awesomenessLvl not defined :(

  function defualtObjectWorkaround ({ name, lastName, awesomenessLvl }) {
    awesomenessLvl = awesomenessLvl || 7
    console.log(`[defualtObjectWorkaround] Hi! my name is ${name} ${lastName} and my awesomenessLvl is ${awesomenessLvl}`)
  }

  defualtObjectWorkaround({ name: 'Tupac', lastName: 'Shakur' }) // awesomenessLvl not defined :(

  function countEvens (arr) {
    console.log('[countEvensWithDefaults]', arr.filter(i => i & 2 === 0).length)
  }

  countEvens('[count evens]', [1, 2, 3, 4, 5]) // 2
  try {
    countEvens() // error, cant access filter of undefined
  } catch (err) {
    console.warn('[countEvens]', err)
  }

  function countEvensWithDefaults (arr = []) {
    console.log('[countEvensWithDefaults]', arr.filter(i => i & 2 === 0).length)
  }

  countEvensWithDefaults() // 0
  countEvensWithDefaults([1, 2, 3, 4, 5]) // 3
}
