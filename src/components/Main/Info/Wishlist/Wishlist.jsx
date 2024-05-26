import React, { useState, useEffect, useRef } from 'react';
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
  // Состояние для отключения поля редактирования при нажатие вне его
  const editInputRef = useRef(null);

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

  // Начинаем редактирование выбранного желания
  const startEdit = (index) => {
    setEditIndex(index);
    setEditText(items[index]);
    // Сброс сообщения об ошибке при начале редактирования
    setError('');
  };

  // Сохраняем отредактированное желание
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

  // Удаляем желание из списка  
  const deleteWish = (index) => {
    const updatedItems = items.filter((_, itemIndex) => itemIndex !== index);
    setItems(updatedItems);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (editInputRef.current && !editInputRef.current.contains(event.target)) {
        cancelEdit();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <section className={styles.wishlist}>
      <h1 className={styles.title}>Wishlist and gifts ideas:</h1>
      <div className={styles.newWishInput}>
        <input
          type="text"
          className={styles.wish}
          placeholder="Введите название или URL..."
          value={newWish}
          onChange={handleInputChange}
        />
        <button className={styles.btn} onClick={addWish}>+</button>
      </div>

      <ol className={`${styles.list} ${styles.customScroll}`}>
        {items.map((item, index) => (
          <li className={styles.item} key={index}>
            {editIndex === index ? (
              <div ref={editInputRef}>
                <textarea
                  className={styles.editInput}
                  value={editText}
                  onChange={handleEditChange}
                  //Показываем в placeholde сообщение об ошибке, если она есть
                  placeholder={error}
                />
                <button className={styles.edit} onClick={saveEdit}>save</button>
                <button className={styles.edit} onClick={cancelEdit}>cancel</button>
              </div>
            ) : (
              <>
                <div className={styles.itemContent} title={item}>
                  {isURL(item) ? (
                    <a href={item} target="_blank" rel="noopener noreferrer">
                      {item}
                    </a>
                  ) : (
                    item
                  )}
                  <div className={styles.fullText}>{item}</div>
                </div>
                <div className={styles.buttons}>
                  <button className={styles.btn} onClick={() => startEdit(index)}>
                    <img src={Edit} alt="Edit" className={styles.btnEdit} />
                  </button>
                  <button className={styles.btn} onClick={() => deleteWish(index)}>
                    <img src={Del} alt="Delete" className={styles.btnEdit} />
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Wishlist;



// доделать:
// для li сделать ограниечение до двух строк, остальное скрывать(при наведении курсором показывать). Вместе со второй строкой должны помещаться иконки редактирования
