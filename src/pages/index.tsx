import Container from 'components/Container'
import Header from 'components/Header'
import UserContainer from 'components/UserContainer'
import UserDetails from 'components/UserDetails'
import UserNumbers from 'components/UserNumbers'
import UserPicture from 'components/UserPicture'
import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import { context } from '../context'

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
