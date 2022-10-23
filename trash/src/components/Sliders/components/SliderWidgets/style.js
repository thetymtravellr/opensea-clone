import styled from "@emotion/styled";

export const Navigation = styled.button`
        position:absolute;
        cursor:pointer;
        top: 50%;
        z-index: 2;
        border-radius: 50%;
        box-shadow: rgb(0 0 0 / 15%) 0px 4px 10px;
        background-color: rgb(255, 255, 255);
        font-size:40px;
        display: inline-flex;
        -webkit-box-align: center;
        align-items: center;
        border: 0px;
        z-index:99;
        transform: translateY(-50%);
        @media (min-width:1200px){
            padding: 10px;
        }
        svg{
            pointer-events:none;
        }
    ${p=> !p.next && `
        left:10px;
        @media (min-width:1200px){
            left:0;
            transform: translateY(-50%) translateX(-50%);
        }
    `}
    ${p=> p.next && `
        right:10px;
        @media (min-width:1200px){
            right:0;
            transform: translateY(-50%) translateX(50%);
        }
    `}
        
    }
}

`