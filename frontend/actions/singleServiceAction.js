import fetch from 'isomorphic-fetch';
import { API } from '../config';

export const createSingleService = (singleService, token) => {
  return fetch(`${API}/admin/singleService`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',

      Authorization: `Bearer ${token}`,
    },
    body: singleService,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};


export const listSingleServices = () => {
  return fetch(`${API}/singleServices/`, {
    method: 'GET',
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const readSingleServices = (slug) => {
  return fetch(`${API}/singleService/${slug}`, {
    method: 'GET',
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const removeSingleService = (slug, token) => {
  return fetch(`${API}/admin/singleService/${slug}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const updateSingleService = (singleService, token, slug) => {
  return fetch(`${API}/admin/singleService/${slug}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',

      Authorization: `Bearer ${token}`,
    },
    body: singleService,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};