import * as React from 'react';
import Svg, {SvgProps, G, Path} from 'react-native-svg';

const Exit = (props: SvgProps) => (
  <Svg height={30} width={30} viewBox="0 0 21 21" {...props}>
    <G
      fill="none"
      fillRule="evenodd"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round">
      <Path d="m14.595 13.5 2.905-3-2.905-3M17.5 10.5h-9M14.5 3.5l-8 .002c-1.104.001-2 .896-2 2v9.995a2 2 0 0 0 2 2h8.095" />
    </G>
  </Svg>
);

export default Exit;
