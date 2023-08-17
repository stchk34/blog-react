import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Image from '../components/Image';

function SocialLinks() {
    const [socialLinks, setSocialLinks] = useState([]);

    useEffect(() => {
        async function fetchSocialLinks() {
            try {
                const response = await axios.get('http://91.107.217.207/jsonapi/block_content/social_links/da13c4ff-fea5-48e6-bedb-7ede57c8f29d?resourceVersion=id%3A2&include=field_social_links.field_icon_svg');
                const links = response.data.data.field_social_links.uri.url;
                setSocialLinks(`http://91.107.217.207${links}`);
            } catch (error) {
                console.error('Error fetching social links:', error);
            }
        }

        fetchSocialLinks();
    }, []);

    return (
        <div className="social-links">
            <ul>
                {socialLinks.map((link, index) => (
                    <li key={index}>
                        <a href={link.uri}>
                            <Image src={setSocialLinks} alt={link.title} width={link.icon.svg.meta.width} height={link.icon.svg.meta.height} />
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SocialLinks;
