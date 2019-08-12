import React from 'react';
import Header from '../../elements/Header';
import RequestForm from '../../elements/RequestForm';

const FAQ = () => (
  <div>
    <Header title="Вопрос-ответ" headerBg="/static/images/blogHeaderBg.jpg" />
    <p>Вы помогаете с получением визы?</p>
    <p>
- Да, могу полностью подготовить все документы для подачи в визовый центр

- Возможность сопровождения в визовый центр или подача без личного присутствия (зависит от страны, где получаете визу)

- Если хотите, можете самостоятельно оформить визу
    </p>
    <RequestForm />
  </div>
);

export default FAQ;
