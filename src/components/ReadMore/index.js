import {useState} from 'react'

import {
  MainContainer,
  ContentContainer,
  Heading,
  Image,
  AdditionPara,
  DescriptionPara,
  ReadMoreButton,
} from './styledComponents'

const ReadMore = prop => {
  const [readFullDescription, setReadStatus] = useState(false)

  const {reactHooksDescription} = prop

  const readMore = () => {
    setReadStatus(prevState => !prevState)
  }

  const Description = readFullDescription
    ? reactHooksDescription.slice(0, reactHooksDescription.length)
    : reactHooksDescription.slice(0, 170)

  const ButtonText = readFullDescription ? 'Read Less' : 'Read More'
  return (
    <MainContainer>
      <ContentContainer>
        <Heading>React Hooks</Heading>
        <AdditionPara>Hooks are a new addition to React</AdditionPara>
        <Image
          src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
          alt="react hooks"
        />
        <DescriptionPara>{Description}</DescriptionPara>
        <ReadMoreButton onClick={readMore}>{ButtonText}</ReadMoreButton>
      </ContentContainer>
    </MainContainer>
  )
}

export default ReadMore
