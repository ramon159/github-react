import styled from 'styled-components'

export const Section = styled.section`
  margin-top: 15px;
  width: 400px;
  height: 300px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 430px) {
    width: 300px;
  }
`
export const SectionTitle = styled.h1`
  font-size: 2rem;
  font-weight: 400;
  color: #444;
`

export const GitHubLogin = styled.button`
  margin-top: 2rem;
  padding: 3rem;
  border: 1px solid #bfbfbf;
  border-radius: 10px;
  background-color: #e5e5e5;
  cursor: pointer;
  transition: ease 0.2s;
  &:hover {
    background-color: #dfdfdf;
  }
`
