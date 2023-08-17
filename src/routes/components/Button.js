import React from 'react';

const Button = ({ src, alt, onClick }) => {
    return (
        <button onClick={onClick} style={{ border: 'none', background: 'none', cursor: 'pointer' }}>
            <img src={src} alt={alt} />
        </button>
    );
};

export default Button;
