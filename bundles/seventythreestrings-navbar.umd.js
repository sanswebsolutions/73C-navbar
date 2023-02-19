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
            var _a, _b, _c;
            this.user = JSON.parse(localStorage.getItem('73S-User') || "");
            this.shortName = (_c = (_b = (_a = this.user) === null || _a === void 0 ? void 0 : _a.userName) === null || _b === void 0 ? void 0 : _b.match(/\b(\w)/g)) === null || _c === void 0 ? void 0 : _c.join('');
            console.log("user", this.shortName);
        }
        ProfilebuttonComponent.prototype.ngOnInit = function () {
        };
        ProfilebuttonComponent.prototype.ProfileMenu = function () {
            var subMenu = document.getElementById("subMenu");
            subMenu.classList.toggle("open-menu");
        };
        ProfilebuttonComponent.prototype.OrgMenu = function () {
            var orgMenu = document.getElementById("orgMenu");
            orgMenu.classList.toggle("open-menu");
        };
        ProfilebuttonComponent.prototype.LangMenu = function () {
            var langMenu = document.getElementById("langMenu");
            langMenu.classList.toggle("open-menu");
        };
        return ProfilebuttonComponent;
    }());
    ProfilebuttonComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ProfilebuttonComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    ProfilebuttonComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: ProfilebuttonComponent, selector: "lib-profilebutton", ngImport: i0__namespace, template: "<div class=\"header_content\">\n    <span class=\"user__profilepic\" (click)=\"ProfileMenu()\">{{ shortName }}</span>\n</div>\n<div class=\"sub-menu-wrap\" id=\"subMenu\">\n    <div class=\"sub-menu\">\n        <div class=\"user__details\">\n            <span><img src=\"\" alt=\"\">VN</span>\n            <span>Vijay Saiwal</span>\n            <span>vijay.saiwal@73strings.com</span>\n        </div>\n        <div class=\"user__info\">\n            <a href=\"#\" iv class=\"user_widget info_hover\">\n                <span><img src=\"password_reset.svg\" alt=\"\"></span>\n                <span>Password Reset</span>\n            </a>\n            <a href=\"#\" class=\"user_info_container info_hover\" onclick=\"LangMenu()\">\n                <div class=\"user_widget\">\n                    <span>\n                        <img src=\"language.svg\" alt=\"\">\n                    </span>\n                    <span>Language - English</span>\n                </div>\n                <div><img src=\"down_arrow.svg\" alt=\"\"></div>\n                <div id=\"langMenu\" class=\"lang-menu\">\n                    <ul>\n                        <li>English <img src=\"selected.svg\" alt=\"\"></li>\n                        <li>French <img src=\"selected.svg\" alt=\"\"></li>\n                        <li>Hindi <img src=\"selected.svg\" alt=\"\"></li>\n\n                    </ul>\n                </div>\n            </a>\n            <a href=\"#\" class=\"user_info_container info_hover\" onclick=\"OrgMenu()\">\n                <div class=\"user_widget\">\n                    <span><img src=\"language.svg\" alt=\"\"></span>\n                    <span>Default Organisation - Organisation 01</span>\n                </div>\n                <div>\n                    <img src=\"down_arrow.svg\" alt=\"\">\n                </div>\n                <div id=\"orgMenu\" class=\"org-menu\">\n                    <ul>\n                        <li>Organisation 01<img src=\"selected.svg\" alt=\"\"></li>\n                        <li>Organisation 02<img src=\"selected.svg\" alt=\"\"></li>\n                        <li>Organisation 03<img src=\"selected.svg\" alt=\"\"></li>\n                    </ul>\n                </div>\n            </a>\n        </div>\n        <div class=\"user__logout\">\n            <span><img src=\"sign_out.svg\" alt=\"\"></span>\n            <span>Sign out</span>\n        </div>\n    </div>\n</div>", styles: ["*{margin:0;padding:0;box-sizing:border-box;font-family:\"Roboto\"}.body{width:100%;height:100vh;display:flex;align-items:center;justify-content:center;background-color:#fff}header{height:64px;background-color:#1d1563}.header_content{height:inherit;padding:1rem 2rem;display:flex;align-items:center;justify-content:space-between}.header_content span:nth-child(1){color:#ffd32b;font-size:1.3rem}.user__profilepic{display:flex;align-items:center;justify-content:center;width:28px;height:28px;color:#1d1563;background-color:#fff;border:1px solid #FFFFFF;border-radius:100vmax;font-family:\"Roboto\";font-style:normal;font-weight:400;font-size:13px;line-height:24px;cursor:pointer}.sub-menu-wrap{position:absolute;height:0;width:260px;background-color:#fff;top:60px;right:14px;box-shadow:0 0 2px #0003,0 2px 10px #0000001a;border-radius:12px;display:none;transition:all .3s}.sub-menu-wrap.open-menu{display:block;height:302px;transition:all .3s}.sub-menu-wrap.open-menu:before{content:\"\";border-right:solid transparent 10px;border-left:solid transparent 10px;border-bottom:solid #ffffff 10px;top:-8px;right:24px;position:absolute;transform:translate(5%)}.sub-menu{display:flex;flex-direction:column;height:302px;justify-content:space-between}.user__details{width:100%;display:flex;flex-direction:column;align-items:center;padding:1rem;border-bottom:1px solid #E6E6E6}.user__details span:nth-child(1){width:54px;height:54px;display:flex;align-items:center;justify-content:center;background:#FFFFFF;border:1px solid #443E3E;color:#443e3e;border-radius:100vmax}.user__details span:nth-child(2){font-family:\"Roboto\";font-style:normal;font-weight:500;font-size:14px;line-height:20px;color:#1d1b1b;padding-top:.4rem}.user__details span:nth-child(3){font-family:\"Roboto\";font-style:normal;font-weight:400;font-size:12px;line-height:16px;color:#9d9d9d;padding-top:.4rem}.user_info_container{display:flex;justify-content:center;align-items:center;text-decoration:none;color:#443e3e;padding-right:.3rem;border-radius:4px}.user__info{padding:.6rem 1rem}.user__logout{width:100%!important;border-top:1px solid #E6E6E6;padding:.5rem 1.3rem!important;margin:.4rem 0}.user_widget,.user__logout{color:#443e3e;text-decoration:none;cursor:pointer;display:flex;align-items:center;font-size:12px;height:32px;width:228px;border-radius:4px;white-space:nowrap;padding:0 .3rem}.user_widget span:nth-child(1),.user__logout span:nth-child(1){width:16px;height:16px;display:flex;align-items:center;justify-content:center}.user_widget span:nth-child(2),.user__logout span:nth-child(2){padding-left:.4rem;width:170px;overflow:hidden;text-overflow:ellipsis}.info_hover:hover{border:1px solid #eee}.lang-menu,.org-menu{position:absolute;background-color:#fff;padding:.3rem;display:none;width:206px;height:88px;box-shadow:0 2px 1px #0000000d,0 0 1px #00000040;border-radius:8px;font-weight:400;font-size:12px}.lang-menu.open-menu,.org-menu.open-menu{display:block}.lang-menu ul,.org-menu ul{list-style:none;font-weight:400;font-size:12px;line-height:16px;color:#443e3e}.lang-menu ul li,.org-menu ul li{padding:4px 6px}.lang-menu ul li img,.org-menu ul li img{display:none}.lang-menu ul li:hover img,.org-menu ul li:hover img{display:block}.lang-menu ul li:hover,.org-menu ul li:hover{background-color:#eceafb;display:flex;justify-content:space-between;border-radius:4px}\n"] });
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
