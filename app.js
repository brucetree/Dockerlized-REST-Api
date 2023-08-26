import express from "express";
import axios from "axios";
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

let url = "http://www.bom.gov.au/fwo/IDN60801/IDN60801.95765.json";

const getJsonData = async () => {
  try {
    const response = await axios.get(url);

    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

app.get("/", async (req, res) => {
  let stations;
  try {
    const allData = await getJsonData();

    stations = allData.observations.data
      .filter((data) => data.apparent_t >= 15)
      .sort((item1, item2) => item1.apparent_t - item2.apparent_t)
      .map((item) => ({
        name: item.name,
        apparent_t: item.apparent_t,
        lat: item.lat,
        long: item.lon,
      }));
  } catch (err) {
    res.status(503).json({
      error: "Error Connecting to BOM.",
    });
  }

  res.status(200).json(stations);
});

app.listen(port, () => {
  console.log(`[Server]: I am running at https://localhost:${port}`);
});

// if (process.env.NODE_ENV !== "test") {
//   app.listen(port, () => console.log(`Listening on port ${port}`));
// }
export default { getJsonData };
