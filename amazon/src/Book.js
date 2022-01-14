import React from 'react'

const Book = (props) => {
    const sym=">"
    const {img, title, author}=props.book
    return (
        <div className='column'>
            <img className='img' src={img}></img>
            <p className='title' >{title}</p>
            <p className='author'>{sym}{author}</p>
        </div>
    )
}

export default Book
