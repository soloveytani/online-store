import React from 'react';
import './HomePage.scss';
import IPhone from './i_love_phone.svg';
import PhonePanel from './maxresdefault.jpg';
import Slider from "react-slick";
import benefitImage from './iPhone-User.png';

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

const ProductsSection = (props) => (
    <section className="hp-products-section">
        <div className="hp-standart-width hp-section-label">{ props.title }</div>
        <div className="hp-separator"></div>
        <div className="hp-standart-width products-list">
            <Slider {...props.settings}>
                { props.phoneData.map((value, index) =>
                    <Card phoneInfo={ value } key={index}/> 
                ) }
            </Slider>
        </div>
    </section>
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
                <ProductsSection settings={ settings } title="Самые популярные продукты" phoneData={ samplePhones }/>
                <section className="hp-benefits-section">
                    <div className="hp-standart-width hp-section-label">Наши преимущества</div>
                    <div className="hp-separator"></div>
                    <div className="hp-standart-width">
                        <div className="hp-benefits-container">
                            <p>
                                Компания ILovePhone работает на рынке сотовой связи и аксессуаров с 2016 года. 
                                Мы предлагаем нашим покупателям самый широкий ассортимент мобильных телефонов, 
                                смартфонов, планшетов и гаджетов. В нашем магазине представлены 
                                самые популярные модели аппаратов от ведущих мировых марок: Apple, Samsung, Xiaomi, 
                                Sony, LG, HTC, One Plus, Meizu и др.
                            </p>
                            <div className="half-width">
                                <img src={ benefitImage } alt=""/>
                            </div>
                            <div className="half-width">
                                <ul>
                                    <li>Мы всегда поможем сделать правильный выбор смартфона или планшета из нашего каталога, 
                                        который регулярно пополняется новинками рынка сотовой связи
                                    </li>
                                    <li>В дополнении к привлекательным ценам на продукцию, мы также предоставляем дополнительные 
                                        скидки и акции на множество моделей
                                    </li>
                                    <li>Вы можете купить понравившийся товар круглосуточно, 
                                        приём заказов в интернет-магазине осуществляется 24 часа в сутки
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <ProductsSection settings={ settings } title="Apple" phoneData={ samplePhones }/>
            </div>
            
        );
    }
}

export default HomePage;