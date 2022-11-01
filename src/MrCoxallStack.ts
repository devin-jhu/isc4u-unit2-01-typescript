/**
 * the stack
 *
 * By:      Devin Jhu
 * Version: 1.0
 * Since:   2022 10 31
 */

class MrCoxallStack {
  // an array
  stack: number[] = []

  // collects pushed numbers
  Push(pushedNumber: number): void {
    this.stack.push(pushedNumber)
  }

  // shows array
  ShowStack(): void {
    console.log('The stack list')
    for (var Element of this.stack) {
      console.log(this.stack)
    }
    console.log('End of stack list')
  }
}
export = MrCoxallStack
