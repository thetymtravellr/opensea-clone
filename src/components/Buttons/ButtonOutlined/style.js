import styled from "@emotion/styled";

export const ButtonStyled = styled('button')(({theme,color,iconSpacing, width, padding, fontSize, background, borderColor})=>(
  `
  display: inline-flex;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  border-radius: 12px;
  -webkit-box-pack: center;
  justify-content: center;
  font-size: ${fontSize || '16px'};
  font-weight: 600;
  line-height: 22px;
  width: 100%;
  letter-spacing: 0.01em;
  padding: ${padding || "11px 24px"};
  background: ${theme.palette.mode === "light" ? 'rgb(255, 255, 255)' : 'rgb(53, 56, 64)'};
  border: 2px solid ${theme.palette.mode === "light" ? 'rgb(255, 255, 255)' : 'rgb(53, 56, 64)'};
  color: ${theme.palette.mode === "light" ? 'rgb(32, 129, 226)' : 'rgb(255, 255, 255)'};
  width: ${width || 'auto'};
  white-space: nowrap;
  cursor:pointer;
  svg,i{
    margin-right: ${iconSpacing};
  }
`
))