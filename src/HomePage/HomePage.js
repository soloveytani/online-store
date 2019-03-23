import React from 'react';
import './HomePage.scss';
import IPhone from './i_love_phone.svg';
import LogoStore from './store-icon.svg';
import PhonePanel from './maxresdefault.jpg';
import Slider from "react-slick";
import benefitImage from './iPhone-User.png';
import applePhones from './data/apple'
import samsungPhones from './data/samsung';
import honorPhones from './data/honor';

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
                    </div>
                </header>
                <section className="hp-phone-panel">
                    <img src={ PhonePanel } alt=""/>
                    <div className="hp-standart-width hp-take-yours">Знакомься с семейством современных телефонов</div>
                </section>
                <ProductsSection settings={ settings } title="Самые популярные продукты" phoneData={ applePhones }/>
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
                <ProductsSection settings={ settings } title="Apple" phoneData={ applePhones }/>
                <ProductsSection settings={ settings } title="Samsung" phoneData={ samsungPhones }/>
                <ProductsSection settings={ settings } title="Honor" phoneData={ honorPhones }/>
                <button className="hp-store-button"><img src={ LogoStore } alt=""/></button>
                <footer className="hp-footer">
                    <p>Contacts: +7 (911) 555-55-55</p>
                </footer>
            </div>
            
        );
    }
}

export default HomePage;