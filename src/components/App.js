import React, { useState } from 'react';
import {
  users
} from '../utils/Constants';


function App() {
  const [isList, setIsList] = useState(true);
  const [isTile, setIsTile] = useState(false);

  function onClick() {
    setIsList(!isList); setIsTile(!isTile)
  }

  const userElements = users.results.map(user => {
    return <li className={`table__card ${isTile && 'table__card_tile'}`} key={user.id}>
      <p className="col">{user.name}</p>
      <p className="col">{user.email}</p>
      <p className="col">{user.number}</p>
    </li>
  })

  return (
    <main className="main">
      <button className={`btn btn__list ${isTile && 'btn_active'}`} type="button" onClick={onClick} disabled={isList} />
      <button className={`btn btn__tile ${isList && 'btn_active'}`} type="button" onClick={onClick} disabled={isTile} />
      <ul className={`table ${isTile && 'tile'}`}>
        {userElements}
      </ul>
    </main>
  );
}

export default App;
