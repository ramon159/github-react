import { IRepo } from 'interfaces/github/IUserRepos'
import Link from 'next/link'
import * as S from './styles'

interface ReposContainerProps {
  title: string
  repos: IRepo[]
}

const ReposContainer = (props: ReposContainerProps) => {
  return (
    <S.Section>
      <S.Title>{props.title}</S.Title>
      <S.Divider />
      <S.ListOfReposContainer>
        {(props?.repos).map((repo: IRepo) => (
          <Link href={repo?.html_url} key={repo?.id}>
            <S.Repo>
              <h2>{repo?.name}</h2>
              <small>{repo?.owner.login}</small>
              <p>
                Last commit: {new Date(repo?.pushed_at).toLocaleDateString()}
              </p>
            </S.Repo>
          </Link>
        ))}
      </S.ListOfReposContainer>
    </S.Section>
  )
}

export default ReposContainer
