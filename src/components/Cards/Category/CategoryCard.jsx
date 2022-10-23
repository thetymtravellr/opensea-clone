import Link from "../../Link";
import Card from "./style";
export default function CategoryCard({image="/images/category-card.png",title,text="Art",href="/collection-details",}){
    return(
            // !loading ?  
        <Card>
            <Link href={href}>
                <Card.Image>
                    <img src={image} alt="" className="swiper-lazy"/>
                </Card.Image>
                <Card.TextBody>
                    <Card.Text variant="xs" as="h3">{text}</Card.Text>
                </Card.TextBody>
            </Link>
        </Card> 
    )
}
