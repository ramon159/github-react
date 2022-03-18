import * as S from './styles'
import { AiFillGithub } from 'react-icons/ai'
import { useSession, signIn, signOut } from 'next-auth/react'
const LoginContainer = () => {
  const { data: session, status } = useSession()
  return (
    <S.Section>
      <S.SectionTitle>Sign in with GitHub</S.SectionTitle>
      <S.GitHubLogin onClick={() => signIn('github', { callbackUrl: '/' })}>
        <AiFillGithub size={60} />
      </S.GitHubLogin>
    </S.Section>
  )
}
export default LoginContainer
