import fetch from 'isomorphic-fetch';
import { API } from '../config';

export const createService = (service, token) => {
  return fetch(`${API}/admin/product`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',

      Authorization: `Bearer ${token}`,
    },
    body: service,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};


export const listServices = () => {
  return fetch(`${API}/products/`, {
    method: 'GET',
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};


export const readServices = (slug) => {
  return fetch(`${API}/product/${slug}`, {
    method: 'GET',
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};


export const removeService = (slug, token) => {
  return fetch(`${API}/admin/product/${slug}`, {
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

export const updateService = (service, token, slug) => {
  return fetch(`${API}/admin/product/${slug}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',

      Authorization: `Bearer ${token}`,
    },
    body: service,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};