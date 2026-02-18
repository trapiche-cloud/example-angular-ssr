import { ApplicationConfig, mergeApplicationConfig } from '@angular/core'
import { provideHttpClient, withFetch } from '@angular/common/http'
import { provideClientHydration } from '@angular/platform-browser'
import { provideServerRendering } from '@angular/platform-server'
import { appConfig } from './app.config'

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    provideHttpClient(withFetch()),
    provideClientHydration(),
  ],
}

export const config = mergeApplicationConfig(appConfig, serverConfig)
