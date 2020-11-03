import * as React from "react"
import Svg, { Path } from "react-native-svg"

const RightIcon = (props: any) => {
  return (
    <Svg height={25} width={25} viewBox="0 0 512 512" fill={'white'} {...props}>
      <Path d="M512 256c0 50.531-15 99.676-43.375 142.117-6.137 9.18-18.559 11.649-27.742 5.512-9.184-6.14-11.649-18.563-5.512-27.742C459.336 340.043 472 298.59 472 256c0-119.102-96.898-216-216-216S40 136.898 40 256s96.898 216 216 216c39.504 0 78.145-10.758 111.738-31.105 9.446-5.723 21.746-2.704 27.469 6.746 5.723 9.445 2.703 21.742-6.746 27.464C348.617 499.242 302.813 512 256 512c-68.379 0-132.668-26.629-181.02-74.98C26.63 388.668 0 324.379 0 256S26.629 123.332 74.98 74.98C123.332 26.63 187.621 0 256 0s132.668 26.629 181.02 74.98C485.37 123.332 512 187.621 512 256zM266.812 376.098A19.94 19.94 0 00281 382a19.946 19.946 0 0014.098-5.812l78.199-77.7C384.715 287.148 391 272.058 391 256s-6.285-31.148-17.703-42.488l-78.2-77.7c-7.835-7.785-20.5-7.742-28.284.09-7.786 7.836-7.747 20.5.09 28.286L339.18 236H132c-11.047 0-20 8.953-20 20s8.953 20 20 20h207.184l-72.282 71.813c-7.836 7.785-7.875 20.449-.09 28.285zm0 0" />
    </Svg>
  )
}

export default RightIcon
