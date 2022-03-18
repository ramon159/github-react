import { IRepo } from 'interfaces/github/IUserRepos'
import Link from 'next/link'
import * as S from './styles'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ReposContainer = (props: any) => {
  return (
    <S.Section>
      <S.Title>Repositórios de {props.name?.split(' ')[0]}</S.Title>
      <S.ListOfReposContainer>
        {(props?.repos).map((repo: IRepo) => (
          // <Link href={repo?.html_url} key={repo?.id}>
          <S.Repo key={repo?.id}>
            <h2>{repo?.name}</h2>
            <p>{repo?.description}</p>
          </S.Repo>
          // </Link>
        ))}
      </S.ListOfReposContainer>
    </S.Section>
  )
}

export default ReposContainer
