import api from './api-config';

export const getAllZones = async () => {
  const resp = await api.get('/zones');
  return resp.data;
}

export const addZone = async (data) => {
  const resp = await api.get('/zones', data);
    return resp.data
}