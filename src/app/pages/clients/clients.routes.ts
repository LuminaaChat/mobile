import {Routes} from "@angular/router";
import {ClientsPage} from "./clients.page";

export const CLIENTS_ROUTES: Routes = [{
  path: '',
  component: ClientsPage,
  providers: [],
  children: [
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'overview'
    },
    {
      path: 'overview',
      loadComponent: () => import('./overview/overview.page').then( m => m.OverviewPage)
    },
  ]
}];
