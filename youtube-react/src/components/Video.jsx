import React from 'react';

export default function Video({ image, title, channel }) {
    return (
        <article className="video-card">
            <img src={image} alt={title} />
            <footer>
                <img
                    src={`https://api.dicebear.com/8.x/identicon/svg?seed=${channel}`}
                    alt=""
                />
                <p className="video-card-title">{title}</p>
                <p className="video-card-channel">{channel}</p>
            </footer>
        </article>
    );
}

