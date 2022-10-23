import { BannerBox } from "./style"

const CollectionBanner = ({image="https://static.opensea.io/solana/explore-solana.png",...rest}) => {
  return (
    <BannerBox {...rest}>
      <img src={image} alt="" />
    </BannerBox>
  )
}

export default CollectionBanner