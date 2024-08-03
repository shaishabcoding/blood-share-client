const post = (key, data) => {
  key = "blood_share_" + key;
  const preData = JSON.parse(localStorage.getItem(key)) || [];
  const temData = [...preData, data];
  localStorage.setItem(key, JSON.stringify(temData));
  return Promise.resolve({
    data: { insertedId: Math.round(Math.random() * 0xfffffffff) },
  });
};

const get = (key) => {
  key = "blood_share_" + key;
  const allData = JSON.parse(localStorage.getItem(key));
  return allData;
};

const axios = { post, get };
export default axios;
