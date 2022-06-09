import React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const AccountIcon = (props: SvgProps) => (
  <Svg height={30} width={30} viewBox="0 0 21 21" {...props}>
    <Path
      d="M10.5 2.5a3 3 0 0 1 3 3v2a3 3 0 1 1-6 0v-2a3 3 0 0 1 3-3zm7 14v-.728c0-3.187-3.686-5.272-7-5.272s-7 2.085-7 5.272v.728a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default AccountIcon;
