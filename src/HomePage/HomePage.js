import React from 'react';
import './HomePage.scss';
import IPhone from './i_love_phone.svg';
import PhonePanel from './maxresdefault.jpg';
import Slider from "react-slick";

const iphone8 = {
    imgUrl: 'https://img.mvideo.ru/Pdb/30030153b.jpg',
    name: 'Iphone 8',
    description: '64 gb Gold (MQ6J2RU/A)',
    cost: '44990 руб.'
}

const iphoneXSMax = {
    imgUrl: 'https://img.mvideo.ru/Pdb/30040031b.jpg',
    name: 'Iphone XS Max',
    description: '512GB Gold (MT582RU/A)',
    cost: '117990 руб.'
}

const iphoneXRY = {
    imgUrl: 'https://img.mvideo.ru/Pdb/30040041b.jpg',
    name: 'iPhone XR',
    description: '128GB Yellow (MRYF2RU/A)',
    cost: '64990 руб.'
}

const iphoneXRC = {
    imgUrl: 'https://img.mvideo.ru/Pdb/30039935b.jpg',
    name: 'iPhone XR',
    description: '256GB Coral (MRYP2RU/A)',
    cost: '70990 руб.'
}

const iphoneX = {
    imgUrl: 'https://img.mvideo.ru/Pdb/30030163b.jpg',
    name: 'iPhone X',
    description: '64GB Space Gray (MQAC2RU/A)',
    cost: '63990 руб.'
}

const samplePhones = [
    iphone8,
    iphoneXSMax,
    iphoneXRY,
    iphoneXRC,
    iphoneX,
    iphone8
];

const Card = (props) => (
    <div className="phone-info-card">
        <img src={ props.phoneInfo.imgUrl } alt=""/>
        <p>{ props.phoneInfo.name }</p>
        <p className="bold-tip">{ props.phoneInfo.cost }</p>
        <p className="gray-tip">{ props.phoneInfo.description }</p>
    </div>
);

class HomePage extends React.Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4
          };
        return (
            <div>   
                <header className="hp-header">
                    <div className="hp-standart-width">
                        <img src={ IPhone } alt="IPhone" className="hp-logo"/>
                        <p>Contacts: +7 (911) 555-55-55</p>
                    </div>
                </header>
                <section className="hp-phone-panel">
                    <img src={ PhonePanel } alt=""/>
                    <div className="hp-standart-width hp-take-yours">Возьми своё, не стесняйся</div>
                </section>
                <section className="hp-products-section">
                    <div className="hp-standart-width hp-section-label">Самые популярные продукты</div>
                    <div className="hp-standart-width products-list">
                        <Slider {...settings}>
                            { samplePhones.map((value, index) =>
                                <Card phoneInfo={ value } key={index}/> 
                            ) }
                        </Slider>
                    </div>
                </section>
            </div>
            
        );
    }
}

export default HomePage;