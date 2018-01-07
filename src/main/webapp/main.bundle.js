webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".chat-container{\n  height: 80vh;\n  width: 100vw;\n}\n.chat{\n  text-align: left;\n  margin: 0 auto;\n  width: 50%;\n  height: 100%;\n  border: 1px solid grey;\n}\n\n.footer{\n  background: #cccccc;\n  margin: 0 auto;\n  position: absolute;\n  bottom: 0;\n  height: 10vh;\n  width: 100vw;\n}\n.send-button{\n  margin: 0 auto;\n  height: 70%;\n  width: 50%;\n}\ninput{\n  float: right;\n  height: 30px;\n  border-radius: 15px;\n  font-size: 1.5em;\n}\n.send{\n  float: right;\n  background: url(" + __webpack_require__("../../../../../src/app/images/background.jpg") + ");\n  background-size: contain;\n  background-repeat: no-repeat;\n  height: 30px;\n  width: 30px;\n  margin-left: 5px;\n\n}\n.example-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  max-height: 500px;\n  min-width: 300px;\n}\n\n.mat-table {\n  overflow: auto;\n  max-height: 500px;\n}\n\n.container{\n    background-image: url(" + __webpack_require__("../../../../../src/app/images/background.jpg") + ");\n    background-position: center center;\n    background-size: 100%;\n    background-repeat: no-repeat;\n}\n\nbody{\n  background: url(" + __webpack_require__("../../../../../src/app/images/background.jpg") + ") no-repeat fixed 100%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div id=\"bg\" style=\"width: 100%;height: 100%;overflow: hidden; margin: 0;padding: 0; border: 0px solid #eee;\">\n\t<div style=\" position: absolute;    width: 100%;    height: 100%;    margin: 0;padding: 0;border: 0px solid #eee;\">\n\t\t<table cellpadding=\"0\" cellspacing=\"0\" style=\"width: 100%;height: 100%;overflow: hidden; margin: 0;padding: 0; border: 0px solid #eee;border-collapse: collapse;border-spacing: 0;    list-style: none;\">\n\t\t\t<tbody>\n\t\t\t\t<tr>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<img alt=\"\" src=\"background.100c6c7cc7db1f92c0bd.jpg\" style=\"min-height: 50%;min-width: 50%;    margin: 0 auto;display: block;border: 0px solid #eee;    list-style: none;    text-align: center;\">\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t</tbody>\n\t\t</table>\n\t</div>\n</div>\n-->\n<cuppa-slidemenu *ngIf=\"logged==true\" [menulist]=\"menuItemsArray\" [config]=\"config\" (open)=\"onMenuOpen()\" (close)=\"onMenuClose()\" (onItemSelect)=\"onItemSelect($event)\"></cuppa-slidemenu>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(router, authService) {
        this.router = router;
        this.authService = authService;
        this.menuItemsArray = [
            { "title": "Ranking", "link": "" },
            { "title": "Tasks", "link": "tasks" },
            { "title": "Roles", "link": "roles" },
            { "title": "Profile", "link": "profile" },
            { "title": "Alerts", "link": "alerts" },
            { "title": "Logout", "link": "logout" }
        ];
        this.config = {
            "animation": "collapse",
            "offset": {
                "top": 55
            },
            closeOnCLick: true
        };
        //this.logged = authService.isCurrentUserFromLocalStorage();
        this.logged = true;
        console.log("OAuth: " + this.logged);
    }
    AppComponent.prototype.onMenuClose = function () {
    };
    AppComponent.prototype.onMenuOpen = function () {
    };
    AppComponent.prototype.onItemSelect = function (item) {
        this.router.navigate([item.link]);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DemoMaterialModule */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cuppa_ng2_slidemenu_cuppa_ng2_slidemenu__ = __webpack_require__("../../../../cuppa-ng2-slidemenu/cuppa-ng2-slidemenu.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_cdk_table__ = __webpack_require__("../../../cdk/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_alertas_service__ = __webpack_require__("../../../../../src/app/services/alertas.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_auditoria_service__ = __webpack_require__("../../../../../src/app/services/auditoria.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_roles_service__ = __webpack_require__("../../../../../src/app/services/roles.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_tasks_service__ = __webpack_require__("../../../../../src/app/services/tasks.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_tasktypes_service__ = __webpack_require__("../../../../../src/app/services/tasktypes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_usuarios_service__ = __webpack_require__("../../../../../src/app/services/usuarios.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_location_service__ = __webpack_require__("../../../../../src/app/services/location.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__views_ranking_ranking_table__ = __webpack_require__("../../../../../src/app/views/ranking/ranking-table.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__views_roles_roles_table__ = __webpack_require__("../../../../../src/app/views/roles/roles-table.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__views_tasks_tasks_table__ = __webpack_require__("../../../../../src/app/views/tasks/tasks-table.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__views_alertas_alertas_table__ = __webpack_require__("../../../../../src/app/views/alertas/alertas-table.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__views_profile_profile_table__ = __webpack_require__("../../../../../src/app/views/profile/profile-table.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__views_ranking_ranking_component__ = __webpack_require__("../../../../../src/app/views/ranking/ranking.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__views_roles_roles_component__ = __webpack_require__("../../../../../src/app/views/roles/roles.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__views_tasks_tasks_component__ = __webpack_require__("../../../../../src/app/views/tasks/tasks.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__views_alertas_alertas_component__ = __webpack_require__("../../../../../src/app/views/alertas/alertas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__views_profile_profile_component__ = __webpack_require__("../../../../../src/app/views/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__sections_header_header_component__ = __webpack_require__("../../../../../src/app/sections/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__sections_footer_footer_component__ = __webpack_require__("../../../../../src/app/sections/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__utils_auth_checker_component__ = __webpack_require__("../../../../../src/app/utils/auth-checker.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__views_login_login_component__ = __webpack_require__("../../../../../src/app/views/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__views_logout_logout_component__ = __webpack_require__("../../../../../src/app/views/logout/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

































var DemoMaterialModule = (function () {
    function DemoMaterialModule() {
    }
    DemoMaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            exports: [
                __WEBPACK_IMPORTED_MODULE_5__angular_cdk_table__["m" /* CdkTableModule */],
                __WEBPACK_IMPORTED_MODULE_32__angular_material__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_32__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_32__angular_material__["c" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_32__angular_material__["d" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_32__angular_material__["e" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_32__angular_material__["f" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_32__angular_material__["A" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_32__angular_material__["g" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_32__angular_material__["h" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_32__angular_material__["i" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_32__angular_material__["j" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_32__angular_material__["k" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_32__angular_material__["l" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_32__angular_material__["m" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_32__angular_material__["n" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_32__angular_material__["o" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_32__angular_material__["p" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_32__angular_material__["q" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_32__angular_material__["r" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_32__angular_material__["s" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_32__angular_material__["t" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_32__angular_material__["u" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_32__angular_material__["v" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_32__angular_material__["x" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_32__angular_material__["w" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_32__angular_material__["y" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_32__angular_material__["z" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_32__angular_material__["C" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_32__angular_material__["D" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_32__angular_material__["E" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_32__angular_material__["F" /* MatTooltipModule */],
            ]
        })
    ], DemoMaterialModule);
    return DemoMaterialModule;
}());

var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_27__sections_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_28__sections_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_22__views_ranking_ranking_component__["a" /* RankingComponent */],
                __WEBPACK_IMPORTED_MODULE_23__views_roles_roles_component__["a" /* RolesComponent */],
                __WEBPACK_IMPORTED_MODULE_24__views_tasks_tasks_component__["a" /* TasksComponent */],
                __WEBPACK_IMPORTED_MODULE_25__views_alertas_alertas_component__["a" /* AlertasComponent */],
                __WEBPACK_IMPORTED_MODULE_26__views_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_30__views_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_31__views_logout_logout_component__["a" /* LogoutComponent */],
                __WEBPACK_IMPORTED_MODULE_17__views_ranking_ranking_table__["a" /* RankingTable */],
                __WEBPACK_IMPORTED_MODULE_18__views_roles_roles_table__["a" /* RolesTable */],
                __WEBPACK_IMPORTED_MODULE_19__views_tasks_tasks_table__["a" /* TasksTable */],
                __WEBPACK_IMPORTED_MODULE_20__views_alertas_alertas_table__["a" /* AlertasTable */],
                __WEBPACK_IMPORTED_MODULE_21__views_profile_profile_table__["a" /* ProfileTable */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_32__angular_material__["w" /* MatSlideToggleModule */],
                DemoMaterialModule,
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_8__app_routing__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2_cuppa_ng2_slidemenu_cuppa_ng2_slidemenu__["a" /* SlideMenuModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_16__services_location_service__["a" /* LocationService */],
                __WEBPACK_IMPORTED_MODULE_29__utils_auth_checker_component__["a" /* AuthChecker */],
                __WEBPACK_IMPORTED_MODULE_9__services_alertas_service__["a" /* AlertasService */],
                __WEBPACK_IMPORTED_MODULE_10__services_auditoria_service__["a" /* AuditoriasService */],
                __WEBPACK_IMPORTED_MODULE_11__services_roles_service__["a" /* RolesService */],
                __WEBPACK_IMPORTED_MODULE_12__services_tasks_service__["a" /* TasksService */],
                __WEBPACK_IMPORTED_MODULE_13__services_tasktypes_service__["a" /* TasktypesService */],
                __WEBPACK_IMPORTED_MODULE_14__services_usuarios_service__["a" /* UsuariosService */],
                __WEBPACK_IMPORTED_MODULE_15__services_auth_service__["a" /* AuthService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_ranking_ranking_component__ = __webpack_require__("../../../../../src/app/views/ranking/ranking.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_roles_roles_component__ = __webpack_require__("../../../../../src/app/views/roles/roles.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__views_tasks_tasks_component__ = __webpack_require__("../../../../../src/app/views/tasks/tasks.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__views_alertas_alertas_component__ = __webpack_require__("../../../../../src/app/views/alertas/alertas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__views_profile_profile_component__ = __webpack_require__("../../../../../src/app/views/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__views_login_login_component__ = __webpack_require__("../../../../../src/app/views/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_auth_checker_component__ = __webpack_require__("../../../../../src/app/utils/auth-checker.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__views_logout_logout_component__ = __webpack_require__("../../../../../src/app/views/logout/logout.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_7__views_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_2__views_ranking_ranking_component__["a" /* RankingComponent */] },
    { path: 'ranking', component: __WEBPACK_IMPORTED_MODULE_2__views_ranking_ranking_component__["a" /* RankingComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__utils_auth_checker_component__["a" /* AuthChecker */]] },
    { path: 'tasks', component: __WEBPACK_IMPORTED_MODULE_4__views_tasks_tasks_component__["a" /* TasksComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__utils_auth_checker_component__["a" /* AuthChecker */]] },
    { path: 'roles', component: __WEBPACK_IMPORTED_MODULE_3__views_roles_roles_component__["a" /* RolesComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__utils_auth_checker_component__["a" /* AuthChecker */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_6__views_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__utils_auth_checker_component__["a" /* AuthChecker */]] },
    { path: 'alerts', component: __WEBPACK_IMPORTED_MODULE_5__views_alertas_alertas_component__["a" /* AlertasComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__utils_auth_checker_component__["a" /* AuthChecker */]] },
    { path: 'logout', component: __WEBPACK_IMPORTED_MODULE_9__views_logout_logout_component__["a" /* LogoutComponent */] },
    { path: '**', redirectTo: 'ranking' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes, { useHash: true })],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/images/background.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "background.100c6c7cc7db1f92c0bd.jpg";

/***/ }),

/***/ "../../../../../src/app/model/alertas.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Alertas; });
/* unused harmony export Links */
/* unused harmony export Href */
/* unused harmony export EmbeddedAlertas */
var Alertas = (function () {
    function Alertas() {
    }
    return Alertas;
}());

var Links = (function () {
    function Links() {
    }
    return Links;
}());

var Href = (function () {
    function Href() {
    }
    return Href;
}());

var EmbeddedAlertas = (function () {
    function EmbeddedAlertas() {
    }
    return EmbeddedAlertas;
}());



/***/ }),

/***/ "../../../../../src/app/model/roles.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Roles; });
/* unused harmony export Links */
/* unused harmony export Href */
/* unused harmony export EmbeddedRoles */
var Roles = (function () {
    function Roles() {
    }
    return Roles;
}());

var Links = (function () {
    function Links() {
    }
    return Links;
}());

var Href = (function () {
    function Href() {
    }
    return Href;
}());

var EmbeddedRoles = (function () {
    function EmbeddedRoles() {
    }
    return EmbeddedRoles;
}());



/***/ }),

/***/ "../../../../../src/app/model/tasks.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tasks; });
/* unused harmony export Links */
/* unused harmony export Href */
/* unused harmony export EmbeddedTasks */
var Tasks = (function () {
    function Tasks() {
    }
    return Tasks;
}());

var Links = (function () {
    function Links() {
    }
    return Links;
}());

var Href = (function () {
    function Href() {
    }
    return Href;
}());

var EmbeddedTasks = (function () {
    function EmbeddedTasks() {
    }
    return EmbeddedTasks;
}());



/***/ }),

/***/ "../../../../../src/app/model/tasktypes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskTypes; });
/* unused harmony export Links */
/* unused harmony export Href */
/* unused harmony export EmbeddedTaskTypes */
var TaskTypes = (function () {
    function TaskTypes() {
    }
    return TaskTypes;
}());

var Links = (function () {
    function Links() {
    }
    return Links;
}());

var Href = (function () {
    function Href() {
    }
    return Href;
}());

var EmbeddedTaskTypes = (function () {
    function EmbeddedTaskTypes() {
    }
    return EmbeddedTaskTypes;
}());



/***/ }),

/***/ "../../../../../src/app/model/usuarios.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Usuarios; });
/* unused harmony export Links */
/* unused harmony export Href */
/* unused harmony export EmbeddedUsuarios */
var Usuarios = (function () {
    function Usuarios() {
    }
    return Usuarios;
}());

var Links = (function () {
    function Links() {
    }
    return Links;
}());

var Href = (function () {
    function Href() {
    }
    return Href;
}());

var EmbeddedUsuarios = (function () {
    function EmbeddedUsuarios() {
    }
    return EmbeddedUsuarios;
}());



/***/ }),

/***/ "../../../../../src/app/sections/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" class=\"footer\">\r\n    <div fxFlex=\"30%\" class=\"copyright\">\r\n        Thin2 Gamification Team APP 2018\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/sections/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'footer-component',
            template: __webpack_require__("../../../../../src/app/sections/footer/footer.component.html")
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/sections/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutWrap class=\"header\">\r\n    <div class=\"sidenav-toggle\"\t>\r\n        <button class=\"botonMenu\" type=\"button\" md-button (click)=\"menuTriggeredEvent(!menuStatus)\"><i class=\"material-icons\" style=\"color:white\">view_headline</i></button>\r\n    </div>\r\n    <div fxFlex style=\"padding: 1rem; margin-top:2px;\">\r\n        <span style=\"font-size:20px\">ePhoenix Monitoring</span>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/sections/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
        this.menuTriggered = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.menuStatus = false;
    }
    HeaderComponent.prototype.menuTriggeredEvent = function (newMenuStatus) {
        this.menuStatus = newMenuStatus;
        this.menuTriggered.emit(newMenuStatus);
        this.menuStatus = false;
    };
    HeaderComponent.prototype.ngOnChanges = function (changes) {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], HeaderComponent.prototype, "menuTriggered", void 0);
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            providers: [],
            selector: 'header-component',
            template: __webpack_require__("../../../../../src/app/sections/header/header.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/alertas.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertasService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__location_service__ = __webpack_require__("../../../../../src/app/services/location.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AlertasService = (function () {
    function AlertasService(http, locationService) {
        this.http = http;
        this.locationService = locationService;
    }
    AlertasService.prototype.getAlertas = function () {
        return this.http.get(this.locationService.location + "alertas")
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    AlertasService.prototype.postAlertas = function (alertas) {
        var url = this.locationService.location + "alertas";
        return this.http.post(url, alertas)
            .map(function (response) { return response.json(); })
            .catch(this.error);
    };
    AlertasService.prototype.putAlertas = function (alertas) {
        return this.http.put(alertas._links.alertas.href, alertas)
            .map(function (response) { return response.json(); })
            .catch(this.error);
    };
    AlertasService.prototype.deleteAlertas = function (alertas) {
        return this.http.delete(alertas._links.alertas.href)
            .map(function (response) { return response.json(); })
            .catch(this.error);
    };
    AlertasService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__location_service__["a" /* LocationService */]])
    ], AlertasService);
    return AlertasService;
}());



/***/ }),

/***/ "../../../../../src/app/services/auditoria.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuditoriasService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__location_service__ = __webpack_require__("../../../../../src/app/services/location.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuditoriasService = (function () {
    function AuditoriasService(http, locationService) {
        this.http = http;
        this.locationService = locationService;
    }
    AuditoriasService.prototype.getAuditorias = function () {
        return this.http.get(this.locationService.location + "auditorias")
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    AuditoriasService.prototype.postAuditorias = function (auditorias) {
        var url = this.locationService.location + "auditorias";
        return this.http.post(url, auditorias)
            .map(function (response) { return response.json(); })
            .catch(this.error);
    };
    AuditoriasService.prototype.putAuditorias = function (auditorias) {
        return this.http.put(auditorias._links.auditorias.href, auditorias)
            .map(function (response) { return response.json(); })
            .catch(this.error);
    };
    AuditoriasService.prototype.deleteAuditorias = function (auditorias) {
        return this.http.delete(auditorias._links.auditorias.href)
            .map(function (response) { return response.json(); })
            .catch(this.error);
    };
    AuditoriasService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__location_service__["a" /* LocationService */]])
    ], AuditoriasService);
    return AuditoriasService;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_usuarios_service__ = __webpack_require__("../../../../../src/app/services/usuarios.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ts_md5_dist_md5__ = __webpack_require__("../../../../ts-md5/dist/md5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ts_md5_dist_md5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ts_md5_dist_md5__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = (function () {
    function AuthService(http, usuariosService, router) {
        this.http = http;
        this.usuariosService = usuariosService;
        this.router = router;
        this.isCurrentUserFromLocalStorage();
    }
    AuthService.prototype.isCurrentUserFromLocalStorage = function () {
        if (localStorage.getItem('currentUser')) {
            this.usuario = JSON.parse(localStorage.getItem('currentUser'));
            console.log("isCurrentUserFromLocalStorage" + this.usuario);
            return true;
        }
        return false;
    };
    AuthService.prototype.login = function (usuariosForm, errorMessage) {
        var _this = this;
        this.usuariosService.getUsuarioByNombre(usuariosForm).subscribe(function (response) {
            if (response._embedded.usuarios == undefined ||
                response._embedded.usuarios.length == 0) {
                console.log("El usuario " + usuariosForm.nombre + " no existe.");
                return errorMessage = "El usuario " + usuariosForm.nombre + " no existe.";
            }
            else {
                var formPassword = _this.passwordMd5(usuariosForm.password);
                var databasePassword = response._embedded.usuarios[0].password;
                console.log(formPassword + "-" + databasePassword);
                if (formPassword === databasePassword) {
                    localStorage.setItem('currentUser', JSON.stringify(response._embedded.usuarios[0]));
                    _this.usuario = response._embedded.usuarios[0];
                    _this.router.navigate(['ranking']);
                }
                else {
                    console.log("Password incorrecto.");
                    return errorMessage = "Password incorrecto.";
                }
            }
        });
        return errorMessage;
    };
    AuthService.prototype.passwordMd5 = function (password) {
        return "" + __WEBPACK_IMPORTED_MODULE_4_ts_md5_dist_md5__["Md5"].hashStr(password);
    };
    AuthService.prototype.getUsuario = function () {
        return this.usuario;
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__services_usuarios_service__["a" /* UsuariosService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/services/location.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LocationService = (function () {
    function LocationService(http) {
        this.http = http;
        if (window.location.hostname == "localhost") {
            this.location = "http://localhost:8080/";
        }
        else {
            this.location = "https://gamification-team-app.herokuapp.com/";
        }
    }
    LocationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], LocationService);
    return LocationService;
}());



/***/ }),

/***/ "../../../../../src/app/services/roles.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RolesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__location_service__ = __webpack_require__("../../../../../src/app/services/location.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RolesService = (function () {
    function RolesService(http, locationService) {
        this.http = http;
        this.locationService = locationService;
    }
    RolesService.prototype.getRoles = function () {
        return this.http.get(this.locationService.location + "roles")
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    RolesService.prototype.postRoles = function (roles) {
        var url = this.locationService.location + "roles";
        return this.http.post(url, roles)
            .map(function (response) { return response.json(); })
            .catch(this.error);
    };
    RolesService.prototype.putRoles = function (roles) {
        return this.http.put(roles._links.roles.href, roles)
            .map(function (response) { return response.json(); })
            .catch(this.error);
    };
    RolesService.prototype.deleteRoles = function (roles) {
        return this.http.delete(roles._links.roles.href)
            .map(function (response) { return response.json(); })
            .catch(this.error);
    };
    RolesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__location_service__["a" /* LocationService */]])
    ], RolesService);
    return RolesService;
}());



/***/ }),

/***/ "../../../../../src/app/services/tasks.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TasksService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__location_service__ = __webpack_require__("../../../../../src/app/services/location.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TasksService = (function () {
    function TasksService(http, locationService) {
        this.http = http;
        this.locationService = locationService;
    }
    TasksService.prototype.getTasks = function () {
        return this.http.get(this.locationService.location + "tasks")
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    TasksService.prototype.postTasks = function (tasks) {
        var url = this.locationService.location + "tasks";
        return this.http.post(url, tasks)
            .map(function (response) { return response.json(); })
            .catch(this.error);
    };
    TasksService.prototype.putTasks = function (tasks) {
        return this.http.put(tasks._links.tasks.href, tasks)
            .map(function (response) { return response.json(); })
            .catch(this.error);
    };
    TasksService.prototype.deleteTasks = function (tasks) {
        return this.http.delete(tasks._links.tasks.href)
            .map(function (response) { return response.json(); })
            .catch(this.error);
    };
    TasksService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__location_service__["a" /* LocationService */]])
    ], TasksService);
    return TasksService;
}());



/***/ }),

/***/ "../../../../../src/app/services/tasktypes.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TasktypesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__location_service__ = __webpack_require__("../../../../../src/app/services/location.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TasktypesService = (function () {
    function TasktypesService(http, locationService) {
        this.http = http;
        this.locationService = locationService;
    }
    TasktypesService.prototype.getTasktypes = function () {
        return this.http.get(this.locationService.location + "tasktypes")
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    TasktypesService.prototype.postTasktypes = function (tasktypes) {
        var url = this.locationService.location + "tasktypes";
        return this.http.post(url, tasktypes)
            .map(function (response) { return response.json(); })
            .catch(this.error);
    };
    TasktypesService.prototype.putTasktypes = function (tasktypes) {
        return this.http.put(tasktypes._links.taskTypes, tasktypes)
            .map(function (response) { return response.json(); })
            .catch(this.error);
    };
    TasktypesService.prototype.deleteTasktypes = function (tasktypes) {
        return this.http.delete(tasktypes._links.taskTypes.href)
            .map(function (response) { return response.json(); })
            .catch(this.error);
    };
    TasktypesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__location_service__["a" /* LocationService */]])
    ], TasktypesService);
    return TasktypesService;
}());



/***/ }),

/***/ "../../../../../src/app/services/usuarios.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuariosService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__location_service__ = __webpack_require__("../../../../../src/app/services/location.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UsuariosService = (function () {
    function UsuariosService(http, locationService) {
        this.http = http;
        this.locationService = locationService;
    }
    UsuariosService.prototype.getUsuarios = function () {
        return this.http.get(this.locationService.location + "usuarios")
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    UsuariosService.prototype.getUsuarioByNombre = function (usuarios) {
        return this.http.get(this.locationService.location + "usuarios/search/searchByNombre?nombre=" + usuarios.nombre)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    UsuariosService.prototype.postUsuarios = function (usuarios) {
        var url = this.locationService.location + "usuarios";
        return this.http.post(url, usuarios)
            .map(function (response) { return response.json(); })
            .catch(this.error);
    };
    UsuariosService.prototype.putUsuarios = function (usuarios) {
        return this.http.put(usuarios._links.usuarios.href, usuarios)
            .map(function (response) { return response.json(); })
            .catch(this.error);
    };
    UsuariosService.prototype.deleteUsuarios = function (usuarios) {
        return this.http.delete(usuarios._links.usuarios.href)
            .map(function (response) { return response.json(); })
            .catch(this.error);
    };
    UsuariosService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__location_service__["a" /* LocationService */]])
    ], UsuariosService);
    return UsuariosService;
}());



/***/ }),

/***/ "../../../../../src/app/utils/auth-checker.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthChecker; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthChecker = (function () {
    function AuthChecker(router) {
        this.router = router;
    }
    AuthChecker.prototype.canActivate = function (route, state) {
        return true;
        /*
                if (localStorage.getItem('currentUser')) {
                    return true;
                }
        
                this.router.navigate(['/login'], { queryParams: { }});
        
                return false;
        */
    };
    AuthChecker = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AuthChecker);
    return AuthChecker;
}());



/***/ }),

/***/ "../../../../../src/app/views/alertas/alertas-table.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  max-height: 500px;\n  min-width: 300px;\n}\n\n.mat-table {\n  overflow: auto;\n  max-height: 500px;\n}\n\n.example-full-width {\n  width: 20%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/alertas/alertas-table.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container mat-elevation-z8\">\n  <mat-table #table [dataSource]=\"dataSource\">\n\n    <!-- id Column -->\n    <ng-container matColumnDef=\"id\">\n      <mat-header-cell style=\"min-width: 50px; max-width: 4%;\" *matHeaderCellDef style=\"max-width: 50px\"> ID </mat-header-cell>\n      <mat-cell style=\"min-width: 50px; max-width: 4%;\" *matCellDef=\"let element\" style=\"max-width: 50px\"> 1 </mat-cell>\n    </ng-container>\n\n    <!-- Usuario Column -->\n    <ng-container matColumnDef=\"usuario\">\n      <mat-header-cell *matHeaderCellDef> Usuario </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.usuario}} </mat-cell>\n    </ng-container>\n\n    <!-- Mensaje Column -->\n    <ng-container matColumnDef=\"mensaje\">\n      <mat-header-cell *matHeaderCellDef> Mensaje </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.mensaje}} </mat-cell>\n    </ng-container>\n\n    <!-- Fecha Column -->\n    <ng-container matColumnDef=\"fecha\">\n      <mat-header-cell *matHeaderCellDef> Fecha </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.fecha}} </mat-cell>\n    </ng-container>\n\n    <!-- Action Column -->\n    <ng-container matColumnDef=\"action\">\n      <mat-header-cell *matHeaderCellDef class=\"center_row\"> Action </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\" class=\"center_row\">\n        <button mat-raised-button color=\"primary\" (click)=\"update(element)\">Modificar</button>\n        <button mat-raised-button color=\"warn\" (click)=\"remove(element)\">Borrar</button>\n      </mat-cell>\n    </ng-container>\n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n  </mat-table>\n</div>"

/***/ }),

/***/ "../../../../../src/app/views/alertas/alertas-table.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertasTable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_alertas__ = __webpack_require__("../../../../../src/app/model/alertas.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_alertas_service__ = __webpack_require__("../../../../../src/app/services/alertas.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AlertasTable = (function () {
    function AlertasTable(alertasService) {
        this.alertasService = alertasService;
        this.displayedColumns = ['id', 'usuario', 'mensaje', 'fecha', 'action'];
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatTableDataSource */]();
        this.alertasForm = new __WEBPACK_IMPORTED_MODULE_2__model_alertas__["a" /* Alertas */]();
        this.loadAlertas();
    }
    AlertasTable.prototype.loadAlertas = function () {
        var _this = this;
        this.alertasService.getAlertas().subscribe(function (response) {
            _this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatTableDataSource */](response._embedded.alertas);
        });
    };
    AlertasTable.prototype.update = function (item) {
        this.alertasForm = item;
    };
    AlertasTable.prototype.remove = function (item) {
        var _this = this;
        this.alertasService.deleteAlertas(item).subscribe(function (response) {
            _this.loadAlertas();
        });
    };
    AlertasTable.prototype.reiniciar = function () {
        this.alertasForm = new __WEBPACK_IMPORTED_MODULE_2__model_alertas__["a" /* Alertas */]();
    };
    AlertasTable.prototype.enviar = function () {
        var _this = this;
        if (this.alertasForm._links != undefined) {
            this.alertasService.putAlertas(this.alertasForm).subscribe(function (response) {
                _this.loadAlertas();
            });
        }
        else {
            this.alertasService.postAlertas(this.alertasForm).subscribe(function (response) {
                _this.loadAlertas();
            });
        }
    };
    AlertasTable = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'alertas-table',
            styles: [__webpack_require__("../../../../../src/app/views/alertas/alertas-table.css")],
            template: __webpack_require__("../../../../../src/app/views/alertas/alertas-table.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_alertas_service__["a" /* AlertasService */]])
    ], AlertasTable);
    return AlertasTable;
}());



/***/ }),

/***/ "../../../../../src/app/views/alertas/alertas.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".timeleft{\n\t\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/alertas/alertas.component.html":
/***/ (function(module, exports) {

module.exports = "<alertas-table></alertas-table>\n"

/***/ }),

/***/ "../../../../../src/app/views/alertas/alertas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_alertas_service__ = __webpack_require__("../../../../../src/app/services/alertas.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertasComponent = (function () {
    function AlertasComponent(alertasService) {
        this.alertasService = alertasService;
        this.datasource = new __WEBPACK_IMPORTED_MODULE_2__angular_material__["B" /* MatTableDataSource */]();
    }
    AlertasComponent.prototype.refreshTable = function (event) {
        var _this = this;
        this.alertasService.getAlertas().subscribe(function (response) {
            _this.datasource = new __WEBPACK_IMPORTED_MODULE_2__angular_material__["B" /* MatTableDataSource */](response._embedded.alertas);
        });
    };
    AlertasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'alertas',
            template: __webpack_require__("../../../../../src/app/views/alertas/alertas.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/alertas/alertas.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_alertas_service__["a" /* AlertasService */]])
    ], AlertasComponent);
    return AlertasComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  max-height: 500px;\n  min-width: 300px;\n}\n\n.mat-table {\n  overflow: auto;\n  max-height: 500px;\n}\n\n.login-form {\n  min-width: 150px;\n  width: 100%;\n  font-size: 20px;\n}\n\n.login-full-width {\n  width: 100%;\n}\n\n.wrapper {\n\tpadding: 15px 20px 40px 50px;\n\tmargin: 203px 54px 10px 10px;\n\tfont-size: 24px;\n\tfont-weight: bold;\n\topacity: 0.8;\n\tcolor: #000;\n\twidth: 30%;\n    min-width: 254px;\n\tfloat: right;\n}\n\n.login-buttons{\n\tfloat: right;\n}\n\n.mat-checkbox-label, \n.mat-checkbox-layout .mat-checkbox-label {\n\tpadding-right: 23px;\n}\n\n.error-message-div {\n    background-color: rgba(255, 0, 0, 0.1);\n    color: red;\n    padding: 6px 6px 6px 11px;\n    border: 1px solid;\n    margin: -6px 10px 10px 10px;\n    font-size: 15px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n\t<form class=\"login-form\">\n\t\t<div>\n\t\t  <mat-form-field class=\"login-full-width\">\n\t\t    <input required matInput name=\"nombre\" placeholder=\"Nombre\" [(ngModel)]=\"usuariosForm.nombre\">\n\t\t  </mat-form-field>\n\t\t</div>\n\t\t<div>\n\t\t  <mat-form-field *ngIf=\"newUserForm == true\" class=\"login-full-width\">\n\t\t    <input required matInput name=\"apellidos\" placeholder=\"Apellidos\" [(ngModel)]=\"usuariosForm.apellidos\">\n\t\t  </mat-form-field>\n\t\t</div>\n\t\t<div>\n\t\t  <mat-form-field class=\"login-full-width\">\n\t\t    <input required matInput type=\"password\" name=\"password\" placeholder=\"Password\" [(ngModel)]=\"usuariosForm.password\">\n\t\t  </mat-form-field>\n\t\t</div>\n\t\t<div class=\"error-message-div\" *ngIf=\"this.errorMessage.length > 0\"> {{ errorMessage }} </div>\n\t\t<div class=\"login-buttons\">\n\t\t  <mat-checkbox [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"newUserForm\" [checked]=\"newUserForm\" (change)=\"registerForm($event)\">Crear usuario</mat-checkbox>\n\t\t  <button mat-raised-button [disabled]=\"loginButtonDisabled()\" *ngIf=\"newUserForm == false\" #acceptButton color=\"primary\" (click)=\"login()\">Login</button>\n\t\t  <button style=\"background-color: #54ff00de\" mat-raised-button [disabled]=\"registroButtonDisabled()\" *ngIf=\"newUserForm == true\" #acceptButton color=\"primary\" (click)=\"registro()\">Registro</button>\n\t\t</div>\n\t</form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/views/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_usuarios_service__ = __webpack_require__("../../../../../src/app/services/usuarios.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_usuarios__ = __webpack_require__("../../../../../src/app/model/usuarios.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = (function () {
    function LoginComponent(usuariosService, authService) {
        this.usuariosService = usuariosService;
        this.authService = authService;
        this.usuariosForm = new __WEBPACK_IMPORTED_MODULE_3__model_usuarios__["a" /* Usuarios */]();
        this.datasource = new __WEBPACK_IMPORTED_MODULE_2__angular_material__["B" /* MatTableDataSource */]();
        this.newUserForm = false;
        this.errorMessage = "";
        localStorage.removeItem('currentUser');
    }
    LoginComponent.prototype.loginButtonDisabled = function () {
        var disabled = false;
        if (this.usuariosForm.nombre == undefined ||
            this.usuariosForm.password == undefined) {
            disabled = true;
        }
        else {
            if (this.usuariosForm.nombre.length <= 3 ||
                this.usuariosForm.password.length <= 3) {
                disabled = true;
            }
        }
        return disabled;
    };
    LoginComponent.prototype.registroButtonDisabled = function () {
        var disabled = false;
        if (this.usuariosForm.nombre == undefined ||
            this.usuariosForm.password == undefined ||
            this.usuariosForm.apellidos == undefined) {
            disabled = true;
        }
        else {
            if (this.usuariosForm.nombre.length <= 3 ||
                this.usuariosForm.password.length <= 3 ||
                this.usuariosForm.apellidos.length <= 3) {
                disabled = true;
            }
        }
        return disabled;
    };
    LoginComponent.prototype.login = function () {
        this.errorMessage = this.authService.login(this.usuariosForm, this.errorMessage);
    };
    LoginComponent.prototype.registro = function () {
        var _this = this;
        this.usuariosService.getUsuarioByNombre(this.usuariosForm).subscribe(function (response) {
            if (response._embedded.usuarios == undefined ||
                response._embedded.usuarios.length == 0) {
                console.log("not found user " + _this.usuariosForm.nombre);
                var nuevoUsuario = new __WEBPACK_IMPORTED_MODULE_3__model_usuarios__["a" /* Usuarios */]();
                nuevoUsuario.nombre = _this.usuariosForm.nombre;
                nuevoUsuario.apellidos = _this.usuariosForm.apellidos;
                nuevoUsuario.password = _this.authService.passwordMd5(_this.usuariosForm.password);
                console.log(nuevoUsuario.password + '----' + _this.usuariosForm.password);
                _this.usuariosService.postUsuarios(nuevoUsuario).subscribe(function (response) {
                    _this.login();
                });
            }
            else {
                _this.errorMessage = "El usuario " + _this.usuariosForm.nombre + " ya existe.";
            }
        });
    };
    LoginComponent.prototype.registerForm = function (event) {
        console.log(event.checked);
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'login',
            template: __webpack_require__("../../../../../src/app/views/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/login/login.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_1__angular_core__["_14" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_usuarios_service__["a" /* UsuariosService */],
            __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/logout/logout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LogoutComponent = (function () {
    function LogoutComponent(router) {
        this.router = router;
        localStorage.removeItem('currentUser');
        this.router.navigate(['/login'], { queryParams: {} });
    }
    LogoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'logout',
            template: '',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/profile/profile-table.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  max-height: 500px;\n  min-width: 300px;\n}\n\n.mat-table {\n  overflow: auto;\n  max-height: 500px;\n}\n\n.example-full-width {\n  width: 20%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/profile/profile-table.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\">\n    <input required matInput name=\"tipo\" placeholder=\"Tipo\" [(ngModel)]=\"tasksForm.tipo\">\n  </mat-form-field>\n  <mat-form-field class=\"example-full-width\">\n    <input required matInput type=\"number\" name=\"puntos\" placeholder=\"Puntos\" [(ngModel)]=\"tasksForm.puntos\">\n  </mat-form-field>\n  <mat-form-field class=\"example-full-width\">\n    <input required matInput name=\"descripcion\" placeholder=\"Descripcion\" [(ngModel)]=\"tasksForm.descripcion\">\n  </mat-form-field>\n  &nbsp;\n  <button mat-raised-button [disabled]=\"acceptButtonDisabled()\" #acceptButton color=\"primary\" (click)=\"enviar()\">Enviar</button>\n  <button mat-raised-button (click)=\"reiniciar()\">Reiniciar</button>\n</form>\n\n<div class=\"example-container mat-elevation-z8\">\n  <mat-table #table [dataSource]=\"dataSource\">\n  displayedColumns = ['id', 'tipo', 'descripcion', 'puntos', 'action'];\n\n    <!-- id Column -->\n    <ng-container matColumnDef=\"id\">\n      <mat-header-cell style=\"min-width: 50px; max-width: 4%;\" *matHeaderCellDef style=\"max-width: 50px\"> ID </mat-header-cell>\n      <mat-cell style=\"min-width: 50px; max-width: 4%;\" *matCellDef=\"let element\" style=\"max-width: 50px\"> 1 </mat-cell>\n    </ng-container>\n\n    <!-- Tipo Column -->\n    <ng-container matColumnDef=\"tipo\">\n      <mat-header-cell *matHeaderCellDef> Tipo </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.tipo}} </mat-cell>\n    </ng-container>\n\n    <!-- Descripcion Column -->\n    <ng-container matColumnDef=\"descripcion\">\n      <mat-header-cell *matHeaderCellDef> Descripcion </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.descripcion}} </mat-cell>\n    </ng-container>\n\n    <!-- Puntos Column -->\n    <ng-container matColumnDef=\"puntos\">\n      <mat-header-cell *matHeaderCellDef class=\"center_row\"> Puntos </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\" class=\"center_row\"> {{element.puntos}} </mat-cell>\n    </ng-container>\n\n    <!-- Action Column -->\n    <ng-container matColumnDef=\"action\">\n      <mat-header-cell *matHeaderCellDef class=\"center_row\"> Action </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\" class=\"center_row\">\n        <button mat-raised-button color=\"primary\" (click)=\"update(element)\">Modificar</button>\n        <button mat-raised-button color=\"warn\" (click)=\"remove(element)\">Borrar</button>\n      </mat-cell>\n    </ng-container>\n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n  </mat-table>\n</div>"

/***/ }),

/***/ "../../../../../src/app/views/profile/profile-table.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileTable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_tasktypes__ = __webpack_require__("../../../../../src/app/model/tasktypes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_tasktypes_service__ = __webpack_require__("../../../../../src/app/services/tasktypes.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileTable = (function () {
    function ProfileTable(tasktypesService) {
        this.tasktypesService = tasktypesService;
        this.displayedColumns = ['id', 'tipo', 'descripcion', 'puntos', 'action'];
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatTableDataSource */]();
        this.tasksForm = new __WEBPACK_IMPORTED_MODULE_2__model_tasktypes__["a" /* TaskTypes */]();
        this.loadTaskTypes();
    }
    ProfileTable.prototype.loadTaskTypes = function () {
        var _this = this;
        this.tasktypesService.getTasktypes().subscribe(function (response) {
            _this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatTableDataSource */](response._embedded.tasktypes);
        });
    };
    ProfileTable.prototype.update = function (item) {
        this.tasksForm = item;
    };
    ProfileTable.prototype.remove = function (item) {
        var _this = this;
        console.log(item);
        this.tasktypesService.deleteTasktypes(item).subscribe(function (response) {
            _this.loadTaskTypes();
        });
    };
    ProfileTable.prototype.acceptButtonDisabled = function () {
        var disabled = false;
        if (this.tasksForm.tipo == undefined ||
            this.tasksForm.descripcion == undefined) {
            disabled = true;
        }
        else {
            if (this.tasksForm.tipo.length <= 3 ||
                this.tasksForm.descripcion.length <= 3) {
                disabled = true;
            }
        }
        return disabled;
    };
    ProfileTable.prototype.reiniciar = function () {
        this.tasksForm = new __WEBPACK_IMPORTED_MODULE_2__model_tasktypes__["a" /* TaskTypes */]();
    };
    ProfileTable.prototype.enviar = function () {
        var _this = this;
        if (this.tasksForm._links != undefined) {
            this.tasktypesService.putTasktypes(this.tasksForm).subscribe(function (response) {
                _this.loadTaskTypes();
            });
        }
        else {
            this.tasktypesService.postTasktypes(this.tasksForm).subscribe(function (response) {
                _this.loadTaskTypes();
            });
        }
    };
    ProfileTable = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'profile-table',
            styles: [__webpack_require__("../../../../../src/app/views/profile/profile-table.css")],
            template: __webpack_require__("../../../../../src/app/views/profile/profile-table.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_tasktypes_service__["a" /* TasktypesService */]])
    ], ProfileTable);
    return ProfileTable;
}());



/***/ }),

/***/ "../../../../../src/app/views/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-card {\n  width: 400px;\n  margin: 30px;\n  background-color: rgba(0, 0, 0, 0.5);\n  color: white;\n}\n\n.mat-card-subtitle {\n  color: white !important;\n}\n\n.example-header-image {\n  background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\n  background-size: cover;\n}\n\n.demo-card-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column nowrap;\n          flex-flow: column nowrap;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"display: flex\">\n\t<mat-card class=\"example-card\" fxLayout=\"row\">\n\t  <mat-card-header>\n\t    <div mat-card-avatar class=\"example-header-image\"></div>\n\t    <mat-card-title>Shiba Inu</mat-card-title>\n\t    <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n\t  </mat-card-header>\n\t  <!-- http://3.bp.blogspot.com/-vkHMT0LA91A/UGR3k_mv-lI/AAAAAAAABCw/k3gVPQqGIuc/s1600/cactuar.png -->\n\t  <img mat-card-image src=\"http://1.bp.blogspot.com/-99EH2exwEg8/VF9Md6_UTEI/AAAAAAAABUM/4UCrnaYvBVo/s1600/Wario.png\" alt=\"Photo of a Shiba Inu\">\n\t  <mat-card-content>\n\t    <p>\n\t      The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\n\t      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\n\t      bred for hunting.\n\t    </p>\n\t  </mat-card-content>\n\t  <mat-card-actions>\n\t    <button mat-button>LIKE</button>\n\t    <button mat-button>SHARE</button>\n\t  </mat-card-actions>\n\t</mat-card>\n\t<mat-card class=\"example-card\" fxLayout=\"row\">\n\t  <mat-card-header>\n\t    <div mat-card-avatar class=\"example-header-image\"></div>\n\t    <mat-card-title>Shiba Inu</mat-card-title>\n\t    <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n\t  </mat-card-header>\n\t  <img mat-card-image src=\"https://alarcosjuegoderol.files.wordpress.com/2013/03/clerigo.png\" alt=\"Photo of a Shiba Inu\">\n\t  <mat-card-content>\n\t    <p>\n\t      The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\n\t      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\n\t      bred for hunting.\n\t    </p>\n\t  </mat-card-content>\n\t  <mat-card-actions>\n\t    <button mat-button>LIKE</button>\n\t    <button mat-button>SHARE</button>\n\t  </mat-card-actions>\n\t</mat-card>\n\t<mat-card class=\"example-card\" fxLayout=\"row\">\n\t  <mat-card-header>\n\t    <div mat-card-avatar class=\"example-header-image\"></div>\n\t    <mat-card-title>Shiba Inu</mat-card-title>\n\t    <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n\t  </mat-card-header>\n\t  <img mat-card-image src=\"https://www.websmultimedia.com/style/img/servicios/ilustracion-juegos.png\" alt=\"Photo of a Shiba Inu\">\n\t  <mat-card-content>\n\t    <p>\n\t      The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\n\t      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\n\t      bred for hunting.\n\t    </p>\n\t  </mat-card-content>\n\t  <mat-card-actions>\n\t    <button mat-button>LIKE</button>\n\t    <button mat-button>SHARE</button>\n\t  </mat-card-actions>\n\t</mat-card>\n</div>\n<profile-table></profile-table>\n"

/***/ }),

/***/ "../../../../../src/app/views/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_tasktypes_service__ = __webpack_require__("../../../../../src/app/services/tasktypes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(tasktypesService) {
        this.tasktypesService = tasktypesService;
        this.datasource = new __WEBPACK_IMPORTED_MODULE_2__angular_material__["B" /* MatTableDataSource */]();
    }
    ProfileComponent.prototype.refreshTable = function (event) {
        var _this = this;
        this.tasktypesService.getTasktypes().subscribe(function (response) {
            _this.datasource = new __WEBPACK_IMPORTED_MODULE_2__angular_material__["B" /* MatTableDataSource */](response._embedded.tasktypes);
        });
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'profile',
            template: __webpack_require__("../../../../../src/app/views/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_tasktypes_service__["a" /* TasktypesService */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/ranking/ranking-table.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ranking-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  max-height: 500px;\n  min-width: 300px;\n}\n\n.mat-table {\n  overflow: auto;\n  max-height: 500px;\n}\n\n.ranking-form {\n  min-width: 150px;\n  width: 100%;\n  font-size: 20px;\n  text-align: center;\n}\n\n.ranking-full-width {\n  width: 20%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/ranking/ranking-table.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"ranking-form\">\n  <mat-form-field class=\"ranking-full-width\">\n    <input required matInput name=\"nombre\" placeholder=\"Nombre\" [(ngModel)]=\"usuariosForm.nombre\">\n  </mat-form-field>\n  <mat-form-field class=\"ranking-full-width\">\n    <input required matInput name=\"apellidos\" placeholder=\"Apellidos\" [(ngModel)]=\"usuariosForm.apellidos\">\n  </mat-form-field>\n  <mat-form-field style=\"width: 300px;\">\n    <mat-select required name=\"rol\" placeholder=\"Rol\" [(ngModel)]=\"usuariosForm.rol\">\n      <mat-option *ngFor=\"let rol of roles; let i = index\" value=\"{{ rol.nombre }}\">{{ rol.nombre }}</mat-option>\n    </mat-select>\n  </mat-form-field>\n  &nbsp;\n  <button mat-raised-button [disabled]=\"acceptButtonDisabled()\" #acceptButton color=\"primary\" (click)=\"enviarUsuario()\">Enviar</button>\n  <button mat-raised-button (click)=\"reiniciarUsuario()\">Reiniciar</button>\n</form>\n\n<div class=\"ranking-container mat-elevation-z8\">\n  <mat-table #table [dataSource]=\"dataSource\">\n\n    <!-- id Column -->\n    <ng-container matColumnDef=\"id\">\n      <mat-header-cell style=\"min-width: 50px; max-width: 4%;\" *matHeaderCellDef> ID </mat-header-cell>\n      <mat-cell  style=\"min-width: 50px; max-width: 4%;\" *matCellDef=\"let element\"> 1 </mat-cell>\n    </ng-container>\n\n    <!-- Nombre Column -->\n    <ng-container matColumnDef=\"nombre\">\n      <mat-header-cell *matHeaderCellDef> Nombre </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.nombre}} </mat-cell>\n    </ng-container>\n\n    <!-- Apellidos Column -->\n    <ng-container matColumnDef=\"apellidos\">\n      <mat-header-cell *matHeaderCellDef> Apellidos </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.apellidos}} </mat-cell>\n    </ng-container>\n\n    <!-- Rol Column -->\n    <ng-container matColumnDef=\"rol\">\n      <mat-header-cell *matHeaderCellDef> Rol </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.rol}} </mat-cell>\n    </ng-container>\n\n    <!-- puntos_actuales Column -->\n    <ng-container matColumnDef=\"puntos_actuales\">\n      <mat-header-cell *matHeaderCellDef class=\"center_row\"> Puntos Actuales </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\" class=\"center_row\"> 0 </mat-cell>\n    </ng-container>\n\n    <!-- puntos_acumulados Column -->\n    <ng-container matColumnDef=\"puntos_acumulados\">\n      <mat-header-cell *matHeaderCellDef class=\"center_row\"> Puntos Acumulados </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\" class=\"center_row\"> 0 </mat-cell>\n    </ng-container>\n\n    <!-- Action Column -->\n    <ng-container matColumnDef=\"action\">\n      <mat-header-cell *matHeaderCellDef class=\"center_row\"> Action </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\" class=\"center_row\">\n        <button mat-raised-button color=\"primary\" (click)=\"updateUsuario(element)\">Modificar</button>\n        <button mat-raised-button color=\"warn\" (click)=\"removeUsuario(element)\">Borrar</button>\n      </mat-cell>\n    </ng-container>\n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\">{{row| json}}</mat-row>\n  </mat-table>\n</div>"

/***/ }),

/***/ "../../../../../src/app/views/ranking/ranking-table.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RankingTable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_usuarios__ = __webpack_require__("../../../../../src/app/model/usuarios.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_usuarios_service__ = __webpack_require__("../../../../../src/app/services/usuarios.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_roles_service__ = __webpack_require__("../../../../../src/app/services/roles.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RankingTable = (function () {
    function RankingTable(usuariosService, rolesService, authService) {
        this.usuariosService = usuariosService;
        this.rolesService = rolesService;
        this.authService = authService;
        this.displayedColumns = ['id', 'nombre', 'apellidos', 'rol', 'puntos_actuales', 'puntos_acumulados', 'action'];
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatTableDataSource */]();
        console.log("Usuario logado:" + this.authService.getUsuario());
        this.usuariosForm = new __WEBPACK_IMPORTED_MODULE_2__model_usuarios__["a" /* Usuarios */]();
        this.usuariosForm.nombre = "";
        this.loadUsuarios();
    }
    RankingTable.prototype.loadUsuarios = function () {
        var _this = this;
        this.usuariosService.getUsuarios().subscribe(function (response) {
            _this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatTableDataSource */](response._embedded.usuarios);
        });
        this.rolesService.getRoles().subscribe(function (response) {
            _this.roles = response._embedded.roles;
        });
    };
    RankingTable.prototype.updateUsuario = function (item) {
        this.usuariosForm = item;
    };
    RankingTable.prototype.removeUsuario = function (item) {
        var _this = this;
        this.usuariosService.deleteUsuarios(item).subscribe(function (response) {
            _this.loadUsuarios();
        });
    };
    RankingTable.prototype.acceptButtonDisabled = function () {
        var disabled = false;
        if (this.usuariosForm.nombre == undefined ||
            this.usuariosForm.apellidos == undefined) {
            disabled = true;
        }
        else {
            if (this.usuariosForm.nombre.length <= 3 ||
                this.usuariosForm.apellidos.length <= 3) {
                disabled = true;
            }
        }
        return disabled;
    };
    RankingTable.prototype.reiniciarUsuario = function () {
        this.usuariosForm = new __WEBPACK_IMPORTED_MODULE_2__model_usuarios__["a" /* Usuarios */]();
    };
    RankingTable.prototype.enviarUsuario = function () {
        var _this = this;
        //var rol = this.roles.filter( rol => rol.nombre === this.usuariosForm.rol)[0];
        if (this.usuariosForm.password == undefined) {
            this.usuariosForm.password = this.authService.passwordMd5("everis00");
            console.log("Password:" + this.usuariosForm.password);
        }
        if (this.usuariosForm._links != undefined) {
            this.usuariosService.putUsuarios(this.usuariosForm).subscribe(function (response) {
                _this.loadUsuarios();
            });
        }
        else {
            this.usuariosService.postUsuarios(this.usuariosForm).subscribe(function (response) {
                _this.loadUsuarios();
            });
        }
    };
    RankingTable = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ranking-table',
            styles: [__webpack_require__("../../../../../src/app/views/ranking/ranking-table.css")],
            template: __webpack_require__("../../../../../src/app/views/ranking/ranking-table.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_usuarios_service__["a" /* UsuariosService */],
            __WEBPACK_IMPORTED_MODULE_5__services_roles_service__["a" /* RolesService */],
            __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]])
    ], RankingTable);
    return RankingTable;
}());



/***/ }),

/***/ "../../../../../src/app/views/ranking/ranking.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".timeleft{\n\ttext-align: right;\n    padding-right: 2%;\n    font-size: 30px;\n    color: white;\n    position: absolute;\n    right: 0px;\n    top: 10px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/ranking/ranking.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"timeleft\"><b>Time Left:</b> {{time}}</div>\n<ranking-table></ranking-table>\n"

/***/ }),

/***/ "../../../../../src/app/views/ranking/ranking.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RankingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_usuarios_service__ = __webpack_require__("../../../../../src/app/services/usuarios.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_location_service__ = __webpack_require__("../../../../../src/app/services/location.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_stompjs__ = __webpack_require__("../../../../stompjs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_stompjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_stompjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sockjs_client__ = __webpack_require__("../../../../sockjs-client/lib/entry.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sockjs_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_sockjs_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RankingComponent = (function () {
    function RankingComponent(usuariosService, locationService) {
        this.usuariosService = usuariosService;
        this.locationService = locationService;
        this.time = "Loading...";
        this.datasource = new __WEBPACK_IMPORTED_MODULE_5__angular_material__["B" /* MatTableDataSource */]();
        this.serverUrl = this.locationService.location + "socket";
        this.initializeWebSocketConnection();
    }
    RankingComponent.prototype.initializeWebSocketConnection = function () {
        var ws = new __WEBPACK_IMPORTED_MODULE_4_sockjs_client___default.a(this.serverUrl);
        this.stompClient = __WEBPACK_IMPORTED_MODULE_3_stompjs___default.a.over(ws);
        var that = this;
        this.stompClient.connect({}, function (frame) {
            that.stompClient.debug = null;
            that.stompClient.subscribe("/time", function (message) {
                if (message.body) {
                    that.time = message.body;
                }
            });
        });
    };
    RankingComponent.prototype.refreshTable = function (event) {
        var _this = this;
        this.usuariosService.getUsuarios().subscribe(function (response) {
            _this.datasource = new __WEBPACK_IMPORTED_MODULE_5__angular_material__["B" /* MatTableDataSource */](response._embedded.usuarios);
        });
    };
    RankingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'ranking',
            template: __webpack_require__("../../../../../src/app/views/ranking/ranking.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/ranking/ranking.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_usuarios_service__["a" /* UsuariosService */],
            __WEBPACK_IMPORTED_MODULE_1__services_location_service__["a" /* LocationService */]])
    ], RankingComponent);
    return RankingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/roles/roles-table.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  max-height: 500px;\n  min-width: 300px;\n}\n\n.mat-table {\n  overflow: auto;\n  max-height: 500px;\n}\n\n.example-full-width {\n  width: 20%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/roles/roles-table.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\">\n    <input required matInput name=\"nombre\" placeholder=\"Nombre del Rol\" [(ngModel)]=\"rolesForm.nombre\">\n  </mat-form-field>\n  <mat-form-field class=\"example-full-width\">\n    <input required matInput name=\"descripcion\" placeholder=\"Descripcion del Rol\" [(ngModel)]=\"rolesForm.descripcion\">\n  </mat-form-field>\n  <mat-form-field style=\"width: 450px;\" class=\"example-full-width\">\n    <input required matInput name=\"caracteristicas\" placeholder=\"Caracteristicas\" [(ngModel)]=\"rolesForm.caracteristicas\">\n  </mat-form-field>\n  &nbsp;\n  <button mat-raised-button [disabled]=\"acceptButtonDisabled()\" #acceptButton color=\"primary\" (click)=\"enviarRol()\">Enviar</button>\n  <button mat-raised-button (click)=\"reiniciarRol()\">Reiniciar</button>\n</form>\n\n<div class=\"example-container mat-elevation-z8\">\n  <mat-table #table [dataSource]=\"dataSource\">\n\n    <!-- id Column -->\n    <ng-container matColumnDef=\"id\">\n      <mat-header-cell style=\"min-width: 50px; max-width: 4%;\" *matHeaderCellDef> ID </mat-header-cell>\n      <mat-cell style=\"min-width: 50px; max-width: 4%;\" *matCellDef=\"let element\"> 1 </mat-cell>\n    </ng-container>\n\n    <!-- Nombre Column -->\n    <ng-container matColumnDef=\"nombre\">\n      <mat-header-cell style=\"min-width: 200px; max-width: 15%;\" *matHeaderCellDef> Nombre </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\" style=\"min-width: 200px; max-width: 15%;\"> {{element.nombre}} </mat-cell>\n    </ng-container>\n\n    <!-- Descripcion Column -->\n    <ng-container matColumnDef=\"descripcion\">\n      <mat-header-cell *matHeaderCellDef style=\"min-width: 250px; max-width: 27%;\"> Descripcion </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\" style=\"min-width: 250px; max-width: 27%;\"> {{element.descripcion}} </mat-cell>\n    </ng-container>\n\n    <!-- Caracteristicas Column -->\n    <ng-container matColumnDef=\"caracteristicas\">\n      <mat-header-cell *matHeaderCellDef style=\"min-width: 250px; max-width: 27%;\"> Caracteristicas </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\" style=\"min-width: 250px; max-width: 27%;\"> {{element.caracteristicas}} </mat-cell>\n    </ng-container>\n\n    <!-- Action Column -->\n    <ng-container matColumnDef=\"action\">\n      <mat-header-cell *matHeaderCellDef class=\"center_row\"> Action </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\" class=\"center_row\">\n        <button mat-raised-button color=\"primary\" (click)=\"updateRol(element)\">Modificar</button>\n        <button mat-raised-button color=\"warn\" (click)=\"removeRol(element)\">Borrar</button>\n      </mat-cell>\n    </ng-container>\n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n  </mat-table>\n</div>"

/***/ }),

/***/ "../../../../../src/app/views/roles/roles-table.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RolesTable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_roles__ = __webpack_require__("../../../../../src/app/model/roles.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_roles_service__ = __webpack_require__("../../../../../src/app/services/roles.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RolesTable = (function () {
    function RolesTable(rolesService) {
        this.rolesService = rolesService;
        this.displayedColumns = ['id', 'nombre', 'descripcion', 'caracteristicas', 'action'];
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatTableDataSource */]();
        this.rolesForm = new __WEBPACK_IMPORTED_MODULE_2__model_roles__["a" /* Roles */]();
        this.loadRoles();
    }
    RolesTable.prototype.loadRoles = function () {
        var _this = this;
        this.rolesService.getRoles().subscribe(function (response) {
            _this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatTableDataSource */](response._embedded.roles);
        });
    };
    RolesTable.prototype.updateRol = function (item) {
        this.rolesForm = item;
    };
    RolesTable.prototype.removeRol = function (item) {
        var _this = this;
        this.rolesService.deleteRoles(item).subscribe(function (response) {
            _this.loadRoles();
        });
    };
    RolesTable.prototype.acceptButtonDisabled = function () {
        var disabled = false;
        if (this.rolesForm.nombre == undefined ||
            this.rolesForm.descripcion == undefined) {
            disabled = true;
        }
        else {
            if (this.rolesForm.nombre.length <= 3 ||
                this.rolesForm.descripcion.length <= 3) {
                disabled = true;
            }
        }
        return disabled;
    };
    RolesTable.prototype.reiniciarRol = function () {
        this.rolesForm = new __WEBPACK_IMPORTED_MODULE_2__model_roles__["a" /* Roles */]();
    };
    RolesTable.prototype.enviarRol = function () {
        var _this = this;
        if (this.rolesForm._links != undefined) {
            this.rolesService.putRoles(this.rolesForm).subscribe(function (response) {
                _this.loadRoles();
            });
        }
        else {
            this.rolesService.postRoles(this.rolesForm).subscribe(function (response) {
                _this.loadRoles();
            });
        }
    };
    RolesTable = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'roles-table',
            styles: [__webpack_require__("../../../../../src/app/views/roles/roles-table.css")],
            template: __webpack_require__("../../../../../src/app/views/roles/roles-table.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_roles_service__["a" /* RolesService */]])
    ], RolesTable);
    return RolesTable;
}());



/***/ }),

/***/ "../../../../../src/app/views/roles/roles.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".timeleft{\n\t\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/roles/roles.component.html":
/***/ (function(module, exports) {

module.exports = "<roles-table></roles-table>\n"

/***/ }),

/***/ "../../../../../src/app/views/roles/roles.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RolesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_roles_service__ = __webpack_require__("../../../../../src/app/services/roles.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RolesComponent = (function () {
    function RolesComponent(rolesService) {
        this.rolesService = rolesService;
        this.datasource = new __WEBPACK_IMPORTED_MODULE_2__angular_material__["B" /* MatTableDataSource */]();
    }
    RolesComponent.prototype.refreshTable = function (event) {
        var _this = this;
        this.rolesService.getRoles().subscribe(function (response) {
            _this.datasource = new __WEBPACK_IMPORTED_MODULE_2__angular_material__["B" /* MatTableDataSource */](response._embedded.roles);
        });
    };
    RolesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'roles',
            template: __webpack_require__("../../../../../src/app/views/roles/roles.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/roles/roles.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_roles_service__["a" /* RolesService */]])
    ], RolesComponent);
    return RolesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/tasks/tasks-table.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  max-height: 500px;\n  min-width: 300px;\n}\n\n.mat-table {\n  overflow: auto;\n  max-height: 500px;\n}\n\n.example-form {\n  min-width: 150px;\n  width: 100%;\n  font-size: 20px;\n}\n\n.example-full-width {\n  width: 20%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/tasks/tasks-table.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"example-form\">\n  <mat-form-field style=\"width: 250px;\">\n    <mat-select required name=\"asignado\" placeholder=\"Asignado\" [(ngModel)]=\"tasksForm.asignado\">\n      <mat-option *ngFor=\"let usuario of usuarios; let i = index\" value=\"{{ usuario.nombre }}\">{{ usuario.nombre + ' ' + usuario.apellidos }}</mat-option>\n    </mat-select>\n  </mat-form-field>\n  <mat-form-field style=\"width: 250px;\">\n    <mat-select required name=\"tipo\" placeholder=\"Tipo\" [(ngModel)]=\"tasksForm.tipo\">\n      <mat-option *ngFor=\"let tipo of tasktypes; let i = index\" value=\"{{ tipo.tipo }}\">{{ tipo.tipo }}</mat-option>\n    </mat-select>\n  </mat-form-field>\n  <mat-form-field style=\"width: 100px;\" class=\"example-full-width\">\n    <input required matInput type=\"number\" name=\"puntos\" placeholder=\"Puntos\" [(ngModel)]=\"tasksForm.puntos\">\n  </mat-form-field>\n  <mat-form-field style=\"width: 450px;\" class=\"example-full-width\">\n    <input required matInput name=\"descripcion\" placeholder=\"Descripcion\" [(ngModel)]=\"tasksForm.descripcion\">\n  </mat-form-field>\n  &nbsp;\n  <button mat-raised-button [disabled]=\"acceptButtonDisabled()\" #acceptButton color=\"primary\" (click)=\"enviar()\">Enviar</button>\n  <button mat-raised-button (click)=\"reiniciar()\">Reiniciar</button>\n</form>\n\n<div class=\"example-container mat-elevation-z8\">\n  <mat-table #table [dataSource]=\"dataSource\">\n\n    <!-- id Column -->\n    <ng-container matColumnDef=\"id\">\n      <mat-header-cell style=\"min-width: 50px; max-width: 4%;\" *matHeaderCellDef> ID </mat-header-cell>\n      <mat-cell style=\"min-width: 50px; max-width: 4%;\" *matCellDef=\"let element\"> 1 </mat-cell>\n    </ng-container>\n\n    <!-- Tipo Column -->\n    <ng-container matColumnDef=\"tipo\">\n      <mat-header-cell *matHeaderCellDef> Tipo </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.tipo}} </mat-cell>\n    </ng-container>\n\n    <!-- Descripcion Column -->\n    <ng-container matColumnDef=\"descripcion\">\n      <mat-header-cell *matHeaderCellDef> Descripcion </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.descripcion}} </mat-cell>\n    </ng-container>\n\n    <!-- Puntos Column -->\n    <ng-container matColumnDef=\"puntos\">\n      <mat-header-cell *matHeaderCellDef> Puntos </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.puntos}} </mat-cell>\n    </ng-container>\n\n    <!-- Reporter Column -->\n    <ng-container matColumnDef=\"reporter\">\n      <mat-header-cell *matHeaderCellDef> Reporter </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.reporter}} </mat-cell>\n    </ng-container>\n\n    <!-- Asignado Column -->\n    <ng-container matColumnDef=\"asignado\">\n      <mat-header-cell *matHeaderCellDef> Asignado </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.asignado}} </mat-cell>\n    </ng-container>\n\n    <!-- Estado Column -->\n    <ng-container matColumnDef=\"estado\">\n      <mat-header-cell *matHeaderCellDef> Estado </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.estado}} </mat-cell>\n    </ng-container>\n\n    <!-- Action Column -->\n    <ng-container matColumnDef=\"action\">\n      <mat-header-cell *matHeaderCellDef class=\"center_row\"> Action </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\" class=\"center_row\">\n        <button mat-raised-button color=\"primary\" (click)=\"update(element)\">Modificar</button>\n        <button mat-raised-button color=\"warn\" (click)=\"remove(element)\">Borrar</button>\n      </mat-cell>\n    </ng-container>\n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n  </mat-table>\n</div>"

/***/ }),

/***/ "../../../../../src/app/views/tasks/tasks-table.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TasksTable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_tasks__ = __webpack_require__("../../../../../src/app/model/tasks.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_tasks_service__ = __webpack_require__("../../../../../src/app/services/tasks.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_tasktypes_service__ = __webpack_require__("../../../../../src/app/services/tasktypes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_usuarios_service__ = __webpack_require__("../../../../../src/app/services/usuarios.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TasksTable = (function () {
    function TasksTable(usuariosService, tasksService, tasktypesService) {
        this.usuariosService = usuariosService;
        this.tasksService = tasksService;
        this.tasktypesService = tasktypesService;
        this.displayedColumns = ['id', 'tipo', 'descripcion', 'puntos', 'reporter', 'asignado', 'estado', 'action'];
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatTableDataSource */]();
        this.tasksForm = new __WEBPACK_IMPORTED_MODULE_2__model_tasks__["a" /* Tasks */]();
        this.loadTasks();
        this.loadUsuarios();
        this.loadTaskTypes();
    }
    TasksTable.prototype.loadTasks = function () {
        var _this = this;
        this.tasksService.getTasks().subscribe(function (response) {
            _this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatTableDataSource */](response._embedded.tasks);
        });
    };
    TasksTable.prototype.loadUsuarios = function () {
        var _this = this;
        this.usuariosService.getUsuarios().subscribe(function (response) {
            _this.usuarios = response._embedded.usuarios;
        });
    };
    TasksTable.prototype.loadTaskTypes = function () {
        var _this = this;
        this.tasktypesService.getTasktypes().subscribe(function (response) {
            _this.tasktypes = response._embedded.tasktypes;
        });
    };
    TasksTable.prototype.update = function (item) {
        this.tasksForm = item;
    };
    TasksTable.prototype.remove = function (item) {
        var _this = this;
        this.tasksService.deleteTasks(item).subscribe(function (response) {
            _this.loadTasks();
        });
    };
    TasksTable.prototype.acceptButtonDisabled = function () {
        var disabled = false;
        if (this.tasksForm.tipo == undefined ||
            this.tasksForm.descripcion == undefined) {
            disabled = true;
        }
        else {
            if (this.tasksForm.tipo.length <= 3 ||
                this.tasksForm.descripcion.length <= 3) {
                disabled = true;
            }
        }
        return disabled;
    };
    TasksTable.prototype.reiniciar = function () {
        this.tasksForm = new __WEBPACK_IMPORTED_MODULE_2__model_tasks__["a" /* Tasks */]();
    };
    TasksTable.prototype.enviar = function () {
        var _this = this;
        if (this.tasksForm._links != undefined) {
            this.tasksService.putTasks(this.tasksForm).subscribe(function (response) {
                _this.loadTasks();
            });
        }
        else {
            this.tasksService.postTasks(this.tasksForm).subscribe(function (response) {
                _this.loadTasks();
            });
        }
    };
    TasksTable = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'tasks-table',
            styles: [__webpack_require__("../../../../../src/app/views/tasks/tasks-table.css")],
            template: __webpack_require__("../../../../../src/app/views/tasks/tasks-table.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__services_usuarios_service__["a" /* UsuariosService */],
            __WEBPACK_IMPORTED_MODULE_3__services_tasks_service__["a" /* TasksService */],
            __WEBPACK_IMPORTED_MODULE_4__services_tasktypes_service__["a" /* TasktypesService */]])
    ], TasksTable);
    return TasksTable;
}());



/***/ }),

/***/ "../../../../../src/app/views/tasks/tasks.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".timeleft{\n\t\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/tasks/tasks.component.html":
/***/ (function(module, exports) {

module.exports = "<tasks-table></tasks-table>\n"

/***/ }),

/***/ "../../../../../src/app/views/tasks/tasks.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TasksComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_tasks_service__ = __webpack_require__("../../../../../src/app/services/tasks.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TasksComponent = (function () {
    function TasksComponent(tasksService) {
        this.tasksService = tasksService;
        this.datasource = new __WEBPACK_IMPORTED_MODULE_2__angular_material__["B" /* MatTableDataSource */]();
    }
    TasksComponent.prototype.refreshTable = function (event) {
        var _this = this;
        this.tasksService.getTasks().subscribe(function (response) {
            _this.datasource = new __WEBPACK_IMPORTED_MODULE_2__angular_material__["B" /* MatTableDataSource */](response._embedded.tasks);
        });
    };
    TasksComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'tasks',
            template: __webpack_require__("../../../../../src/app/views/tasks/tasks.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/tasks/tasks.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_tasks_service__["a" /* TasksService */]])
    ], TasksComponent);
    return TasksComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map