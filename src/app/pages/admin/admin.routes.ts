import {Routes} from "@angular/router";
import {AdminPage} from "./admin.page";

export const ADMIN_ROUTES: Routes = [{
  path: '',
  component: AdminPage,
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
