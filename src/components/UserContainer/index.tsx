import * as S from './styles'

interface IProps {
  children?: React.ReactNode
}
const UserContainer = ({ children }: IProps) => (
  <S.Section>{children}</S.Section>
)

export default UserContainer
