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

  const handlePostButtonClick = () => {
    axios
      .post(
        `https://api.airtable.com/v0/${BASE_ID}/${TABLE_ID}`,
        {
          records: [
            {
              fields: {
                id: "ppp11",
                name: "xoppp11",
                email: "ppp11@gmail.com",
                phone_number: "111111",
              },
            },
            {
              fields: {
                id: "ttttyea123",
                name: "ttttyea123",
                email: "ttttyea123@gmail.com",
              },
            },
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res.status, res.data);
      });
  };

  return (
    <div>
      App<button onClick={handlePostButtonClick}>Post</button>
    </div>
  );
}

export default App;
