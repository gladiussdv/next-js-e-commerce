import React from 'react'
import Link from 'next/link'
import { CtaProps } from "../models/CtaProps";



function cta (props: CtaProps) {
  const { title, route, link } = props

  if (route && route.slug && route.slug.current) {
    return (
      <Link href={`/${route.slug.current}`}>
        <a>{title}</a>
      </Link>
    )
  }

  if (link) {
    return <a href={link}>{title}</a>
  }

  return <a>{title}</a>
}

export default cta
