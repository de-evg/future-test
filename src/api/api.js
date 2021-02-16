const Method = {
  GET: `GET`,
  PUT: `PUT`,
  POST: `POST`,
  DELETE: `DELETE`,
  OPTIONS: `OPTIONS`
};

const SuccessHTTPStatusRange = {
  MIN: 200,
  MAX: 299
};

class Api {
  constructor(endPoint) {
    this._endPoint = endPoint;
  }

  getUsers(url) {
    return this._load({url: url})
      .then(Api.toJSON)      
      .catch((err) => {
        throw console.log(err);
      });
  }  

  _load({
    url,
    method = Method.GET,
    body = null,
    headers = new Headers()
  }) {
    return fetch(`${this._endPoint}${url}`, {
      method,
      body,
      headers
    })
      .then(Api.checkStatus)
      .catch((err) => {
        throw console.log(err);
      });
  }

  static checkStatus(response) {
    if (
      response.status < SuccessHTTPStatusRange.MIN &&
      response.status > SuccessHTTPStatusRange.MAX
    ) {
      throw new Error(`${response.status}: ${response.statusText}`);
    }

    return response;
  }

  static toJSON(response) {
    return response.json();
  }

  static catchError(err) {
    throw err;
  }
}

export default Api;
