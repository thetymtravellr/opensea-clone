import { Container } from "@mui/material";
import { ProfileStyled } from "./style"

const ProfileBreadcrumb = () => {
  return(
    <ProfileStyled>
      <ProfileStyled.Image>
        <img src="/images/profile-product-image-lg.png" alt="product" />
      </ProfileStyled.Image>
      <Container>
        <ProfileStyled.ImageSmall>
          <img src="/images/profile-image-sm.png" alt="product small"/>
        </ProfileStyled.ImageSmall>
      </Container>
    </ProfileStyled>
  )
}

export default ProfileBreadcrumb;