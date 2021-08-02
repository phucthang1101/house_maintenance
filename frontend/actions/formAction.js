import fetch from 'isomorphic-fetch';
import { API } from '../config';

export const emailContactForm = (data) => {
//   for (var value of data.values()) {
//     console.log(value);
//  }
  return fetch(`${API}/contact`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
     
    },
    body: data,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
