import axios from 'axios';

export default function request(url, method = 'get', data = {}, limit = 10, offset = 0, sort = {}, filter = {}) {
  let body = { data };
  if (method === 'get') {
    body = {
      ...body, limit, offset, sort, filter,
    };
  }
  return new Promise(((resolve, reject) => {
    axios({
      method,
      url: `${url}`,
      // headers: { Authorization: `bearer ${token}` },
      data: body.data,
    })
      .then((res) => {
        const { data: resData } = res;

        if (resData.error && (resData.error.code === '204' || resData.error.code === '202' || resData.error.code === '401')) {
          window.localStorage.removeItem('tokendasya');
          window.location.reload();
        }
        if (resData.error) {
          // обработку ошибок
          reject(res);
        } else {
          resolve(res);
        }
      }, (err) => {
        reject(err);
      });
  }));
}
