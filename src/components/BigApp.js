import React from 'react';
import './Style.css';
import News from './News';
const os = require('os')
const App =() =>{
  return <p>Всем привет, я компонент App</p>
}
const myNews = [
  {
    id: 1,
    author: 'Саша Печкин',
    text: 'В четверг, четвертого числа...',
    bigText: 'в четыре с четвертью часа четыре чёрненьких чумазеньких чертёнка чертили чёрными чернилами чертёж.'
  },
  {
    id: 2,
    author: 'Просто Вася',
    text: 'Считаю, что $ должен стоить 35 рублей!',
    bigText: 'А евро 42!'
  },
  {
    id: 3,
    author: 'Max Frontend',
    text: 'Прошло 2 года с прошлых учебников, а $ так и не стоит 35',
    bigText: 'А евро опять выше 70.'
  },
  {
    id: 4,
    author: 'Гость',
    text: 'Бесплатно. Без смс, про реакт, заходи - https://maxpfrontend.ru',
    bigText: 'Еще есть группа VK, telegram и канал на youtube! Вся инфа на сайте, не реклама!'
  }
];

class BigApp extends React.Component {
    render(){
     
      return(
        <React.Fragment>
          <h1>Я компонент, BigApp<p>{os.type()}</p></h1>
          <p className='red'>Компоненты можно вкладывать друг в друга.</p>
          <App/>
          <News data={myNews}/>   {/* добавили свойства data */}
        </React.Fragment>
      )
    }
  }

  export default BigApp;