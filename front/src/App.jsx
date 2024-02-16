import { useState, useEffect } from "react";
import styles from "./App.module.css";
import { api } from "./Appi";

function App() {
  const [logs, setLogs] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    const fecthData = async () => {
      try {
        const res = api.get("/");
        setLogs(res.data);
        if (error) setError(false);
      } catch (error) {
        console.log(error);
        setError(true);
      }
    };
    fecthData();
  }, []);

  return (
    <>
      <nav>
        <input className={styles.searchInput} type="text" />
        <button>Search</button>
      </nav>
      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Host</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {logs &&
            logs.map((log) => {
              return (
                <tr>
                  <td>{log.time}</td>
                  <td>{log.host}</td>
                  <td>{log.message}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
}

export default App;
