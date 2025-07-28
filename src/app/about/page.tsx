'use client'
import React from 'react'

// import WorkingProcess from '@/components/about/WorkingProcess';
import Expertise from '@/components/about/Expertise';
import TeamSection from '@/components/about/TeamSection';
// import DiscoverSection from '@/components/about/DiscoverSection';
import PageHero from '@/components/shared/PageHero';

const page = () => {

  const aboutTitle = 'Top Software Development Company in Miami | Custom Web & App Solutions';
  const aboutPage = 'About Us';


  return (
    <>
      <PageHero page={aboutPage} title={aboutTitle} />
      <TeamSection />
      <Expertise />
      {/* <WorkingProcess /> */}
      {/* <DiscoverSection /> */}
    </>
  )
}

export default page