"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var common_1 = require("@angular/common");
var http_1 = require("@angular/http");
var datatable_1 = require('angular2-datatable/datatable');
var _ = require('lodash');
var AppComponent = (function () {
    function AppComponent(http) {
        var _this = this;
        this.http = http;
        this.sortByWordLength = function (a) {
            return a.name.length;
        };
        http.get('http://localhost:52430/restful/role')
            .subscribe(function (data) {
            setTimeout(function () {
                _this.data = data.json();
            }, 1000);
        });
    }
    AppComponent.prototype.removeItem = function (item) {
        this.data = _.filter(this.data, function (elem) { return elem != item; });
        console.log("Remove: ", item.email);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/app.component.html',
            providers: [http_1.HTTP_PROVIDERS],
            directives: [datatable_1.DataTableDirectives],
            pipes: [common_1.DatePipe]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map