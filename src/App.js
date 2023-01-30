import { useEffect } from "react";
import axios from "axios";
import secrets from "./secrets/keys";

const BASE_ID = "apphTtq6eBmYWsZDj";
const TABLE_ID = "tbl9lA3hqSTrIbK9N";

function App() {
  // 寫裡面和寫外面的不同?

  const { TOKEN = "" } = secrets || {};

  useEffect(() => {
    axios
      .get(`https://api.airtable.com/v0/${BASE_ID}/${TABLE_ID}`, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      })
      .then((res) => {
        console.log(res.status, res.data);
      });
  }, []);

  return <div>App</div>;
}

export default App;
