/**
 * most commonly accessed browser api to use within the context of an Angular Controller
 */
import { StaticProvider } from '@angular/core';

const getWindowRef = (): Window | null => (typeof window !== 'undefined') ? window : null;
const getDocumentRef = (): Document | null => (typeof document !== 'undefined') ? window.document : null;
const getLocalStorage = (): Storage | null => (typeof window !== 'undefined') ? window.localStorage : null;
const getLocation = (): Location | null => (typeof window !== 'undefined') ? window.location : null;
const getNavigator = (): Navigator | null => (typeof window !== 'undefined') ? window.navigator : null;
const getFileReader = (): FileReader | null => (typeof (FileReader) !== 'undefined') ? new FileReader() : null;

/**
 * the providers
 */
export const WINDOW_PROVIDER = { provide: 'WINDOW', useFactory: getWindowRef };
export const DOCUMENT_PROVIDER = { provide: 'DOCUMENT', useFactory: getDocumentRef };
export const LOCALSTORAGE_PROVIDER = { provide: 'LOCALSTORAGE', useFactory: getLocalStorage };
export const LOCATION_PROVIDER = { provide: 'LOCATION', useFactory: getLocation };
export const NAVIGATOR_PROVIDER = { provide: 'NAVIGATOR', useFactory: getNavigator };
export const FILE_READER_PROVIDER = { provide: 'FILE_READER', useFactory: getFileReader };

export const BROWSER_API_PROVIDERS: StaticProvider[] = [
  WINDOW_PROVIDER,
  DOCUMENT_PROVIDER,
  LOCALSTORAGE_PROVIDER,
  LOCATION_PROVIDER,
  NAVIGATOR_PROVIDER,
  FILE_READER_PROVIDER,
];
