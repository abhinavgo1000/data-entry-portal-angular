import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { formDataReducer } from 'state/reducers/form-data.reducer';
import { FormDataEffects } from 'state/effects/form-data.effects';
import { aboutMeReducer } from 'state/reducers/about-me.reducer';
import { AboutMeEffects } from 'state/effects/about-me.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideAnimationsAsync(),
    provideHttpClient(withFetch()),
    provideStore({ 
      formData: formDataReducer,
      aboutMe: aboutMeReducer
    }),
    provideEffects([FormDataEffects, AboutMeEffects]),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
]
};
