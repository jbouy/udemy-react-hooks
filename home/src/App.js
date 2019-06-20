import React, { useState } from 'react';

import Joke from './Joke';
import Stories from './Stories';

const App = () => {
  const [userQuery, setUserQuery] = useState('');

  const updateUserQuery = event => {
    setUserQuery(event.target.value);
  };

  const searchQuery = () => {
    window.open(`https://google.com/search?q=${userQuery}`, '_blank');
  };

  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      searchQuery();
    }
  };

  return (
    <div className="App">
      <h1>Hello James</h1>
      <div className="form">
        <input
          value={userQuery}
          onChange={updateUserQuery}
          onKeyPress={handleKeyPress}
        />
        <button type="submit" onClick={searchQuery}>
          Search
        </button>
      </div>
      <hr />
      <Joke />
      <hr />
      <Stories />
    </div>
  );
};

export default App;
