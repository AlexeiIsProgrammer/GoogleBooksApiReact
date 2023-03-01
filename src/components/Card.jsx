import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = ({props}) => {
    const router = useNavigate()
    return (
    <div className='card' onClick={() => router(`/main/${props.id}`)}>
        <img src={props?.volumeInfo?.imageLinks?.thumbnail} alt="" className="card__img" />
        <div className="card__category">
            {props?.volumeInfo?.categories}
        </div>
        <h3 className="card__name">
            {props?.volumeInfo?.title}
        </h3>
        <div className="card__authors">
            {props?.volumeInfo?.authors?.map((el, ind) => <h6 key={ind}>{el}</h6>)}
        </div>
    </div>
  )
}

export default Card