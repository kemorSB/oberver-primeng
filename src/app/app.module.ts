import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { DialogService } from 'primeng/dynamicdialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { TechcampComponent } from './techcamp/techcamp.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    TechcampComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TableModule,
    DialogModule,
    DropdownModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  providers: [
    DialogService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
