import React from 'react'
import Link from 'next/link'
import { LinkType } from "/vercel/path0/app/interface/index"

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
