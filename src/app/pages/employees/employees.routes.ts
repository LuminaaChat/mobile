import {EmployeesPage} from "./employees.page";
import {Routes} from "@angular/router";

export const EMPLOYEES_ROUTES: Routes = [{
  path: '',
  component: EmployeesPage,
  providers: [],
  children: [
    // {
    //   path: '',
    //   pathMatch: 'full',
    //   redirectTo: 'flight-search'
    // },
    // {
    //   path: 'flight-search',
    //   component: FlightSearchComponent
    // },
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
