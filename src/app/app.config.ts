import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';
import { provideHttpClient } from '@angular/common/http'

import { routes } from './app.routes';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDlAOtTs8hvtcdKNvNpnBlUpG5I1SdNSwI",
  authDomain: "angular-html-91210.firebaseapp.com",
  projectId: "angular-html-91210",
  storageBucket: "angular-html-91210.firebasestorage.app",
  messagingSenderId: "781420200803",
  appId: "1:781420200803:web:31bcb8a451a69b3fcf4956"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes, withHashLocation()),
    provideHttpClient(),
    provideFirebaseApp(() => initializeApp( firebaseConfig )),
    provideFirestore(() => getFirestore()),
  ],
};
