import React from 'react'
import { MantineProvider, Text } from '@mantine/core';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import App from "./components/test-components/AppTest"
import './index.css'

import global_en from "./translations/en/global.json" ;
import global_ar from "./translations/ar/global.json" ;
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';
import { ModalsProvider } from '@mantine/modals';
i18next.init({
  interpolation:{escapeValue:true},
  lng: localStorage.getItem('language') || 'en',
  resources:{
    en:{
      global:global_en
    },
    ar:{
      global:global_ar
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <MantineProvider withGlobalStyles withNormalizeCSS>
    <ModalsProvider>
  <I18nextProvider i18n={i18next}>
    <App />
  </I18nextProvider>
  </ModalsProvider>
  </MantineProvider>
  </React.StrictMode>
)
