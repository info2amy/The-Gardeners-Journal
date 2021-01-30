import React from 'react'
import api from './api.config'

export const getAllPlants = async () => {
  const resp = await api.get('/plants');
  return resp.data;
}

// export const getAllPlants = async () => {
//   const resp = await api.get('/plants');
//   return resp.data;
// }

// export const getAllPlants = async () => {
//   const resp = await api.get('/plants');
//   return resp.data;
// }

// export const getAllPlants = async () => {
//   const resp = await api.get('/plants');
//   return resp.data;
// }

// export const getAllPlants = async () => {
//   const resp = await api.get('/plants');
//   return resp.data;
// }
