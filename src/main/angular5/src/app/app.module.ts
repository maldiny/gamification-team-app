import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SlideMenuModule } from 'cuppa-ng2-slidemenu/cuppa-ng2-slidemenu';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CdkTableModule } from '@angular/cdk/table';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing';

import { AlertasService } from './services/alertas.service';
import { AuditoriasService } from './services/auditoria.service';
import { RolesService } from './services/roles.service';
import { TasksService } from './services/tasks.service';
import { TasktypesService } from './services/tasktypes.service';
import { UsuariosService } from './services/usuarios.service';
import { AuthService } from './services/auth.service';
import { LocationService } from './services/location.service';



import { Pagination } from './model/pagination';

import { RankingTable } from './views/ranking/ranking-table';
import { RolesTable } from './views/roles/roles-table';
import { TasksTable } from './views/tasks/tasks-table';
import { AlertasTable } from './views/alertas/alertas-table';
import { ProfileTable } from './views/profile/profile-table';

import { RankingComponent } from './views/ranking/ranking.component';
import { RolesComponent } from './views/roles/roles.component';
import { TasksComponent } from './views/tasks/tasks.component';
import { AlertasComponent } from './views/alertas/alertas.component';
import { ProfileComponent } from './views/profile/profile.component';

import { HeaderComponent } from './sections/header/header.component';
import { FooterComponent } from './sections/footer/footer.component';

import { AuthChecker } from './utils/auth-checker.component';
import { LoginComponent } from './views/login/login.component';
import { LogoutComponent } from './views/logout/logout.component';


import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
} from '@angular/material';

@NgModule({
  exports: [
    CdkTableModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
  ]
})
export class DemoMaterialModule {}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RankingComponent,
    RolesComponent,
    TasksComponent,
    AlertasComponent,
    ProfileComponent,
    LoginComponent,
    LogoutComponent,
    RankingTable,
    RolesTable,
    TasksTable,
    AlertasTable,
    ProfileTable
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    DemoMaterialModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,
    SlideMenuModule
  ],
  providers: [
    LocationService,
    AuthChecker,
    AlertasService,
    AuditoriasService,
    RolesService,
    TasksService,
    TasktypesService,
    UsuariosService,
    AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
