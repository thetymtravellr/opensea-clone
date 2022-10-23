import styled from "@emotion/styled"

export const Slider = styled.div`
&:not(.swiper-initialized){
    display:flex;
    margin:0 -7.5px;
    >div{
        width:25%;
        box-sizing: content-box;
        >div{
            padding :0 7.5px;
        }
    }
}
`

export const SliderWrapper = styled.div`
position: relative;
z-index: 1;

// .swiper-navigation{
//     &-left,&-right{
//         position:absolute;
//         cursor:pointer;
//         top: 50%;
//         z-index: 2;
//         border-radius: 50%;
//         transform: translateY(-50%) ;
//         box-shadow: rgb(0 0 0 / 15%) 0px 4px 10px;
//         background-color: rgb(255, 255, 255);
//         font-size:40px;
//         display: inline-flex;
//         -webkit-box-align: center;
//         align-items: center;
//         border: 0px;
//         left:10px;
//         z-index:99;
//         @media (min-width:1024px){
//             padding: 4px;
//         }
//         @media (min-width:1200px){
//             left:0;
//             transform: translateY(-50%) translateX(-50%);
//         }
//         svg{
//             pointer-events:none;
//         }
//     }
//     &-right{
//         left:auto;
//         right:10px;
//         @media (min-width:1200px){
//             right:0;
//             transform: translateY(-50%) translateX(50%);
//         }
//     }
// }


`