import { useNavigate } from "react-router-native"
import { useApolloClient } from "@apollo/client";
import useAuthStorage from "../hooks/useAuthStorage";
import { useEffect } from 'react'

const SignOut = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient()
  const navigate = useNavigate()

  const resetUser = async () => {
    await authStorage.removeAccessToken()
    apolloClient.resetStore()
  }

  useEffect(() => {
    resetUser()
    navigate('/')
  }, [])

  return null
}

export default SignOut