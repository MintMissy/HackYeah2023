import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PoliticianProfilePresenter } from './politician-profile/politician-profile.presenter';
import { PoliticianProfileService } from './politician-profile/politician-profile.service';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
	{
		path: 'prof' + 'ile/:id',
		loadComponent: () =>
			import('./politician-profile/politician-profile.component').then((mod) => mod.PoliticianProfileComponent),
		providers: [PoliticianProfileService, PoliticianProfilePresenter],
	},
	{
		path: 'sign-in',
		loadComponent: () => import('./pages/sign-in/sign-in.component').then((m) => m.SignInComponent),
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
