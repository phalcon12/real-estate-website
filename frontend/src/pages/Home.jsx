import React, {useEffect} from 'react'
import Hero from '../components/Hero'
import FeaturedProperties from '../components/FeaturedProperties'
import Team from '../components/Team'
import Contact from '../components/Contact'

export default function Home(){
  useEffect(()=>{ document.title = 'RAB Homes — Home' },[])
  return (
    <>
      <Hero />
      <FeaturedProperties />
      <Team />
      <Contact />
    </>
  )
}
