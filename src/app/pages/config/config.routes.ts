import {Routes} from "@angular/router";
import {ConfigPage} from "./config.page";

export const CONFIG_ROUTES: Routes = [{
  path: '',
  component: ConfigPage,
  providers: [],
  children: [
    {
      path: '',
      redirectTo: 'overview',
      pathMatch: 'full',
    },
    {
      path: 'overview',
      loadComponent: () => import('./overview/overview.page').then( m => m.OverviewPage)
    },
    {
      path: 'imprint',
      loadComponent: () => import('./imprint/imprint.page').then( m => m.ImprintPage)
    },
    {
      path: 'privacy',
      loadComponent: () => import('./privacy/privacy.page').then( m => m.PrivacyPage)
    },
    {
      path: 'terms',
      loadComponent: () => import('./terms/terms.page').then( m => m.TermsPage)
    },
    {
      path: 'foos',
      loadComponent: () => import('./foos/foos.page').then( m => m.FoosPage)
    },
  ]
}];
