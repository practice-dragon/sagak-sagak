import {Path, Svg, SvgProps} from "react-native-svg";

interface SVGAttributeProps extends SvgProps {
  width?: number;
  height?: number;
}
const ActiveSettingIcon = ({width, height, ...props}: SVGAttributeProps) => (
  <Svg width={width} height={height} {...props} viewBox="0 0 46 45">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M27.3682 40.965C26.659 41.25 25.7582 41.25 23.9584 41.25C22.1587 41.25 21.2598 41.25 20.5487 40.965C19.6046 40.5859 18.8532 39.8554 18.4595 38.9344C18.2794 38.5163 18.2104 38.0269 18.1816 37.3162C18.1688 36.8014 18.022 36.2982 17.7551 35.8543C17.4881 35.4104 17.1098 35.0404 16.6559 34.7794C16.1935 34.5279 15.6737 34.3947 15.1447 34.3921C14.6157 34.3895 14.0945 34.5175 13.6295 34.7644C12.9817 35.0981 12.5121 35.2819 12.0483 35.3419C11.0335 35.4722 10.0072 35.2054 9.19245 34.5994C8.58295 34.1456 8.13253 33.3881 7.23362 31.875C6.33278 30.3619 5.88428 29.6063 5.7827 28.8656C5.64853 27.8794 5.92453 26.8819 6.54937 26.0925C6.83303 25.7325 7.23362 25.4306 7.8527 25.0519C8.76695 24.495 9.35345 23.5463 9.35345 22.5C9.35345 21.4537 8.76695 20.505 7.85462 19.95C7.23362 19.5694 6.83303 19.2675 6.54745 18.9075C6.23903 18.5176 6.01264 18.0718 5.88138 17.5958C5.75012 17.1198 5.71658 16.6231 5.7827 16.1344C5.88428 15.3956 6.33278 14.6381 7.23362 13.125C8.13445 11.6119 8.58295 10.8563 9.19245 10.4006C10.0051 9.795 11.0324 9.52875 12.0483 9.65812C12.5121 9.71812 12.9817 9.90187 13.6295 10.2356C14.0948 10.4828 14.6163 10.611 15.1457 10.6084C15.6751 10.6058 16.1952 10.4724 16.6579 10.2206C17.5894 9.69563 18.1414 8.73 18.1816 7.68375C18.2104 6.97125 18.2794 6.48375 18.4595 6.06563C18.8505 5.14688 19.6019 4.41563 20.5487 4.035C21.2579 3.75 22.1587 3.75 23.9584 3.75C25.7582 3.75 26.659 3.75 27.3682 4.035C28.3122 4.41415 29.0637 5.14456 29.4574 6.06563C29.6375 6.48375 29.7065 6.97125 29.7353 7.68375C29.7736 8.73 30.3275 9.6975 31.2609 10.2206C31.7234 10.4721 32.2432 10.6053 32.7722 10.6079C33.3012 10.6105 33.8224 10.4825 34.2874 10.2356C34.9352 9.90187 35.4048 9.71812 35.8686 9.65812C36.8845 9.52687 37.9118 9.795 38.7244 10.4006C39.3339 10.8544 39.7844 11.6119 40.6833 13.125C41.5841 14.6381 42.0326 15.3937 42.1342 16.1344C42.2001 16.6232 42.1662 17.12 42.0346 17.596C41.903 18.072 41.6763 18.5178 41.3675 18.9075C41.0839 19.2675 40.6833 19.5694 40.0642 19.9481C39.1499 20.505 38.5634 21.4537 38.5634 22.5C38.5634 23.5463 39.1499 24.495 40.0623 25.05C40.6833 25.4306 41.0839 25.7325 41.3694 26.0925C41.6779 26.4824 41.9043 26.9282 42.0355 27.4042C42.1668 27.8802 42.2003 28.3769 42.1342 28.8656C42.0326 29.6044 41.5841 30.3619 40.6833 31.875C39.7824 33.3881 39.3339 34.1438 38.7244 34.5994C37.9097 35.2054 36.8834 35.4722 35.8686 35.3419C35.4048 35.2819 34.9352 35.0981 34.2874 34.7644C33.8221 34.5172 33.3006 34.389 32.7712 34.3916C32.2418 34.3942 31.7217 34.5276 31.259 34.7794C30.8055 35.0406 30.4276 35.4107 30.161 35.8546C29.8944 36.2985 29.7479 36.8015 29.7353 37.3162C29.7065 38.0287 29.6375 38.5163 29.4574 38.9344C29.2625 39.3905 28.9778 39.8046 28.6193 40.153C28.2608 40.5014 27.8357 40.7774 27.3682 40.965Z"
      fill="#FF7A00"
    />
    <Path
      d="M29.7525 22.5C29.7525 19.3931 27.1573 16.875 23.9584 16.875C20.7576 16.875 18.1643 19.3931 18.1643 22.5C18.1643 25.6069 20.7576 28.125 23.9584 28.125C27.1592 28.125 29.7525 25.6069 29.7525 22.5Z"
      fill="#FFA34D"
    />
  </Svg>
);
export default ActiveSettingIcon;
