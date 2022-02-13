import { DeviceType } from '../../screens/home/Home';

export const SET_DEVICES = 'SET_DEVICES';
export const SET_DEVICES_ADD = 'SET_DEVICES_ADD';
export const SET_DEVICES_EDIT = 'SET_DEVICES_EDIT';
export const SET_DEVICES_DELETE = 'SET_DEVICES_DELETE';

export type Action =
  { type: 'SET_DEVICES', payload: DeviceType[] }
| { type: 'SET_DEVICES_ADD', payload: DeviceType }
| { type: 'SET_DEVICES_EDIT', payload: DeviceType }
| { type: 'SET_DEVICES_DELETE', payload: DeviceType };
