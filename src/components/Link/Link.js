import isPropValid from '@emotion/is-prop-valid';
import styled from '@emotion/styled';
import MuiLink from '@mui/material/Link';
import NextLink from 'next/link';
// const Link = ({children,href="/",...props}) => <NextLink href={href}><a {...props}>{children}</a></NextLink>
const StyledLink = styled(MuiLink,{
  shouldForwardProp:isPropValid
})`
  cursor:pointer;
  text-decoration:none;
`
// StyledLink.defaultProps = {underline:"none"}
const Link = ({children,href="/",...props}) => <NextLink href={href}><StyledLink {...props}>{children}</StyledLink></NextLink>
export default Link;