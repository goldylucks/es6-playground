/* eslint no-duplicate-imports: off */

import utils from './exports-utils'
import utils2, { multiplyBy2, multiplyBy3 } from './exports-utils'
console.log('utils', utils())
console.log('utils utils.multiplyBy2(3)', utils.multiplyBy2(3))
console.log('utils utils.multiplyBy3(5)', utils.multiplyBy3(5))

console.log('utils2', utils2)
console.log('utils2 multiplyBy2(3)', multiplyBy2(3))
console.log('utils2 multiplyBy3(5)', multiplyBy3(5))
