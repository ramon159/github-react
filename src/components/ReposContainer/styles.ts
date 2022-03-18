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

export const Title = styled.h1`
  font-size: 20px;
  font-weight: 700;
  color: #444;
  width: 100%;
  text-align: center;
  padding: 3rem 0;
`

export const ListOfReposContainer = styled.div`
  height: 350px;
  width: 100%;
  padding: 10px;
  overflow-y: scroll;
`

export const Repo = styled.div`
  width: 100%;
  height: 80px;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  h2 {
    font-size: 15px;
    width: 100%;
    overflow: hidden;
    color: #444;
  }
  p {
    font-size: 12px;
    font-weight: 400;
    color: #777;
    width: 100%;
    height: 30px;
    overflow: hidden;
    line-height: 1.3;
    margin-top: 10px;
  }
`
export const Divider = styled.hr`
  border-top: 1px solid #bbb;
  width: 100%;
  margin: 0 0.5rem;
`
