import React from 'react';
import ProviderApp from './ProviderApp';
import {AppProvider} from './context/Context';
import './sass/all.scss';

function App() {
  return (
    <>
      <AppProvider>
        <ProviderApp />
      </AppProvider>
    </>
  );
}

export default App;
