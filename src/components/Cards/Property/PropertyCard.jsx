import CardStyled from "./style"

const PropertyCard = ({ subtitle, title, text }) => {
    return (<CardStyled>
        <CardStyled.TitleTop>
            {subtitle}
        </CardStyled.TitleTop>
        <CardStyled.Title>
            {title}
        </CardStyled.Title>
        <CardStyled.Text>
            {text}
        </CardStyled.Text>
    </CardStyled>
    )
}

export default PropertyCard