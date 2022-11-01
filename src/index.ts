/**
 * the stack calling program
 *
 * By:      Devin Jhu
 * Version: 1.0
 * Since:   2022-10-31
 */

import MrCoxallStack from './MrCoxallStack'
import promptSync from 'prompt-sync'

const prompt = promptSync()
const myStack = new MrCoxallStack()

// Input & Process
const userNumber = prompt('Enter number: ')
const number = parseInt(userNumber)
myStack.Push(number)

myStack.ShowStack()
// Output
console.log('\nDone.')
