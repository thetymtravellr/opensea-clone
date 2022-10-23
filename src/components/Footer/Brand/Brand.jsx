import Container from "~containers/Layouts/Container";
import BrandOne from "~svg/brands/1.svg";
import BrandTwo from "~svg/brands/2.svg";
import BrandThree from "~svg/brands/3.svg";
import BrandFour from "~svg/brands/4.svg";
import BrandFive from "~svg/brands/5.svg";
import BrandSix from "~svg/brands/6.svg";
import BrandStyled from "./style";
const BrandSection = () => {
  return (
    <BrandStyled>
      <BrandStyled.Container>
          <BrandStyled.Single>
            <BrandOne />
          </BrandStyled.Single>
          <BrandStyled.Single>
            <BrandTwo />
          </BrandStyled.Single>
          <BrandStyled.Single>
            <BrandThree />
          </BrandStyled.Single>
          <BrandStyled.Single>
            <BrandFour />
          </BrandStyled.Single>
          <BrandStyled.Single>
            <BrandFive />
          </BrandStyled.Single>
          <BrandStyled.Single>
            <BrandSix />
          </BrandStyled.Single>
      </BrandStyled.Container>
    </BrandStyled>
  );
};

export default BrandSection;
