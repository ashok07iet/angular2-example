"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
require("rxjs/add/operator/map");
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'customer detail';
        this.isUnchanged = false;
        this.result = [];
    }
    // constructor(private http: Http) { }
    AppComponent.prototype.ngOnInit = function () {
        // this.http.get('/data/item.json')
        //   .map(data => data.json().results as Customer[]).subscribe(data => {
        //     this.result = data;
        //   });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './app.component.html',
        styles: ["table,th,td{\n    border:1px solid;\n    border-collapse: collapse;\n  }"]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map