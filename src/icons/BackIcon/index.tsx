import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const BackIcon = (props: SvgProps) => (
  <Svg height={45} width={45} viewBox="0 0 21 21" {...props}>
    <Path
      d="M8.5 7.5c5.185-.47 8.52 1.53 10 6-2.825-3.14-6.341-3.718-10-2v3l-5-5 5-5z"
      fill="none"
      stroke="currentColor"
      strokeWidth={1}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default BackIcon;
