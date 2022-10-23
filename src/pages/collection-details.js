import Header from "~components/Header"
import ProfileDetails from "../components/ProfileDetails"
import CollectionDetailsContent from "../containers/AllNft/All"

export default function CollectionDetailsPage() {
  return (
    <>
      <Header bg={true}/>
      <ProfileDetails />
      <CollectionDetailsContent />
    </>
  )
}
