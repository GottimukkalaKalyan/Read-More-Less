import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 100vh;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  padding: 10px;
`
export const ContentContainer = styled.div`
  height: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  //   justify-content: center;
  align-items: center;
  padding: 10px;
`
export const Image = styled.img`
  width: 100%;
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  margin: 10px;
  font-size: 30px;
`
export const AdditionPara = styled.p`
  font-family: 'Roboto';
  margin-bottom: 20px;
  font-weight: 500;
`
export const DescriptionPara = styled.p`
  color: #334155;
`
export const ReadMoreButton = styled.button`
  color: white;
  padding: 5px 10px 7px 10px;
  background-color: #1f81ff;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 20px;
`
