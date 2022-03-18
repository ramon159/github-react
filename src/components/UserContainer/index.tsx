import * as S from './styles'

interface UserContainerProps {
  children?: React.ReactNode
}
const UserContainer = ({ children }: UserContainerProps) => (
  <S.Section>{children}</S.Section>
)

export default UserContainer
