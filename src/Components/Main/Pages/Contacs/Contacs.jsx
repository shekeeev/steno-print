import React from 'react';
import k from './Contacs.module.css'
import frame from '../../../../Assets/Images/Frame 88 (1).png'
import cheaat from '../../../../Assets/Images/cheaat.png'
import framee from '../../../../Assets/Images/Frame 267.png'
import offer from '../../../../Assets/Images/offer (1).png'
const Contacs = () => {
    return (
        <div className={k.body}>
            <div className={k.container}>


                <div className={k.blog}>
                    <img src={frame} alt="" />
                    <h2>Контакты </h2>
                </div>
                <div className={k.display}>
                    <img width={590} height={357} src={cheaat} alt="" />
                    <img width={708} height={400} src={framee} alt="" />
                </div>

                <img className={k.iiii} src={offer} alt="" />
            </div>
        </div>
    );
};

export default Contacs;