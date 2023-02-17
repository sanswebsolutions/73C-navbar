(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('seventythreestrings-navbar', ['exports', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["seventythreestrings-navbar"] = {}, global.ng.core));
})(this, (function (exports, i0) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () { return e[k]; }
                    });
                }
            });
        }
        n["default"] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);

    var SeventythreestringsNavbarService = /** @class */ (function () {
        function SeventythreestringsNavbarService() {
        }
        return SeventythreestringsNavbarService;
    }());
    SeventythreestringsNavbarService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SeventythreestringsNavbarService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    SeventythreestringsNavbarService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SeventythreestringsNavbarService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SeventythreestringsNavbarService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return []; } });

    var SeventythreestringsNavbarComponent = /** @class */ (function () {
        function SeventythreestringsNavbarComponent() {
        }
        SeventythreestringsNavbarComponent.prototype.ngOnInit = function () {
        };
        return SeventythreestringsNavbarComponent;
    }());
    SeventythreestringsNavbarComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SeventythreestringsNavbarComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    SeventythreestringsNavbarComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: SeventythreestringsNavbarComponent, selector: "lib-seventythreestrings-navbar", ngImport: i0__namespace, template: "\n    <p>\n      seventythreestrings-navbar works!\n    </p>\n  ", isInline: true });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SeventythreestringsNavbarComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-seventythreestrings-navbar',
                        template: "\n    <p>\n      seventythreestrings-navbar works!\n    </p>\n  ",
                        styles: []
                    }]
            }], ctorParameters: function () { return []; } });

    var ProfilebuttonComponent = /** @class */ (function () {
        function ProfilebuttonComponent() {
        }
        ProfilebuttonComponent.prototype.ngOnInit = function () {
        };
        return ProfilebuttonComponent;
    }());
    ProfilebuttonComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ProfilebuttonComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    ProfilebuttonComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: ProfilebuttonComponent, selector: "lib-profilebutton", ngImport: i0__namespace, template: "<p>profilebutton works!</p>\n", styles: [""] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ProfilebuttonComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-profilebutton',
                        templateUrl: './profilebutton.component.html',
                        styleUrls: ['./profilebutton.component.css']
                    }]
            }], ctorParameters: function () { return []; } });

    var SeventythreestringsNavbarModule = /** @class */ (function () {
        function SeventythreestringsNavbarModule() {
        }
        return SeventythreestringsNavbarModule;
    }());
    SeventythreestringsNavbarModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SeventythreestringsNavbarModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    SeventythreestringsNavbarModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SeventythreestringsNavbarModule, declarations: [SeventythreestringsNavbarComponent,
            ProfilebuttonComponent], exports: [SeventythreestringsNavbarComponent,
            ProfilebuttonComponent] });
    SeventythreestringsNavbarModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SeventythreestringsNavbarModule, imports: [[]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SeventythreestringsNavbarModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            SeventythreestringsNavbarComponent,
                            ProfilebuttonComponent
                        ],
                        imports: [],
                        exports: [
                            SeventythreestringsNavbarComponent,
                            ProfilebuttonComponent
                        ]
                    }]
            }] });

    /*
     * Public API Surface of seventythreestrings-navbar
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.ProfilebuttonComponent = ProfilebuttonComponent;
    exports.SeventythreestringsNavbarComponent = SeventythreestringsNavbarComponent;
    exports.SeventythreestringsNavbarModule = SeventythreestringsNavbarModule;
    exports.SeventythreestringsNavbarService = SeventythreestringsNavbarService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=seventythreestrings-navbar.umd.js.map
