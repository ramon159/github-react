import Container from 'components/Container'
import ReposContainer from 'components/ReposContainer'
import { context } from 'context'
import { IUserRepos } from 'interfaces/github/IUserRepos'
import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react'
import client from 'services/client'

export default function Index() {
  const ctx = useContext(context)
  const router = useRouter()

  const username = router.query.username as string
  useEffect(() => {
    username &&
      (async function getUserData() {
        try {
          const reposResponse = await client.get<IUserRepos>(
            `/${username}/starred`
          )
          ctx.setUserRepos(reposResponse.data)
        } catch (err) {
          console.log(err)
        }
      })()
  }, [username])

  return (
    <Container>
      {ctx.userRepos && (
        <ReposContainer
          title={`Repositories starred by ${username}`}
          repos={ctx.userRepos}
        ></ReposContainer>
      )}
    </Container>
  )
}
