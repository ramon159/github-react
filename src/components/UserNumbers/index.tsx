import React from 'react'
import { useRouter } from 'next/router'

import { Container, NumberContainer } from './styles'
import { IUserRepos } from 'interfaces/github/IUserRepos'

const UserNumbers = (props: any) => {
  const router = useRouter()
  const handleOnClick = (route: string) => router.push(route)

  return (
    <Container>
      <NumberContainer onClick={() => handleOnClick('/repos')}>
        <h1>{props?.repos}</h1>
        <h2>Repositórios</h2>
      </NumberContainer>

      <NumberContainer>
        <h1>{props?.followers}</h1>
        <h2>Seguidores</h2>
      </NumberContainer>

      <NumberContainer>
        <h1>{props?.following}</h1>
        <h2>Seguindo</h2>
      </NumberContainer>
    </Container>
  )
}

export default UserNumbers
