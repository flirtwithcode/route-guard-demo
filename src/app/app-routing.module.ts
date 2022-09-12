import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberAuthGuard } from './member-auth.guard';
import { MemberComponent } from './member/member.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'member',
    component: MemberComponent,
    canActivate: [MemberAuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const RoutingComponents = [HomeComponent, MemberComponent];
