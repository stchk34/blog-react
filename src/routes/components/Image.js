import React from 'react';

const Image = ({ imageUrl, altText }) => {
    return <img src={imageUrl} alt={altText} />;
};

export default Image;
