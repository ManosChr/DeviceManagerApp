import type { Action } from '../actions/types';
import { SET_DEVICES, SET_DEVICES_ADD, SET_DEVICES_EDIT, SET_DEVICES_DELETE } from '../actions/types';
import { DeviceType } from '../../screens/home/Home';


export type State = {
  devices: DeviceType[],
};

const initialState = {
  devices: [],
};

export default function (state: State = initialState, action: Action): State {
  console.log(action.type);
  switch (action.type) {
    case SET_DEVICES: {
      return {
        ...state,
        devices: action.payload,
      };
    }

    /**
     * Add the new device with the user provided details to the redux state.
    */
    case SET_DEVICES_ADD: {
      const tempDevices = [...state.devices, action.payload]

      return {
        ...state,
        devices: tempDevices,
      };
    }

    /**
     * Edit the given device's properties to the redux state.
    */
    case SET_DEVICES_EDIT: {
      let tempDevices = state.devices
        .filter(item => (item?.serial_number !== action.payload?.serial_number))

        tempDevices = [...tempDevices, action.payload]

      return {
        ...state,
        devices: tempDevices,
      };
    }

    /**
     * Delete the given device from redux state.
    */
    case SET_DEVICES_DELETE: {
      const tempDevices = state.devices.filter(item => (item?.serial_number !== action.payload?.serial_number))

      return {
        ...state,
        devices: tempDevices,
      };
    }

    default:
      return state;
  }
}
