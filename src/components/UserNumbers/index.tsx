import React from 'react'
import { useRouter } from 'next/router'

import * as S from './styles'

interface UserNumbersProps {
  repos: number | string
  followers: number | string
  following: number | string
}

const UserNumbers = (props: UserNumbersProps) => {
  const router = useRouter()
  const handleOnClick = (route: string) => router.push(route)

  return (
    <S.Container>
      <S.NumberContainer onClick={() => handleOnClick('/repos')}>
        <h1>{props?.repos}</h1>
        <h2>Repositórios</h2>
      </S.NumberContainer>

      <S.NumberContainer>
        <h1>{props?.followers}</h1>
        <h2>Seguidores</h2>
      </S.NumberContainer>

      <S.NumberContainer>
        <h1>{props?.following}</h1>
        <h2>Seguindo</h2>
      </S.NumberContainer>
    </S.Container>
  )
}

export default UserNumbers
