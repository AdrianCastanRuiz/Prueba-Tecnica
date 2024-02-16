import { useState, useEffect } from "react";
import styles from "./App.module.css";
import { api } from "./Appi";
import {
  Table,
  Input,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { getFilteredData } from "./Appi";

function App() {
  const [logs, setLogs] = useState([]);
  const [searchString, setSearchString] = useState("");
  const [noResults, setNoresults] = useState(false);
  const [error, setError] = useState(false);

  const handleClick = async () => {
    try {
      setError(false);
      setNoresults(false);
      const data = await getFilteredData(searchString);
      if (data.length > 0) {
        setLogs(data);
      } else {
        setNoresults(true);
        setLogs([]);
      }

      console.log(logs);
      setSearchString("");
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  useEffect(() => {
    const fecthData = async () => {
      try {
        const res = await api.get("/");
        console.log(res);
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
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <Input
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)}
          size="lg"
        />
        <button onClick={handleClick}>Search</button>
      </nav>

      <TableContainer style={{ width: "90vw", background: "#d5d3d3;" }}>
        <Table variant="simple" size="lg" style={{ width: "80%" }}>
          <Thead>
            <Tr>
              <Th>Time</Th>
              <Th>Host</Th>
              <Th>Message</Th>
            </Tr>
          </Thead>
          <Tbody>
            {error && (
              <Tr>
                <Td>Something went wrong.</Td>
              </Tr>
            )}
            {noResults && (
              <Tr>
                <Td>No results found.</Td>
              </Tr>
            )}
            {logs.length > 0 &&
              logs.map((log) => {
                return (
                  <Tr className={styles.tr}>
                    <Td>{log.dt}</Td>
                    <Td>{log.host}</Td>
                    <Td className={styles.td}>{log.message}</Td>
                  </Tr>
                );
              })}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default App;
