import Lottie from "react-lottie";
import React from 'react';
import animationData from '../../loading.json';

export const Loading = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
    };

    return (
        <div>
            <Lottie options={defaultOptions} height={80} width={80} />
        </div>
    );
};
