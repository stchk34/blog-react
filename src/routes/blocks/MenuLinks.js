import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MenuLinks() {
    const [menuLinks, setMenuLinks] = useState([]);

    useEffect(() => {
        async function fetchMenuLinks() {
            try {
                const response = await axios.get('http://91.107.217.207/jsonapi/menu_link_content/menu_link_content');
                const links = response.data.data;
                setMenuLinks(links);
            } catch (error) {
                console.error('Error fetching menu links:', error);
            }
        }

        fetchMenuLinks();
    }, []);

    return (
        <div className="menu-links">
            <ul>
                {menuLinks.map(link => (
                    <li key={link.id}>{link.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default MenuLinks;