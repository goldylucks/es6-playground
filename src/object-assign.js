export default function objectAssign () {
  const adamSkills = { programmer: 7, broomRiding: 10 }

  const adam = {
    name: 'Adam',
    awesomenessLvl: Infinity, // matched only by his humbleness
    skills: adamSkills,
  }

  console.groupCollapsed('[adamSkills]')
  console.log('BEFORE mutation', adamSkills)
  adam.skills.programmer = 8
  console.log('AFTER mutation', adamSkills)
  console.groupEnd()

  const steveSkills = { programmer: 'meh', designer: 'moo' }
  const steveJobs = {
    name: 'Steve',
    awesomenessLvl: 'debatable!',
    skills: {},
  }
  console.groupCollapsed('[steveSkills]')
  console.log('steveSkills before assign', steveSkills)
  Object.assign(steveJobs.skills, steveSkills)
  steveJobs.skills.programmer = 'ok, not meh'
  console.log('steveSkills after assign', steveSkills)
  console.log('steveJobs.skills after assign', steveJobs.skills)
  console.groupEnd()
}
