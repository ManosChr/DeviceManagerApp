import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './stores/configureStore';
import RootScreens from './router/RootScreens';
import { PersistGate } from 'redux-persist/integration/react';


const App: React.FC = () => {
  // Configure redux store
  const { persistor, store } = configureStore()

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootScreens />
      </PersistGate>
    </Provider>
  );
};

export default App;
