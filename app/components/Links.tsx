import React from 'react'
import Link from 'next/link'
import { LinkType } from '../interface'

const Links = ({ href, title, linkClass }: LinkType) => {
  return (
    <div className='p-0 m-0'>
      <Link
        href={href}
        className={`${linkClass}`}
      >
        {title}
      </Link>
    </div>
  )
}

export default Links
