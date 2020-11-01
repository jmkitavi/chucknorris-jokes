import { Dimensions } from 'react-native'

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 667;

const { width, height } = Dimensions.get('screen');

const scale = (size: number) => (width / guidelineBaseWidth) * size;


export {
  scale,
}