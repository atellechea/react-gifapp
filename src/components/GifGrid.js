import React from 'react'
import { useFetchGif } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const { data: images, loading } = useFetchGif( category );

    return (
        <>
            <h3 className="animate__animated animate__fadeInDown"> {category} </h3>

            { loading && <p className="animate__animated animate__fadeInDown">Loading</p> }

            <div className="card-grid">
                {images.map(img =>
                    <GifGridItem
                        key={img.id}
                        {...img}
                    />
                )}
            </div>
        </>

    )
}
