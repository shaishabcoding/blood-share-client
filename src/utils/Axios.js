const post = (key, data) => {
  const preData = JSON.parse(localStorage.getItem(key)) || [];
  const temData = [...preData, data];
  localStorage.setItem(key, JSON.stringify(temData));
};

const get = (key) {
  const allData = JSON.parse(localStorage.getItem(key));
  return allData;
}

const axios = {post,get};
export default axios;