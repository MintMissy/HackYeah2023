import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PoliticianProfilePresenter } from './pages/politician-profile/politician-profile.presenter';
import { PoliticianProfileService } from './pages/politician-profile/politician-profile.service';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
	{
		path: 'profile/politician/:id',
		loadComponent: () =>
			import('./pages/politician-profile/politician-profile.component').then((mod) => mod.PoliticianProfileComponent),
		providers: [PoliticianProfileService, PoliticianProfilePresenter],
	},
	{
    path: 'profile/user/:id', loadComponent: () => import('./pages/user-profile/user-profile.component').then((mod) => mod.UserProfileComponent)
  },
	{
		path: 'sign-in',
		loadComponent: () => import('./pages/sign-in/sign-in.component').then((m) => m.SignInComponent),
	},
	{
		path: 'home',
		loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
