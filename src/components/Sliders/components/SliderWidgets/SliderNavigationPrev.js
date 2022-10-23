import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import React from "react";
import { Navigation } from "./style";
// const SliderNavigationPrev = React.forwardRef(({...rest}, ref) => (
//   <Navigation className={`swiper-navigation-left`} ref={ref} {...rest}>
//       <ChevronLeftIcon/>
//   </Navigation>
// ));
const SliderNavigationPrev = ({...rest}) => (
  <Navigation className={`swiper-navigation-left`}{...rest}>
      <ChevronLeftIcon/>
  </Navigation>
);

export default SliderNavigationPrev;