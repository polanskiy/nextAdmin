export default (word) => {
  const kek = {
    home: 'Главная',
    travels: 'Путешествия',
    about: 'Обо мне',
    faq: 'Вопрос-Ответ',
    event: 'Еvent',
    contacts: 'Контакты',
    blog: 'Блог',
    description: 'Описание',
    title: 'Заголовок',
    slider: 'Карусель',
    header: 'Шапка',
    footer: 'Подвал',
    tabs: 'Вкладки',
  };
  return kek[word];
};
