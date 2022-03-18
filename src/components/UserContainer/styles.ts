import styled from 'styled-components'

export const Section = styled.section`
  margin-top: 15px;
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 10px;
  @media (max-width: 430px) {
    width: 300px;
  }
`
