import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Image from '../components/Image';

function Logo() {
    const [imageSrc, setImageSrc] = useState(null);

    useEffect(() => {
        async function fetchImageData() {
            try {
                const response = await axios.get('http://91.107.217.207/jsonapi/block_content/basic/d6ee7696-ee2d-47f1-a4ba-c6b6a2ac583c?resourceVersion=id%3A1&include=field_image');
                const imageUrl = response.data.data.field_image.uri.url;
                setImageSrc(`http://91.107.217.207${imageUrl}`);
            } catch (error) {
                console.error('Error fetching the image data:', error);
            }
        }

        fetchImageData();
    }, []);

    if (!imageSrc) return <p>Loading...</p>;

    return (
        <div className="logo-header">
            <Image src={imageSrc} alt="Bloglogo" />
        </div>
    );
}

export default Logo;
