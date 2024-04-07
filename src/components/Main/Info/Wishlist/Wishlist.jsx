import React, { useState } from 'react';
import styles from './Wishlist.module.css';
import Edit from '../../../../images/icons8-редактировать.svg';
import Del from '../../../../images/icons8-48.svg';

// Функция для проверки, содержит ли текст ссылку
const isURL = (text) => {
  const urlPattern = new RegExp('^(https?:\\/\\/)?' +
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
    '((\\d{1,3}\\.){3}\\d{1,3}))' +
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
    '(\\?[;&a-z\\d%_.~+=-]*)?' +
    '(\\#[-a-z\\d_]*)?$', 'i');
  return !!text.match(urlPattern);
}

const Wishlist = () => {
  // Состояние для хранения списка желаний
  const [items, setItems] = useState([]);
  // Состояние для управления вводимым значением
  const [newWish, setNewWish] = useState('');
  // Индекс редактируемого элемента
  const [editIndex, setEditIndex] = useState(-1);
  // Текущий текст редактируемого элемента
  const [editText, setEditText] = useState('');
  // Состояние для сообщения об ошибке
  const [error, setError] = useState('');

  // Обрабатывает изменение в поле ввода нового желания
  const handleInputChange = (event) => {
    setNewWish(event.target.value);
    // Очищаем ошибку при новом вводе
    if (error) setError('');
  };

  // Добавляет новое желание в список
  const addWish = () => {
    if (newWish.trim() !== '') {
      setItems([...items, newWish]);
      setNewWish('');
    }
  };

  // Обрабатывает изменение в поле редактирования желания
  const handleEditChange = (event) => {
    setEditText(event.target.value);
    // Очищаем ошибку при вводе
    if (error) setError('');
  };

  // Начинает редактирование выбранного желания
  const startEdit = (index) => {
    setEditIndex(index);
    setEditText(items[index]);
    // Сброс сообщения об ошибке при начале редактирования
    setError('');
  };

  // Сохраняет отредактированное желание
  const saveEdit = () => {
    if (!editText.trim()) {
      // Если после обрезки пробелов текст пустой, устанавливаем ошибку
      setError('Пожалуйста, напишите ваше желание');
      // Прерываем выполнение функции
      return;
    }

    const updatedItems = [...items];
    updatedItems[editIndex] = editText.trim();
    setItems(updatedItems);
    // Выходим из режима редактирования
    setEditIndex(-1);
    // Очищаем временное значение для редактирования
    setEditText('');
    // Сброс сообщения об ошибке после успешного сохранения
    setError('');
  };

  // Отменяет редактирование
  const cancelEdit = () => {
    setEditIndex(-1);
    // Очищаем сообщение об ошибке при отмене
    setError('');
  };

  return (
    <section className={styles.wishlist}>
      <h1 className={styles.title}>Wishlist and gifts ideas:</h1>

      <input
        type="text"
        className={styles.wish}
        placeholder="Введите название или URL..."
        value={newWish}
        onChange={handleInputChange}
      />
      <button className={styles.btn} onClick={addWish}>+</button>

      <ol className={styles.list}>
        {items.map((item, index) => (
          <li className={styles.item} key={index}>
            {editIndex === index ? (
              <>
                <input
                  className={styles.wish}
                  value={editText}
                  onChange={handleEditChange}
                  // Показываем сообщение об ошибке в placeholder, если оно есть
                  placeholder={error}
                />
                <button className={styles.edit} onClick={saveEdit}>save</button>
                <button className={styles.edit} onClick={cancelEdit}>cancel</button>
              </>
            ) : (
              <>
                {isURL(item) ? <a href={item} target="_blank" rel="noopener noreferrer">{item}</a> : item}
                <button className={styles.btn} onClick={() => startEdit(index)}>
                  <img src={Edit} alt="Edit" className={styles.btnEdit} />
                </button>
                <button className={styles.btn}>
                  <img src={Del} alt="Delete" className={styles.btnEdit} />
                </button>
              </>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Wishlist;