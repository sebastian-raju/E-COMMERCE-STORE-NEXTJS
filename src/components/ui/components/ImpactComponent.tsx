'use client'
import { impactList } from '@/data/data'
import React from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ImpactCard from './ImpactCard';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


export default  function ImpactComponent() {

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(()=>{
    gsap.from('.impactCard',{
      opacity: 0,
      duration: 1,
      delay: 0,
      y: 40,
      stagger:1,
      scrollTrigger:{
        trigger:'.impactCard',
        start:'top 90%',
        end:'top 70%',
        scroller:'body',
        scrub: 2
      }
    })
  })

  return (
    <div className="impact_grid grid w-[100%] grid-cols-12 gap-[14px] md:gap-[22px]">

          {
            impactList?.map((impact) => 
            <ImpactCard key={impact.title} img={impact?.img} title={impact?.title} number={impact?.number} metric={impact?.metric} about={impact?.about}/>)
          }

        </div>
  )
}
