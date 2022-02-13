import { SET_DEVICES, SET_DEVICES_ADD, SET_DEVICES_EDIT, SET_DEVICES_DELETE } from './types';

export const setDevices = (payload: any) => (dispatch: any) => {
  dispatch({
    type: SET_DEVICES,
    payload: payload,
  });
};

export const setDevicesAdd = (payload: any) => (dispatch: any) => {
  dispatch({
    type: SET_DEVICES_ADD,
    payload: payload,
  });
};

export const setDevicesEdit = (payload: any) => (dispatch: any) => {
  dispatch({
    type: SET_DEVICES_EDIT,
    payload: payload,
  });
};

export const setDevicesDelete = (payload: any) => (dispatch: any) => {
  dispatch({
    type: SET_DEVICES_DELETE,
    payload: payload,
  });
};
