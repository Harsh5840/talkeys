'use client'

import React, { useEffect, useRef, useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/swiper-bundle.css'
import Image from 'next/image'
import image from "../public/images/community.png"
import { useRouter } from 'next/navigation'

interface CommunityCard {
  date: string
  title: string
  performer: string
  image: any
}

const communityCards: CommunityCard[] = [
  { date: '21 MAY', title: 'Sunday Salsa', performer: 'DEBORAH DE LUCA', image: image },
  { date: '22 MAY', title: 'Monday Blues', performer: 'JOHN DOE', image: image },
  { date: '23 MAY', title: 'Tuesday Jazz', performer: 'JANE SMITH', image: image },
  { date: '24 MAY', title: 'Wednesday Rock', performer: 'ROCK BAND', image: image },
  { date: '25 MAY', title: 'Thursday Pop', performer: 'POP STAR', image: image },
  { date: '26 MAY', title: 'Friday Funk', performer: 'FUNK BAND', image: image },
]

export default function CommunityCarousel() {
  const router = useRouter()

  const handleShowAllCommunities = () => {
    router.push('/communities')
  }

  return (
    <div className='mb-[-80px]'>
      <div className='community w-full bg-transparent text-white p-10'>
        <div className="w-full bg-transparent text-white p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Featured Communities</h2>
            <Button variant="outline" onClick={handleShowAllCommunities}>Show All Communities</Button>
          </div>
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {communityCards.map((card, index) => (
              <SwiperSlide key={index}>
                <Card className="bg-gray-950 border-none">
                  <CardContent className="p-0">
                    <Image
                      src={card.image}
                      alt={card.title}
                      width={300}
                      height={400}
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-4">
                      <div className="text-sm text-red-500 mb-2">{card.date}</div>
                      <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                      <h4 className="text-lg mb-4">{card.performer}</h4>
                      <Button variant="outline" className="w-full">More info</Button>
                    </div>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}