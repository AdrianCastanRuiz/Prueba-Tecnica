import { useState, useEffect } from "react";
import styles from "./App.module.css";

function App() {
  const [data, setData] = useState([2, 2, 2, 2, 2, 2]);

  return (
    <>
      <div className={styles.container}>
        <nav>
          <input className={styles.input} type="text" />
          <button>Search</button>
          <ul>
            {data.length > 0 &&
              data.map((element) => {
                return <li>{element}</li>;
              })}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default App;
