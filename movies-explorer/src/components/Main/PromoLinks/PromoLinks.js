import './PromoLinks.css';
import "../AboutMe/AboutMe";
import "../AboutProject/AboutProject";
import "../Techs/Techs";

const PromoLinks = () => {
    return (
        <section className="promo-links">
            <div className="promo-links__container">
                <div className="promo-links__link">
                    <a className="promo-links__link_item" href="#about-project">О проекте</a>
                    <a className="promo-links__link_item" href="#techs">Технологии</a>
                    <a className="promo-links__link_item" href="#about-me">Студент</a>
                </div>
            </div>
        </section>
    );
};

export default PromoLinks;
