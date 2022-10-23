import { Skeleton } from "@mui/material";
import Card from "./style";
import Link from "../../Link"
export default function ProductCard({image,title,text,href="/",}){
    
    return(
            // !loading ?  
        
        <Card>
            <Link href={href}>
                <Card.Image>
                    <img src={image} alt="" className="swiper-lazy"/>
                </Card.Image>
                <Card.TextBody>
                    <Card.Title variant="base" as="h3">{title}</Card.Title>
                    <Card.Text variant="3xs">{text}</Card.Text>
                </Card.TextBody>
            </Link>
        </Card> 
    )
}
