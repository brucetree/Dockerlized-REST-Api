import axios from "axios";

const url = "http://127.0.0.1:3000";

function isArrayOfObjectsAscending(arr, key) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i][key] < arr[i - 1][key]) {
      return false;
    }
  }

  return true;
}

function doObjectsHaveKey(arr, key) {
  for (const obj of arr) {
    if (!(key in obj)) {
      return false;
    }
  }
  return true;
}

describe("fetch data", () => {
  test("when I fetch data from local IP I can get 200 response", async () => {
    const res = await axios.get(url);

    expect(res).toBeTruthy();
    expect(res.status).toBe(200);
  });

  test("fetched data should be ascending according to tempture", async () => {
    const res = await axios.get(url);
    expect(isArrayOfObjectsAscending(res.data, "apparent_t")).toBeTruthy();
  });

  test("fetched data should have name, apparent_t, lat and long ", async () => {
    const res = await axios.get(url);
    expect(doObjectsHaveKey(res.data, "apparent_t")).toBeTruthy();
    expect(doObjectsHaveKey(res.data, "name")).toBeTruthy();
    expect(doObjectsHaveKey(res.data, "lat")).toBeTruthy();
    expect(doObjectsHaveKey(res.data, "long")).toBeTruthy();
  });

});
