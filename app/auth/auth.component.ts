import { Component } from "@angular/core";

// Для использования относительных путей, необходимо добавить свойство moduleId и установить значение для свойства module.id
// Данное свойство необходимо устанавливать в случае если в проекте используется загрузчик systemJS
@Component({
    moduleId: module.id,
    selector: "auth",
    templateUrl: "auth.component.html",
    styleUrls: ["auth.component.css"]
})
export class AuthComponent {
    
}