import * as React from "react"
import Svg, { Path } from "react-native-svg"

function EmailSvg(props) {
  return (
    <Svg
      width="800px"
      height="800px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.75 5.25L3 6v12l.75.75h16.5L21 18V6l-.75-.75H3.75zm.75 2.446v9.554h15V7.695L12 14.514 4.5 7.696zm13.81-.946H5.69L12 12.486l6.31-5.736z"
        fill="#080341"
      />
    </Svg>
  )
}

export default EmailSvg
