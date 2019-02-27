import React from 'react';
import './HomePage.scss';
import IPhone from './i_love_phone.svg';
import PhonePanel from './maxresdefault.jpg';

const samplePhone = {
    imgUrl: 'https://img.mvideo.ru/Pdb/30030153b.jpg',
    name: 'Iphone 8',
    description: '64 gb Gold (MQ6J2RU/A)',
    cost: '44990 руб.'
}

const samplePhones = [
    samplePhone,
    samplePhone,
    samplePhone,
    samplePhone,
    samplePhone,
    samplePhone
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
                    <div className="hp-standart-width products-list">
                        { samplePhones.map((value, index) =>
                            <Card phoneInfo={ value } key={index}/> 
                        ) }
                    </div>
                </section>
            </div>
            
        );
    }
}

export default HomePage;