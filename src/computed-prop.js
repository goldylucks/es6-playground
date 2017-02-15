export default function computedProp () {
  const firstFighter = 'Adam'
  const secondFighter = 'Eve'
  const scores = {}
  scores['FirstRound_' + firstFighter] = 25
  scores['FirstRound_' + secondFighter] = 10
  // Females get CRUSHED by male superiority
  scores['SecondRound_' + firstFighter] = -3
  scores['SecondRound_' + secondFighter] = 100
  // Embarassing defeat for the males, what a comeback for the ladies!
  console.log('[scores]', scores)

  const scoresEs6 = {
    ['FirstRound_' + firstFighter]: 25,
    ['FirstRound_' + secondFighter]: 10,
    ['SecondRound_' + firstFighter]: -3,
    ['SecondRound_' + secondFighter]: 100,
  }
  console.log('[scoresEs6]', scoresEs6)
}
