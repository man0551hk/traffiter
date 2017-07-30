export const fetchApiDataInAction = (actionType, reqBody, endPoint, isServerRendered) => {
  return ({fetch}) => ({
    type: actionType,
    payload: {
      promise: fetchApi(fetch, endPoint, reqBody, isServerRendered)
    }
  });
};

export const fetchApi = (fetch, endPoint, reqBody = '', isServerRendered) => {
  return fetch(endPoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Connection: 'keep-alive',
      Authorization: 'Basic dGVzdHVzZXI6cmVnaW9uYWx3ZWIxMjM='
    },
    body: reqBody
  })
    .then(response => response.json())
    .then(response => {
      if (response.errorMessage && response.errorMessage !== '') {
        return Promise.reject(response)
      }
      return {...response, isServerRendered};
    }, response => {
      return {...response, isServerRendered};
    })
};
