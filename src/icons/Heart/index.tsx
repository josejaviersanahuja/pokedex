import React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const Heart = ({fill, ...props}: SvgProps) => (
  <Svg height={30} width={30} viewBox="0 0 21 21" {...props}>
    <Path
      d="M10.5 6.5c.5-2.5 4.343-2.657 6-1 1.603 1.603 1.5 4.334 0 6l-6 6-6-6a4.243 4.243 0 0 1 0-6c1.55-1.55 5.5-1.5 6 1z"
      fill={fill}
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default Heart;
