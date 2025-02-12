import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setUser }) => {
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    if (!name || !mail) return;
    setUser({ name: name, mail: mail });
    navigate('/dashboard');
  };

  return (
    <section className="section">
      <form className="form" onSubmit={handleSubmit}>
        <h5>Login </h5>

        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-row">
          <label htmlFor="mail" className="form-label">
            {' '}
            email
          </label>
          <input
            type="text"
            className="form-input"
            id="mail"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
        </div>
        <button className="btn btn-block">Login</button>
      </form>
    </section>
  );
};

export default Login;

// оголошуємо функц. компонент Login, який приймає props - setUser
// const Login = ({ setUser }) => {
//   // створ. стан для полів : name, email
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');

//   // отримуємо ф-ю для навігації
//   const navigate = useNavigate();

//   // функія для обробки подання форми
//   // ф-я асинхронна , приймає 1 об'єкт - e - Об'єкт події - подачі форми. Дозвол. взаємодіяти з подією. Містить інформ. про введені дані користувачем.
//   const handleSubmit = async (e) => {
//     // дозвол. не еперезавант. браузер користувачу після натискання submit
//     e.preventDefault();
//     // перевіряє, чи всі поля Непорожні, якщо порожні програма перестає діяти
//     if (!name || !email) return;
//     setUser({ name: name, email: email });
//     // якщо програма виконується ф-я navigate перенаправляє користув. на потрібну сторінку.
//     navigate('/dashboard');
//   };

//   return (
//     <section className="section">
//       <form className="form" onSubmit={handleSubmit}>
//         <h5>Login</h5>
//         <div className="form-row">
//           <label htmlFor="name" className="form-label">
//             name
//           </label>
//           <input
//             type="text"
//             className="form-input"
//             id="name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>
//         <div className="form-row">
//           <label htmlFor="email" className="form-label">
//             email
//           </label>

//           <input
//             type="text"
//             className="form-input"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <button className="btn btn-block">login</button>
//       </form>
//     </section>
//   );
// };

// export default Login;

// Функція useNavigate - це частина бібліотеки react-router-dom, яка надає можливість програмно керувати навігацією в вашому веб-додатку, коли використовується React для розробки односторінкового додатку (SPA). Ця функція пов'язана з маршрутизацією та дозволяє перехідити між різними сторінками (маршрутами) вашого додатку за допомогою коду.
// Ця функція особливо корисна, коли вам потрібно взаємодіяти зі сторінками програмно, наприклад, після успішного входу користувача або після завершення певних дій. Вона дозволяє вам керувати потоком вашого додатку та забезпечувати навігацію без перезавантаження сторінки, що є характерним для односторінкових додатків (SPA).
