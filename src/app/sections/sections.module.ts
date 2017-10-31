import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule, MatIconModule, MatListModule, MatTabsModule} from '@angular/material';

import { HomeSectionComponent } from './home/home.component';
import { PricelistSectionComponent} from './pricelist/pricelist.component';
import { AboutusSectionComponent } from './aboutus/aboutus.component';
import { ContactsSectionComponent } from './contacts/contacts.component';

@NgModule({
  imports: [CommonModule, BrowserAnimationsModule, MatCardModule, MatTabsModule, MatListModule, MatIconModule],
  declarations: [HomeSectionComponent, PricelistSectionComponent, AboutusSectionComponent, ContactsSectionComponent],
  exports: [HomeSectionComponent, PricelistSectionComponent, AboutusSectionComponent, ContactsSectionComponent]
})

export class SectionsModule {

}
