import './AboutMe.css';
import selfies from '../../../images/foto-me3.jpg';

const AboutMe = () => {
  return (
    <section className="about-me">
      <a id="about-me"></a>
      <div className="about-me__container">
        <h2 className="about-me__title">Студент</h2>
        <div className="about-me__presentation-wrap">
          <div className="about-me__presentation">
            <div className="about-me__resume">
              <p className="about-me__name">Евгения</p>
              <p className="about-me__job">Фронтенд-разработчик, 30 лет</p>
              <p className="about-me__story">Училась год на фронтенд-разработчика в Яндекс.Практикуме. Сейчас ищу работу по этой специальности. Увлекаюсь рукоделием.</p>
            </div>
            <div className="about-me__links">
              <a className="about-me__link" href="https://ru-ru.facebook.com" target="_blank" rel="noreferrer">Facebook</a>
              <a className="about-me__link" href="https://github.com/EvgeniaBazelan" target="_blank" rel="noreferrer">Github</a>
            </div>

          </div>
          <img className="about-me__selfies" src={selfies} alt="Фото меня"></img>
        </div>
      </div>
    </section>
  )
}

export default AboutMe;
