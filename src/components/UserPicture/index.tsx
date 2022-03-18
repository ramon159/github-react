import IUserData from 'interfaces/github/IUserData'
import { Container, ProfilePicture } from './styles'
interface UserPictureProps {
  url: IUserData['url']
}

const UserPicture = (props: UserPictureProps) => (
  <Container>
    <ProfilePicture src={props.url} alt="perfil do usuario" />
  </Container>
)

export default UserPicture
