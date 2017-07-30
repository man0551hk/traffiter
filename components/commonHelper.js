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
      Connection: 'keep-alive'
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

export const testFetch = (json) => {
        fetch('http://api.traffiti.co/api/Wall/GetWall', {
            method: "POST",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },            
            body: JSON.stringify(json)
          }
        )
        .then((response) => response.json())
        .then((responseData) => {
            return JSON.stringify(responseData)
        })
        .done();
};
