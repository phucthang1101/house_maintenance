import fetch from 'isomorphic-fetch';
import { API } from '../config';

export const createCategory = (category, token) => {
  return fetch(`${API}/admin/category`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',

      Authorization: `Bearer ${token}`,
    },
    body: category,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const listCategories = () => {
  return fetch(`${API}/categories/`, {
    method: 'GET',
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const removeCategory = (slug, token) => {
  return fetch(`${API}/admin/category/${slug}`, {
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

export const updateCategory = (category, token, slug) => {
  return fetch(`${API}/admin/category/${slug}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',

      Authorization: `Bearer ${token}`,
    },
    body: category,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const readCategory = (slug) => {
  return fetch(`${API}/category/${slug}`, {
    method: 'GET',
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
