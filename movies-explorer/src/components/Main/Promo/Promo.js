import "./Promo.css";
// import "../AboutMe/AboutMe";
// import "../AboutProject/AboutProject";
// import "../Techs/Techs";

const Promo = () => {
  return (
    <section className="promo">
      <div className="promo__container">
        <div className="promo__wrapper">
          <h1 className="promo__title">
            Учебный проект студента
            факультета Веб&#8209;разработки.
            </h1>
          {/*<p className="promo__subtitle">*/}
          {/*  Листайте ниже, чтобы узнать больше про этот проект и его создателя.*/}
          {/*</p>*/}
          {/*<button className="promo__button">Узнать больше</button>*/}
        </div>
        {/*<div className="promo__link">*/}
        {/*  <a className="promo__link_item" href="#about-project">О проекте</a>*/}
        {/*  <a className="promo__link_item" href="#techs">Технологии</a>*/}
        {/*  <a className="promo__link_item" href="#about-me">Студент</a>*/}
        {/*</div>*/}
        {/*<img className="promo__image-logo" src={logoPromo} alt="Логотип"></img>*/}
      </div>
    </section>
  );
};

export default Promo;
