import axios from "axios";
let url = "http://www.bom.gov.au/fwo/IDN60801/IDN60801.95765.json";

// function to fetch data
const getJsonData = async () => {
  try {
    const response = await axios.get(url);

    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// filter data and response
const getStations = async (req, res) => {
  let stations;
  try {
    const allData = await getJsonData();

    stations = allData.observations.data
      .filter((data) => data.apparent_t > 15)
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
};

export default getStations;
