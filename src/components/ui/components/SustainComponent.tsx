'use client'
import { sustainabilityList } from '@/data/data'
import React from 'react'
import SustainCard from './SustainCard'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function SustainComponent(){

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(()=>{
    gsap.from('.sustainCard', {
      opacity: 0,
      duration: 1,
      delay: 0,
      y: 40,
      stagger:1,
      scrollTrigger:{
        trigger:'.sustainCard',
        start:'top 90%',
        end:'top 70%',
        scroller:'body',
        scrub: 2
      }
    })
  })

  return (
    <div className="mt-[30px] grid grid-cols-12 gap-[8px] md:gap-x-[18px] md:gap-y-[26px]">

        {
          sustainabilityList.map((green)=> <SustainCard img={green?.img} title={green?.title} about={green?.about}/>)
        }

    </div>
  )
}

