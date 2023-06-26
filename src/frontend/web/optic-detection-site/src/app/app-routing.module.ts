import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from './containers';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home',
    },

    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./pages/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'services',
        loadChildren: () =>
          import('./pages/services/services.module').then(
            (m) => m.ServicesModule
          ),
      },
      // {
      //   path: 'about-us',
      //   loadChildren: () =>
      //     import('./pages/about-us/about-us.module').then(
      //       (m) => m.AboutUsModule
      //     ),
      // },
     
      // {
      //   path: 'articles',
      //   loadChildren: () =>
      //     import('./pages/news-articles/news-articles.module').then(
      //       (m) => m.NewsArticlesModule
      //     ),
      // },
      // {
      //   path: 'articles/:articleName',
      //   loadChildren: () =>
      //     import('./pages/news-articles-details/news-articles-details.module').then(
      //       (m) => m.NewsArticlesDetailsModule
      //     ),
      // },
      // {
      //   path: 'contact-us',
      //   loadChildren: () =>
      //     import('./pages/contact-us/contact-us.module').then(
      //       (m) => m.ContactUsModule
      //     ),
      // }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
