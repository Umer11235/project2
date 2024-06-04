import React from 'react';
import {Dna} from 'react-loader-spinner';
import '../../../node_modules/react-js-loader/Box/Box1/style.css';

const CustomLoader: React.FC = () => {
    return (

        <div className='reactloader'>

        <Dna />
        </div>

    );
};

export default CustomLoader;