import { useState, useContext, useEffect } from 'react'
import { FiSearch } from 'react-icons/fi'
import Link from 'next/link'
import * as S from './styles'
import { context } from 'context'
import client from 'services/client'
import IUserData from 'interfaces/github/IUserData'
import { IUserRepos } from 'interfaces/github/IUserRepos'
import { AiFillGithub } from 'react-icons/ai'

interface HeaderProps {
  username: string
}
const Header = (props: HeaderProps) => {
  const ctx = useContext(context)
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    props.username &&
      (async function getUserData() {
        try {
          const [userResponse, reposResponse, starredResponse] =
            await Promise.all([
              client.get<IUserData>(`/${props.username}`),
              client.get<IUserRepos>(`/${props.username}/repos`),
              client.get<IUserRepos>(`/${props.username}/starred`)
            ])

          ctx.setUserData(userResponse.data)
          ctx.setUserRepos(reposResponse.data)
          ctx.setuserReposStarred(starredResponse.data)
        } catch (err) {
          console.log(err)
        }
      })()
  }, [props.username])

  return (
    <S.HeaderSection>
      <S.HeaderTitle>
        <AiFillGithub />
        Github Profile
      </S.HeaderTitle>
      <S.HeaderInputContainer>
        <S.HeaderInput
          type="text"
          placeholder="username"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <Link href={`/${searchValue}`} passHref>
          <S.HeaderSearchButton>
            <FiSearch size={15} />
          </S.HeaderSearchButton>
        </Link>
      </S.HeaderInputContainer>
    </S.HeaderSection>
  )
}

export default Header
