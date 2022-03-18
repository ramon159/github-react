import * as S from './styles'
import { RiGitRepositoryFill } from 'react-icons/ri'
import { AiFillStar } from 'react-icons/ai'

interface UserButtonsProps {
  username: string
}

const UserButtons = ({ username }: UserButtonsProps) => (
  <S.Container>
    <S.StyledLink href={`/${username}/starred`}>
      <AiFillStar />
      Starred
    </S.StyledLink>

    <S.StyledLink href={`/${username}/repos`}>
      <RiGitRepositoryFill />
      Repos
    </S.StyledLink>
  </S.Container>
)

export default UserButtons
