import { useState, useContext } from 'react';
import { AppContext } from '../contexts/AppState';

const AddPost = ({ closeModal }) => {
  const { addPost } = useContext(AppContext);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [error, setError] = useState(false);

  const validateInputs = (e) => {
    e.preventDefault();

    if (!title || !body) return setError('All fields are required');

    addPost({ title, body });
    closeModal();
  };

  return (
    <>
      <form onSubmit={validateInputs}>
        <input type="text" placeholder="Enter title" onChange={(e) => setTitle(e.target.value)} />
        <br />
        <br />
        <textarea placeholder="Enter body" onChange={(e) => setBody(e.target.value)}></textarea>
        <br />
        <br />
        <button type="submit">Submit</button>
        <br />
        {/* Якщо error має значення true, то відобразиться <p>error</p>. Якщо error має значення false, то нічого не буде відображено. */}
        {/* Отже, цей вираз дозволяє вам динамічно відображати повідомлення про помилку, коли error має значення true, і не відображати жодного повідомлення, коли error має значення false. */}
        {error && <p>error</p>}
      </form>
    </>
  );
};

export default AddPost;
