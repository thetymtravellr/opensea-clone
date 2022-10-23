
import Card from "./style";

export default function ProfileCard({ href = "/", cover, avatar, title }) {

  return (

    <Card href="/collection-details">

      <Card.Image>
        <img src={cover || '/images/profile-product-image.png'} alt="" />
      </Card.Image>
      <Card.TextBody>
        <Card.Profile>
          <Card.ProfileImage>
            <img src={avatar || '/images/profile-image.png'} alt="" />
          </Card.ProfileImage>
          <Card.ProfileText>
            {title || 'omgkirby x CT'}
          </Card.ProfileText>
        </Card.Profile>
      </Card.TextBody>

    </Card>

  )
}