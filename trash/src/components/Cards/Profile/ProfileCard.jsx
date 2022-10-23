
import Link from "next/link";
import Card from "./style";

export default function ProfileCard({href="/"}){
  return(
    <Card>
      <Card.Image>
        <img src="/images/profile-product-image.png" alt=""/>
      </Card.Image>
      <Card.TextBody>
          <Card.Profile>
              <Card.ProfileImage>
                <img src="/images/profile-image.png" alt="" />
              </Card.ProfileImage>
              <Card.ProfileText>
                omgkirby x CT
              </Card.ProfileText>
          </Card.Profile>
      </Card.TextBody>
    </Card>
  )
}