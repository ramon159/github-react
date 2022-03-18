import { Container } from './styles'

interface MainContainerProps {
  children?: React.ReactNode
}
const MainContainer = ({ children }: MainContainerProps) => (
  <Container>{children}</Container>
)

export default MainContainer
