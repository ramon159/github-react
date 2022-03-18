import IUserData from 'interfaces/github/IUserData'
import { IUserRepos } from 'interfaces/github/IUserRepos'
import React, { useState, createContext } from 'react'

interface IProps {
  children?: React.ReactNode
}

interface IFetchContext {
  userData?: IUserData
  userRepos?: IUserRepos
  userReposStarred?: IUserRepos
  setUserData: React.Dispatch<React.SetStateAction<IUserData | undefined>>
  setUserRepos: React.Dispatch<React.SetStateAction<IUserRepos>>
  setuserReposStarred: React.Dispatch<React.SetStateAction<IUserRepos>>
}

export const context = createContext<IFetchContext>({} as IFetchContext)

export const ContextProvider = ({ children }: IProps) => {
  const [userData, setUserData] = useState<IUserData>()
  const [userRepos, setUserRepos] = useState<IUserRepos>([])
  const [userReposStarred, setuserReposStarred] = useState<IUserRepos>([])

  return (
    <context.Provider
      value={{
        userData,
        userRepos,
        userReposStarred,
        setUserData,
        setUserRepos,
        setuserReposStarred
      }}
    >
      {children}
    </context.Provider>
  )
}
