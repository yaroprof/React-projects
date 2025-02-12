import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';

const url = 'https://course-api.com/react-tours-project';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  // Fetch request with async await
  const fetchTours = async () => {
    setLoading(true);
// Цей код використовує сучасний синтаксис асинхронних функцій (з ключовим словом async перед оголошенням функції та використанням ключового слова await для очікування відповіді з запиту fetch). Він дозволяє зручно отримувати дані з віддаленого сервера та керувати станом завантаження через змінну loading.
    try {
      // Виконуємо асинхронний запит fetch до заданого URL для отримання даних. Чекаємо на відповідь (response) 
      const response = await fetch(url);
      // і витягуємо JSON дані (response.json()). 
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
};
export default App;
