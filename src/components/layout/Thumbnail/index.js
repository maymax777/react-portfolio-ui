import React from 'react'
import Article from 'components/common/Article';
import { articles } from 'utils/constants.js';

function Thumbnail() {
    return (
        <div>
            {articles.map(article => <Article key={article.image} {...article}/>)}
        </div>
    )
}

export default Thumbnail
