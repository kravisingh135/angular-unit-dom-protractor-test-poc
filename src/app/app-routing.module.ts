import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ShowDataComponent } from "./show-data/show-data.component";
import { LoginComponent } from "./login/login.component";
import { ShortcutPocComponent } from "./shortcut-poc/shortcut-poc.component";
import { PasswordChangeComponent } from "./password-change/password-change.component";
const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "/demo/login" },
  {
    path: "demo",
    children: [
      { path: "login", component: LoginComponent },
      { path: "showdata", component: ShowDataComponent },
      { path: "shortcutview", component: ShortcutPocComponent }
    ]
  },
  {
    path: 'passwordChange', component: PasswordChangeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
