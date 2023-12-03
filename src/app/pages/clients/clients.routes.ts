import {Routes} from "@angular/router";
import {ClientsPage} from "./clients.page";

export const CLIENTS_ROUTES: Routes = [{
  path: '',
  component: ClientsPage,
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
