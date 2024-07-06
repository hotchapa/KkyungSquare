'use client'
import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styled from 'styled-components'
import Link from 'next/link'

gsap.registerPlugin(ScrollTrigger)

const EventWrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  gap: 2em;
`
const EnterButton = styled.div`
  width: 40em;
  height: 40em;
  text-decoration: none;
  background-color: ${({ theme }) => theme.color.light};
  margin-bottom: 30em;
  color: ${({ theme }) => theme.color.dark};
  display: flex;
  align-items: center;
  justify-content: center;
`
const Box = styled.div`
  width: 100em;
  height: 80em;
  opacity: 0;
  margin-bottom: 20em;
  background-color: aqua;
  transform: translateY(100px);
`

const Box2 = styled(Box)`
  background-color: blue;
`

const Box3 = styled(Box)`
  background-color: #463939;
`

export default function HomeEvent() {
  const root = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const elements = gsap.utils.toArray<HTMLElement>('.box, .box2, .box3')
      elements.forEach((element, index) => {
        let animationOptions = {}
        if (element.classList.contains('box')) {
          animationOptions = {
            opacity: 1,
            scaleY: 0,
            duration: 13.5,
            scrollTrigger: {
              trigger: element,
              ease: 'power3.inOut',
              start: 'top 10%',
              end: 'top -10%',
              scrub: true,
              toggleActions: 'play reverse play reverse',
              markers: true,
            },
          }
          gsap.set(element, { scaleY: 1 }) // 초기 x 위치 설정
        } else if (element.classList.contains('box2')) {
          animationOptions = {
            opacity: 1,
            x: -100,
            duration: 1.5,
            z: -2000,
            ease: 'power3.inOut',
            scrollTrigger: {
              trigger: element,
              start: 'top 80%',
              end: 'top 20%',
              scrub: true,
              toggleActions: 'play reverse play reverse',
              markers: true,
            },
          }
          gsap.set(element, { x: 0 }) // 초기 x 위치 설정
        } else if (element.classList.contains('box3')) {
          animationOptions = {
            opacity: 1,
            x: 100,
            duration: 1.5,
            scrollTrigger: {
              trigger: element,
              start: 'top 80%',
              end: 'top 20%',
              scrub: true,
              toggleActions: 'play reverse play reverse',
              markers: true,
            },
          }
        }
        gsap.fromTo(element, { opacity: 0, x: 0 }, animationOptions)
      })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <>
      <EventWrapper ref={root}>
        <Box className="box" />
        <Box2 className="box2" />
        <Box3 className="box3" />
        <Box className="box" />
        <Box2 className="box2" />
        <Box3 className="box3" />
        <Box className="box" />
        <Box2 className="box2" />
        <Box3 className="box3" />
        <Link href={'/cafe'}>
          <EnterButton>
            <h1>입장하기</h1>
          </EnterButton>
        </Link>
      </EventWrapper>
    </>
  )
}
