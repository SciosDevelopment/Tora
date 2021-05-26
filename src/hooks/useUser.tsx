import { useDispatch, useSelector } from 'react-redux'
import { useCallback } from 'react'
import { setUserInfo, clearUserInfo } from '../store/user'
import { RootState } from '../store'


export default function useUser() {
  const dispatch = useDispatch()

  const onGetUserInfo = useSelector((state: RootState) => state.user.userInfo)

  const onSetUserInfo = useCallback((userParam) => dispatch(setUserInfo(userParam)), [dispatch])
  const onClearUserInfo = useCallback(() => dispatch(clearUserInfo()), [dispatch])

  return {onGetUserInfo, onSetUserInfo, onClearUserInfo}
}