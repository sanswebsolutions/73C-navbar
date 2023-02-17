import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';

class SeventythreestringsNavbarService {
    constructor() { }
}
SeventythreestringsNavbarService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SeventythreestringsNavbarService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
SeventythreestringsNavbarService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SeventythreestringsNavbarService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SeventythreestringsNavbarService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class SeventythreestringsNavbarComponent {
    constructor() { }
    ngOnInit() {
    }
}
SeventythreestringsNavbarComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SeventythreestringsNavbarComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SeventythreestringsNavbarComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: SeventythreestringsNavbarComponent, selector: "lib-seventythreestrings-navbar", ngImport: i0, template: `
    <p>
      seventythreestrings-navbar works!
    </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SeventythreestringsNavbarComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-seventythreestrings-navbar',
                    template: `
    <p>
      seventythreestrings-navbar works!
    </p>
  `,
                    styles: []
                }]
        }], ctorParameters: function () { return []; } });

class ProfilebuttonComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProfilebuttonComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ProfilebuttonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ProfilebuttonComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: ProfilebuttonComponent, selector: "lib-profilebutton", ngImport: i0, template: "<p>profilebutton works!</p>\n", styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ProfilebuttonComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-profilebutton',
                    templateUrl: './profilebutton.component.html',
                    styleUrls: ['./profilebutton.component.css']
                }]
        }], ctorParameters: function () { return []; } });

class SeventythreestringsNavbarModule {
}
SeventythreestringsNavbarModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SeventythreestringsNavbarModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SeventythreestringsNavbarModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SeventythreestringsNavbarModule, declarations: [SeventythreestringsNavbarComponent,
        ProfilebuttonComponent], exports: [SeventythreestringsNavbarComponent,
        ProfilebuttonComponent] });
SeventythreestringsNavbarModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SeventythreestringsNavbarModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SeventythreestringsNavbarModule, decorators: [{
            type: NgModule,
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

export { ProfilebuttonComponent, SeventythreestringsNavbarComponent, SeventythreestringsNavbarModule, SeventythreestringsNavbarService };
//# sourceMappingURL=seventythreestrings-navbar.js.map
