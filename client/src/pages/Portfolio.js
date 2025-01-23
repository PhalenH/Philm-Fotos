import React from 'react';

const Portfolio = () => {
    const portfolioData = {
        2023: [
            { src: 'photo1.jpg', description: 'Description for photo 1' },
            { src: 'photo2.jpg', description: 'Description for photo 2' },
        ],
        2024: [
            { src: 'photo3.jpg', description: 'Description for photo 3' },
            { src: 'photo4.jpg', description: 'Description for photo 4' },
        ],
        2025: [
            { src: 'photo5.jpg', description: 'Description for photo 5' },
            { src: 'photo6.jpg', description: 'Description for photo 6' },
        ],
    };

    return (
        <div>
            {Object.keys(portfolioData).map(year => (
                <div key={year}>
                    <h2>{year}</h2>
                    <div className="photo-container">
                        {portfolioData[year].map((photo, index) => (
                            <div key={index} className="photo-item">
                                <img src={photo.src} alt={`From ${year}`} />
                                <p>{photo.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Portfolio;