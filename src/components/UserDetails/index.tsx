import * as S from './styles'

interface UserDetailsProps {
  name: string
  username: string
  bio: string
}

const UserDetails = (props: UserDetailsProps) => {
  return (
    <S.Container>
      <S.Name>{props?.name}</S.Name>
      <S.Username>{props?.username}</S.Username>
      <S.Description>{props?.bio}</S.Description>
    </S.Container>
  )
}

export default UserDetails
