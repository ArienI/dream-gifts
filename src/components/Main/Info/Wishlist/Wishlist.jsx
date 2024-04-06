import React, { useState } from 'react';
import styles from './Wishlist.module.css';

// Функция для проверки, содержит ли текст ссылку
const isURL = (text) => {
  // простая регулярка, нужно даполнить
  // протокол
  const urlPattern = new RegExp('^(https?:\\/\\/)?' +
    // доменное имя
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
    // OR ip (v4) адрес
    '((\\d{1,3}\\.){3}\\d{1,3}))' +
    // порт и путь
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
    // query string
    '(\\?[;&a-z\\d%_.~+=-]*)?' +
    // фрагмент локатора
    '(\\#[-a-z\\d_]*)?$', 'i');
  return !!text.match(urlPattern);
}


const Wishlist = () => {
  // Состояние для хранения списка желаний, пустой массив
  const [items, setItems] = useState([]);

  // Состояние для управления вводимым значением
  const [newWish, setNewWish] = useState('');

  // Функция для обновления состояния вводимого значения
  const handleInputChange = (event) => {
    setNewWish(event.target.value);
  };

  // Функция для добавления желания в список
  const addWish = () => {
    // Проверяем, что строка не пустая
    if (newWish.trim() !== '') {
      // Добавляем новое желание
      setItems([...items, newWish]);
      // Очищаем поле ввода
      setNewWish('');
    }
  };

  return (

    <section className={styles.wishlist}>

      <h1 className={styles.title}>Wishlist annd gifts ideas:</h1>

      <input
        type="text"
        className={styles.wish}
        placeholder="Введите название или URL..."
        id="wish"
        // Привязываем значение поля ввода к состоянию
        value={newWish}
        // Обновляем состояние при каждом вводе символа
        onChange={handleInputChange}
      />
      <button
        className={styles.btn}
        // добавить
        onClick={addWish}
      >
        +
      </button>

      <ul className={styles.list}>
        {items.map((item) => {
          // Проверяем, является ли элемент URL-адресом
          const isItemURL = isURL(item);
          return (
            // каждое желание должно быть уникальным
            <li key={item}>
              {isItemURL ? <a href={item} target="_blank" rel="noopener noreferrer">{item}</a> : item}
            </li>
          );
        })}
      </ul>

    </section>

  );
};

export default Wishlist;