import { useDispatch, useSelector } from 'react-redux'
import { useCallback } from 'react'
import { Test2, setTest, removeTest} from '../store/test'
import { RootState } from '../store'

export default function useTest() {
  const dispatch = useDispatch()

  const onGetTest = useSelector((state: RootState) => state.test.testText)
  const onSetTest = useCallback((textParam) => dispatch(setTest(textParam)),[dispatch])
  const onAddTest = useCallback(() => dispatch(Test2()),[dispatch])
  const onRemoveTest = useCallback(() => dispatch(removeTest()), [dispatch])
  
  return { onGetTest, onSetTest, onAddTest, onRemoveTest}
}