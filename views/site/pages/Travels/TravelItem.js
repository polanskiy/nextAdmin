import React from 'react';
import Header from '../../elements/Header';
import TravelAbout from './TravelAbout';

const TravelItem = () => (
  <div className="travelItemBox">
    <Header title="Айзербайджан - Баку" subTitle="Посетите удивительную «страну огней»" headerBg="/static/images/travelItemHeaderBg.jpg" noSearch />
    <div className="whiteBg">
      <div className="contentMidWrapper travelItemDescrBox">
        <div className="travelItemDescrText">
          Почему огней? Потому что сейчас современный Баку сверкает огнями всю ночь, а над городом возвышается его современный символ - три башни в форме пламени. Тема огня имеет и исторические корни - когда-то здесь жили племена огнепоклонников, а одна из достопримечательностей страны - «горящая» гора Янардаг.
          <br />
          {' '}
          <br />
          Удовольствие от путешествия в Баку из Москвы самолетом начнется уже в аэропорту столицы этой уникальной страны. Новый современный, красивый и комфортабельный терминал аэропорта позволяет всем пассажирам чувствовать себя VIP-персонами.
          <br />
          {' '}
          <br />
          Цены на авиабилеты в Баку очень удивляют и радуют туристов: они стали доступными и дают возможность легко посетить Азербайджан на уик-энд.
        </div>
        <button type="button" className="btn">Забронировать поездку</button>
      </div>
    </div>
    <TravelAbout />
  </div>
);

export default TravelItem;
