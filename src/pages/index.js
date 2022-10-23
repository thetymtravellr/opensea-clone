import { useContext } from 'react'
import Header from '~components/Header'
import { GlobalContext } from '~context/GlobalContext'
import Footer from "../components/Footer"
import Category from '../containers/Category'
import HomeBanner from '../containers/HomeBanner'
import LatestAndNotable from '../containers/Latest'
import Spotlight from '../containers/Spotlight'
import TrendingSection from '../containers/TrendingAndTop'
// import styles from '../styles/Home.module.css'

export default function Home() {
  const { menuOpen } = useContext(GlobalContext)

  return (
    <>
      <Header bg={menuOpen}/>
      <HomeBanner />
      <TrendingSection/>
      <LatestAndNotable />
      <Spotlight />
      <Category />
      <Footer />
    </>
  )
}
