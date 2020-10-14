import React from 'react'
import Coverflow from 'react-coverflow';

function Carousel() {
    return (
        <div>
            <Coverflow width="960" height="800"
                displayQuantityOfSide={2}
                navigation={false}
                enableScroll={true}
                clickable={true}
                active={0}
            >                
                <img src={require('assets/images/fulls/01.jpg')} alt='title or description1' data-action="http://andyyou.github.io/react-coverflow/" />
                <img src={require('assets/images/fulls/02.jpg')} alt='title or description' data-action="http://andyyou.github.io/react-coverflow/" />
                <img src={require('assets/images/fulls/03.jpg')} alt='title or description' data-action="http://andyyou.github.io/react-coverflow/" />
                <img src={require('assets/images/fulls/04.jpg')} alt='title or description' data-action="http://andyyou.github.io/react-coverflow/" />
                <img src={require('assets/images/fulls/05.jpg')} alt='title or description ' data-action="http://andyyou.github.io/react-coverflow/" />
            </Coverflow>
        </div>
    )
}

export default Carousel
