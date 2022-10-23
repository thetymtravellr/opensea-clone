import TrendingSection from '../components/TrendingAndTop'
import Category from '../containers/Category'
import HomeBanner from '../containers/HomeBanner'
import LatestAndNotable from '../containers/Latest'
import Spotlight from '../containers/Spotlight'
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <HomeBanner/>
      <TrendingSection/>
      <LatestAndNotable/>
      <Spotlight/>
      <Category/>
    </>
  )
}
