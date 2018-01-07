import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RankingComponent } from './views/ranking/ranking.component';
import { RolesComponent } from './views/roles/roles.component';
import { TasksComponent } from './views/tasks/tasks.component';
import { AlertasComponent } from './views/alertas/alertas.component';
import { ProfileComponent } from './views/profile/profile.component';
import { LoginComponent } from './views/login/login.component';
import { AuthChecker } from './utils/auth-checker.component';
import { LogoutComponent } from './views/logout/logout.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RankingComponent },
    { path: 'ranking', component: RankingComponent, canActivate: [AuthChecker] },
    { path: 'tasks', component: TasksComponent, canActivate: [AuthChecker] },
    { path: 'roles', component: RolesComponent, canActivate: [AuthChecker] },
    { path: 'profile', component: ProfileComponent, canActivate: [AuthChecker] },
    { path: 'alerts', component: AlertasComponent, canActivate: [AuthChecker] },
    { path: 'logout', component: LogoutComponent},
    { path: '**', redirectTo: 'ranking' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
