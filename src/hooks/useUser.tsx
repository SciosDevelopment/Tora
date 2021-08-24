import { useDispatch, useSelector } from 'react-redux'
import { useCallback } from 'react'
import { setUserInfo,setUserID, clearUserInfo } from '../store/user'
import { RootState } from '../store'


export default function useUser() {
  const dispatch = useDispatch()

  const onGetUserInfo = useSelector((state: RootState) => state.user.userInfo)
  const onGetUserID = useSelector((state:RootState) =>state.user.userID)

  const onSetUserInfo = useCallback((userParam) => dispatch(setUserInfo(userParam)), [dispatch])
  const onSetUserID = useCallback((userParam) => dispatch(setUserID(userParam)), [dispatch])
  const onClearUserInfo = useCallback(() => dispatch(clearUserInfo()), [dispatch])

  return {onGetUserInfo, onGetUserID, onSetUserInfo, onSetUserID, onClearUserInfo}
}