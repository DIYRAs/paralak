'use client'

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

export default function Home() {
  const scrollTrigger1 = useRef(null)
  const moveToRight1 = useRef(null)
  const moveToRight2 = useRef(null)

  const moveToLeft1 = useRef(null)
  const moveToLeft2 = useRef(null)

  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    gsap.to(moveToRight2.current, {
      scrollTrigger: {
        trigger: scrollTrigger1.current,
        scrub: 1,
        markers: true
      },
      translateX: 1000
    })
    gsap.to(moveToRight1.current, {
      scrollTrigger: {
        trigger: scrollTrigger1.current,
        scrub: 1,
        markers: true
      },
      translateX: 100
    })

    gsap.to(moveToLeft2.current, {
      scrollTrigger: {
        trigger: scrollTrigger1.current,
        scrub: 1,
        markers: true
      },
      translateX: -1000
    })
    gsap.to(moveToLeft1.current, {
      scrollTrigger: {
        trigger: scrollTrigger1.current,
        scrub: 1,
        markers: true
      },
      translateX: -100
    })
  }, [])

  return (
    <>
      <div className="relative flex flex-col items-center justify-end w-full h-screen bg-zinc-700">

        <div
          className="relative w-full h-full bg-zinc-300">

          <div
            ref={moveToRight2}
            className="absolute bottom-0 right-0 w-2/4 h-2/3 bg-zinc-600" />
          <div
            ref={moveToLeft2}
            className="absolute bottom-0 left-0 w-2/4 h-2/3 bg-zinc-600" />

          <div
            ref={moveToRight1}
            className="absolute bottom-0 right-0 w-2/5 h-24 bg-zinc-800" />
          <div
            ref={moveToLeft1}
            className="absolute bottom-0 left-0 w-2/5 h-24 bg-zinc-800" />
        </div>
        <div
          className="w-full h-56 bg-zinc-500" />
      </div>

      <div
        ref={scrollTrigger1}
        className="w-full h-screen bg-zinc-800">

      </div>
    </>
  );
}