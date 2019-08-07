import React from 'react';

const HomeAdvantages = ({ renderNext }) => {
  const bg = new Image();
  bg.src = '/static/images/homeAdvantagesBg.jpg';
  bg.onload = renderNext;
  console.log('advantages');
  return (
    <div className="HomeAdvantagesBox" style={bg && { background: `url(${bg.src})` }}>
      <div className="contentMidWrapper">
        <div className="colorBox">
          <p className="advantagesTitle">
          Почему
            <br />
          индивидуальные туры?
          </p>
          <p className="advantagesSubTitle">
          Индивидуальный тур – это возможность путешествовать именно так, как вам хочется!
          </p>
          <p className="advantagesListTitle">В чем преимущества индивидуальных туров?</p>
          <ul className="advantagesList">
            <li>
            Тур подбирается с учётом всех пожеланий заказчика: выбор отеля, организация питания в ресторанах или кафе, планирование экскурсий и развлечений. Заранее обговариваются вопросы, касающиеся изменения маршрута путешествия и посещения дополнительных экскурсий и развлекательных объектов.
            </li>
            <li>
            Во время такого тура возможно предоставление автомобиля с персональным водителем и личного гида-экскурсовода.
            </li>
            <li>
            Персональные туры, как правило, заказывают туристы, которые желают получить от отдыха максимум впечатлений, увидеть те экскурсии, которые не входят в стандартный комплект.
            </li>
            <li>
            Индивидуальный маршрут. Вы сами выбираете место, которое хотите посетить, самостоятельно выбираете сколько времени провести в той или иной стране, куда отправиться после.
            </li>
            <li>
            Индивидуальная программа путешествия. Все люди разные, как и разные их предпочтения, желания, вкусы. Путешествуя самостоятельно, вы сами выбираете себе ежедневную программу отдыха, опираясь на свои интересы, сами решаете, что посетить в первую очередь - музей, выставку или отправиться на морскую прогулку?
            </li>
            <li>
            Отсутствие привязки к группе. Это, кстати, весомый довод: в путешествие мы отправляемся, чтобы отдохнуть не только от работы, но и от людей, а в групповом туре это   довольно проблематично.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default React.memo(HomeAdvantages);