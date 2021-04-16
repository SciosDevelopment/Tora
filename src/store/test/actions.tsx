import { createAction, createAsyncAction } from 'typesafe-actions'

export const TEST1 = 'test/TEST1'
export const TEST2 = 'test/TEST2'
export const TEST3 = 'test/TEST3'

// 액션 생성 함수
export const setTest = createAction(TEST1)<String>()
export const Test2 = createAction(TEST2)()
export const removeTest = createAction(TEST3)()