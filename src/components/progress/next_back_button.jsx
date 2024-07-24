import React from 'react';

const NextBackButton = ({ setActive, price, setTotalPrice }) => {
    const handleNext = () => {
        setTotalPrice((prev) => prev + price);
        setActive((prev) => prev + 1);
    };

    const handleBack = () => {
        setTotalPrice((prev) => prev - price);
        setActive((prev) => prev - 1);
    };

    return (
        <div>
            <button onClick={handleBack}>Back</button>
            <button onClick={handleNext}>Next</button>
        </div>
    );
};

export default NextBackButton;