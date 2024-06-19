import {Path, Svg, SvgProps} from "react-native-svg";

interface SVGAttributeProps extends SvgProps {
  width?: number;
  height?: number;
}

const SettingsIcon = ({width, height, ...props}: SVGAttributeProps) => (
  <Svg width={width} height={height} {...props} viewBox="0 0 44 43">
    <Path
      opacity="0.5"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M26.1783 39.1443C25.4999 39.4166 24.6383 39.4166 22.9168 39.4166C21.1953 39.4166 20.3354 39.4166 19.6553 39.1443C18.7523 38.782 18.0335 38.084 17.6569 37.2039C17.4846 36.8044 17.4186 36.3368 17.3911 35.6577C17.3789 35.1657 17.2384 34.6849 16.9831 34.2607C16.7277 33.8365 16.3659 33.483 15.9318 33.2336C15.4895 32.9933 14.9923 32.866 14.4862 32.8635C13.9802 32.861 13.4817 32.9834 13.0369 33.2193C12.4173 33.5382 11.9681 33.7138 11.5244 33.7711C10.5538 33.8956 9.57206 33.6407 8.79276 33.0616C8.20976 32.628 7.77892 31.9042 6.91909 30.4583C6.05742 29.0124 5.62842 28.2904 5.53126 27.5827C5.40292 26.6403 5.66692 25.6871 6.26459 24.9328C6.53592 24.5888 6.91909 24.3003 7.51126 23.9384C8.38576 23.4063 8.94676 22.4997 8.94676 21.5C8.94676 20.5002 8.38576 19.5936 7.51309 19.0633C6.91909 18.6996 6.53592 18.4111 6.26276 18.0671C5.96774 17.6946 5.7512 17.2686 5.62564 16.8137C5.50009 16.3589 5.46801 15.8843 5.53126 15.4173C5.62842 14.7113 6.05742 13.9875 6.91909 12.5416C7.78076 11.0958 8.20976 10.3737 8.79276 9.93834C9.57009 9.35963 10.5528 9.10521 11.5244 9.22883C11.9681 9.28617 12.4173 9.46175 13.0369 9.78067C13.4819 10.0169 13.9808 10.1394 14.4871 10.1369C14.9935 10.1344 15.4911 10.0069 15.9336 9.76634C16.8246 9.26467 17.3526 8.34196 17.3911 7.34221C17.4186 6.66138 17.4846 6.19554 17.6569 5.796C18.0309 4.91809 18.7496 4.21934 19.6553 3.85563C20.3336 3.58329 21.1953 3.58329 22.9168 3.58329C24.6383 3.58329 25.4999 3.58329 26.1783 3.85563C27.0813 4.21792 27.8001 4.91587 28.1766 5.796C28.3489 6.19554 28.4149 6.66138 28.4424 7.34221C28.4791 8.34196 29.0089 9.26646 29.9018 9.76634C30.3441 10.0066 30.8413 10.1339 31.3473 10.1364C31.8533 10.1389 32.3518 10.0165 32.7966 9.78067C33.4163 9.46175 33.8654 9.28617 34.3091 9.22883C35.2808 9.10342 36.2634 9.35963 37.0408 9.93834C37.6238 10.3719 38.0546 11.0958 38.9144 12.5416C39.7761 13.9875 40.2051 14.7095 40.3023 15.4173C40.3652 15.8844 40.3329 16.3591 40.207 16.8139C40.0811 17.2688 39.8643 17.6947 39.5689 18.0671C39.2976 18.4111 38.9144 18.6996 38.3223 19.0615C37.4478 19.5936 36.8868 20.5002 36.8868 21.5C36.8868 22.4997 37.4478 23.4063 38.3204 23.9366C38.9144 24.3003 39.2976 24.5888 39.5708 24.9328C39.8658 25.3054 40.0823 25.7314 40.2079 26.1862C40.3334 26.641 40.3655 27.1157 40.3023 27.5827C40.2051 28.2886 39.7761 29.0124 38.9144 30.4583C38.0528 31.9042 37.6238 32.6262 37.0408 33.0616C36.2615 33.6407 35.2797 33.8956 34.3091 33.7711C33.8654 33.7138 33.4163 33.5382 32.7966 33.2193C32.3516 32.9831 31.8528 32.8605 31.3464 32.863C30.84 32.8655 30.3424 32.993 29.8999 33.2336C29.4661 33.4832 29.1047 33.8368 28.8496 34.261C28.5946 34.6852 28.4545 35.1659 28.4424 35.6577C28.4149 36.3385 28.3489 36.8044 28.1766 37.2039C27.9902 37.6398 27.7178 38.0355 27.375 38.3684C27.0321 38.7013 26.6254 38.965 26.1783 39.1443Z"
      fill="black"
    />
    <Path
      d="M28.4588 21.5C28.4588 18.5312 25.9765 16.125 22.9167 16.125C19.855 16.125 17.3745 18.5312 17.3745 21.5C17.3745 24.4688 19.855 26.875 22.9167 26.875C25.9783 26.875 28.4588 24.4688 28.4588 21.5Z"
      fill="black"
    />
  </Svg>
);

export default SettingsIcon;
