import React, { Component } from 'react';
import { albumImagesLinks as images } from '../../../service.js'
import './Album.css';

export default class Album extends Component {


    render() {
        return (
            <div className="album">
                {images.map((image, i) => <div className='album-image' key={i}>
                    <img
                        src={image.src}
                        alt={image.alt}
                    />
                </div>)}
            </div>
        )
    }
}



