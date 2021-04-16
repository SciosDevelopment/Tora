import { TestState, TestAction } from './types'
import { createReducer } from 'typesafe-actions'
import { TEST1,TEST2,TEST3} from './actions'

const initialTestState: TestState = {
  testText: "text",
}

const test = createReducer<TestState, TestAction>(initialTestState, {
  [TEST1]: (state, action) => ({textText:action.payload}),
  [TEST2]: (state) => ({textText: state.textTest + "!"}),
  [TEST3]: (state) => ({textTest:"text"})
})

export default test