import Container from 'components/Container'
import Header from 'components/Header'
import UserButtons from 'components/UserButtons'
import UserContainer from 'components/UserContainer'
import UserDetails from 'components/UserDetails'
import UserNumbers from 'components/UserNumbers'
import UserPicture from 'components/UserPicture'
import { context } from 'context'
import { useRouter } from 'next/router'
import React, { useContext } from 'react'

export default function Home() {
  const ctx = useContext(context)
  const router = useRouter()
  const username = router.query.username as string

  return (
    <Container>
      <Header username={username} />
      {ctx.userData?.name && (
        <UserContainer>
          <UserPicture url={ctx.userData?.avatar_url} />
          <UserDetails
            name={ctx.userData?.name}
            username={ctx.userData.login}
            bio={ctx.userData?.bio}
          />
          <UserButtons username={ctx.userData?.login}></UserButtons>
          <UserNumbers
            repos={ctx.userData?.public_repos}
            followers={ctx.userData?.followers}
            following={ctx.userData?.following}
          />
        </UserContainer>
      )}
    </Container>
  )
}
