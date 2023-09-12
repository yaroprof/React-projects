import React, { useState, useEffect } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';

const url = 'https://jsonplaceholder.typicode.com/users';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [value, setValue] = useState(0);

  const fetchUser = async () => {
    const response = await fetch(url);
    const newUser = await response.json();

    newUser.forEach((user) => {
      user.address = [user.address];
    });

    setUsers(newUser);
    setLoading(false);
  };
  useEffect(() => {
    fetchUser();
  });

  if (loading) {
    return (
      <section className="section loading">
        <h1>Loading...</h1>
      </section>
    );
  }

  const { name, username, email, address, phone } = users[value];

  return (
    <section className="section">
      <div className="title">
        <h2>Person dates</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <div className="btn-container">
          {users.map((item, index) => {
            return (
              <button
                key={item.id}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && 'active-btn'}`}
              >
                {item.name}
              </button>
            );
          })}
        </div>
        {/* job-info */}
        
        <article className="job-info">
          <h3>{name}</h3>
          <h3>{username}</h3>
          <p className="job-date">{email}</p>
          <p className="job-date">{phone}</p>
          {/* address */}
          {address.map((location, index) => {
            return (
              <div key={index} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                
                <p>{location.city}</p>
              </div>
            );
          })}
        </article>  


        
      </div>
    </section>
  );
};

export default App;
