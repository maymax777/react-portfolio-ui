import React from 'react'

function Article({url, image, title, subtitle}) {
    return (
        <article>
            <a class="thumbnail" href={ url } data-position="left center">
                <img src={ image } alt="" />
            </a>
            <h2>{ title }</h2>
            <p>{ subtitle }</p>
        </article>
    )
}

export default Article
