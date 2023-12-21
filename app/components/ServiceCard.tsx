import React from 'react'
import { ServiceCardType } from '../interface'

const ServiceCard = ({ source, alt, title, content, link, cardClass }: ServiceCardType) => {
  return (
    <div className={`${cardClass}`}>
        <div className="card w-96 bg-base-100 shadow-xl image-full">
            <figure>
                <img src={source} alt={alt} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{content}</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">{link}</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ServiceCard