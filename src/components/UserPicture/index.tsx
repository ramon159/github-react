import IUserData from 'interfaces/github/IUserData'
import { Container, ProfilePicture } from './styles'
interface IUserPictureProps {
  url: IUserData['url']
}

const UserPicture = (props: IUserPictureProps) => (
  <Container>
    <ProfilePicture src={props.url} alt="perfil do usuario" />
  </Container>
)

export default UserPicture
