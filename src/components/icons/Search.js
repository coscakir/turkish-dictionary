import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function SvgSearch(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      className=""
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.667 19A9.333 9.333 0 1119 9.667a9.293 9.293 0 01-1.96 5.723l6.285 6.285-1.65 1.65-6.285-6.285A9.293 9.293 0 019.667 19zm7-9.333a7 7 0 11-14 0 7 7 0 0114 0z"
        fill="#fff"
      />
    </Svg>
  )
}

export default SvgSearch
