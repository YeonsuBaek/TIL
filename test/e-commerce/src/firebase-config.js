import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDJFABjTUiC_wKXkIH-83qgMFLKPygzKJc',
  authDomain: 'pre-task-49152.firebaseapp.com',
  projectId: 'pre-task-49152',
  storageBucket: 'pre-task-49152.appspot.com',
  messagingSenderId: '107653628454',
  appId: '1:107653628454:web:d3278b62435c6bdaea5ce7',
  measurementId: 'G-2KPSHPTNK9',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { app, auth };
