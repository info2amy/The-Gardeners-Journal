import React from 'react'
import api from './api.config'

export const getAllPlants = async () => {
  const resp = await api.get('/plants');
  return resp.data;
}

export const postPlant = async (plantData) => {
  const resp = await api.post('/plants', {plant: plantData});
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

// export const getOnePlant = async (id) => {
//   const resp = await api.get('/plants/${id}');
//   return resp.data;
// }
