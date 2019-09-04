export default (word) => {
  const kek = {
    home: 'главная',
    travels: 'путешествия',
    about: 'обо мне',
    faq: 'вопрос-ответ',
    event: 'event',
    contacts: 'контакты',
    blog: 'блог',
    description: 'описание',
    title: 'заголовок',
  };
  return kek[word];
};
