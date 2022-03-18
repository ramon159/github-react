import { Container } from './styles'

interface IProps {
  children?: React.ReactNode
}
const MainContainer = ({ children }: IProps) => (
  <Container>{children}</Container>
)

export default MainContainer
