import React from 'react';

const Card = ({ title, image, dataPoint1, dataPoint2 }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg transition-transform transform hover:scale-105">
            <img className="w-full" src={image} alt={title} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">{dataPoint1}</p>
                <p className="text-gray-700 text-base">{dataPoint2}</p>
            </div>
        </div>
    );
};

const Card1 = () => {
    const cardsData = [
        {
            title: 'Card Title 1',
            image: 'https://via.placeholder.com/300',
            dataPoint1: 'Data Point 1: Description of the first data point.',
            dataPoint2: 'Data Point 2: Description of the second data point.',
        },
        {
            title: 'Card Title 2',
            image: 'https://via.placeholder.com/300',
            dataPoint1: 'Data Point 1: Description of the first data point.',
            dataPoint2: 'Data Point 2: Description of the second data point.',
        },
        {
            title: 'Card Title 3',
            image: 'https://via.placeholder.com/300',
            dataPoint1: 'Data Point 1: Description of the first data point.',
            dataPoint2: 'Data Point 2: Description of the second data point.',
        },
    ];

    return (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {cardsData.map((card, index) => (
                <Card
                    key={index}
                    title={card.title}
                    image={card.image}
                    dataPoint1={card.dataPoint1}
                    dataPoint2={card.dataPoint2}
                />
            ))}
        </div>
    );
};

export default Card1;