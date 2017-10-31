import {HomeSectionComponent} from './home/home.component';
import {PricelistSectionComponent} from './pricelist/pricelist.component';
import {AboutusSectionComponent} from './aboutus/aboutus.component';
import {ContactsSectionComponent} from './contacts/contacts.component';
export const routs = [
  {path: 'home', component: HomeSectionComponent},
  {path: 'pricelist', component: PricelistSectionComponent},
  {path: 'aboutus', component: AboutusSectionComponent},
  {path: 'contacts', component: ContactsSectionComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
]
