import React from 'react';

const Navigation = ({link, text}) => {
    return (
        <>
            <ul>
                <li>
                    <a href={link}>{ text }</a>
                </li>
            </ul>
        </>
    )
}

export default Navigation;