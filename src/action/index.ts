import * as api from "../api";

export const onoff = async () => {
  try {
    const { data } = await api.onoff();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const refresh = async () => {
  try {
    const { data } = await api.refresh();
    return data;
  } catch (error) {
    console.error(error);
  }
};