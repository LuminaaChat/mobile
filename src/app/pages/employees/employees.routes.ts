import {EmployeesPage} from "./employees.page";
import {Routes} from "@angular/router";

export const EMPLOYEES_ROUTES: Routes = [{
  path: '',
  component: EmployeesPage,
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
    // {
    //   path: 'passenger-search',
    //   component: PassengerSearchComponent
    // },
    // {
    //   path: 'flight-edit/:id',
    //   component: FlightEditComponent
    // }
  ]
}];
