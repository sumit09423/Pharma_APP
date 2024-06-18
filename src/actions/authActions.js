import axios from 'axios';

export const register_doctor = ({functions}) => {
  const {onComplete, onError, formValues} = functions;
  return dispatch => {
    // const formdata = Array.isArray(formValues)
    //   ? formValues.map(JSON.stringify)
    //   : JSON.stringify(formValues);

    // let data = new FormData();
    // data.append('type', 'user');
    // data.append('action', 'insert');
    // data.append('form_data', formdata2);

    // axios.defaults.headers.common = getheaders();
    axios({
      method: 'post',
      url: 'https://guyana-joins-organize-alarm.trycloudflare.com/addUser',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      data: formValues,
    })
      //   .then(response => handleResponse(response, dispatch))
      .then(response => {
        if (
          response.data.meta.code === 401 ||
          response.data.meta.code === 403
        ) {
          if (onError) {
            onError(response.data.meta.message, response.data.meta.code);
          }
        } else {
          if (onComplete) {
            onComplete(response);
          }
        }
      })
      .catch(error => {
        if (onError) {
          onError(error, response.data.meta.code);
        }
      });
  };
};
