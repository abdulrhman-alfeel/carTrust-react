import React from 'react'
import imag_funt from '../../assets/img/04e77cc8e99ec927c37de1ac3b3e82cd.png'
import {
  Avatar,
  Button,
  Flex,
 
  Text
} from "@chakra-ui/react";

export default function FoundFile() {
  return (
<Flex 
align='center'
justify='center'
flexDir='column'
w='100%'
// border='solid 2px #000'
>
  <img width='15%' minHeight="20%" src={imag_funt} />
  <Text
  m={15}
  color="#B0BBD0"
  >No Evaluation Found</Text>
</Flex>
  )
}
