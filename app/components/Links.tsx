import React from 'react'
import Link from 'next/link'
import LinkType from '../interface'

const Links = ({ href, title, linkClass }: LinkType) => {
  return (
    <div>
        <Link 
            href={href}
            className={`${linkClass}`}
        >
            { title }
        </Link>
    </div>
  )
}

export default Links