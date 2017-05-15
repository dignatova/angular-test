import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router"; // модуль для маршрутизации

import { AppComponent } from "./app.component";
import { RegistrationComponent } from "./registration/registration.component";
import { AuthComponent } from "./auth/auth.component";
import { CatalogComponent } from "./catalog/catalog.component";

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot([ // настройка маршрутов
            { path: "registration", component: RegistrationComponent },
            { path: "auth", component: AuthComponent },
            { path: "catalog", component: CatalogComponent },
            { path: "", redirectTo: "registration", pathMatch: "full" }
        ])
    ],
    declarations: [AppComponent, RegistrationComponent, AuthComponent, CatalogComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
