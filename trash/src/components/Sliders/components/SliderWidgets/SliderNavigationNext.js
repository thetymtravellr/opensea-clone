
// import styled from '@emotion/styled';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import React from "react";
import { Navigation } from './style';

// const SliderNavigationNext = React.forwardRef(({next,...rest}, ref) => (
//     <Navigation next className={`swiper-navigation-right`} ref={ref} {...rest}>
//        <ChevronRightIcon/>
//     </Navigation>
//   ));
const SliderNavigationNext = ({next,...rest}) => (
    <Navigation next className={`swiper-navigation-right`} {...rest}>
       <ChevronRightIcon/>
    </Navigation>
  );


// export const SliderNavigationPrev = React.forwardRef(({next,...rest}, ref) => (
//     <Navigation next={next} className={`swiper-navigation${next?"-right":"-left"}`} ref={ref} {...rest}>
//         {!next ? <ChevronLeftIcon/>: <ChevronRightIcon/>}
//     </Navigation>
//   ));

  export default SliderNavigationNext;