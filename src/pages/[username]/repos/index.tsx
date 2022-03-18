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
    ;async () => {
      try {
        const reposResponse = await client.get<IUserRepos>(`/${username}/repos`)
        ctx.setUserRepos(reposResponse.data)
      } catch (err) {
        console.log(err)
      }
    }
  }, [username])

  return (
    <Container>
      {ctx.userRepos && (
        <ReposContainer
          title={`Repositories of ${username}`}
          repos={ctx.userRepos}
        ></ReposContainer>
      )}
    </Container>
  )
}
