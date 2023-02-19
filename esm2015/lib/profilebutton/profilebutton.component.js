import { Component } from '@angular/core';
import * as i0 from "@angular/core";
export class ProfilebuttonComponent {
    constructor() {
        var _a, _b, _c;
        this.user = JSON.parse(localStorage.getItem('73S-User') || "");
        this.shortName = (_c = (_b = (_a = this.user) === null || _a === void 0 ? void 0 : _a.userName) === null || _b === void 0 ? void 0 : _b.match(/\b(\w)/g)) === null || _c === void 0 ? void 0 : _c.join('');
        console.log("user", this.shortName);
    }
    ngOnInit() {
    }
    ProfileMenu() {
        let subMenu = document.getElementById("subMenu");
        subMenu.classList.toggle("open-menu");
    }
    OrgMenu() {
        let orgMenu = document.getElementById("orgMenu");
        orgMenu.classList.toggle("open-menu");
    }
    LangMenu() {
        let langMenu = document.getElementById("langMenu");
        langMenu.classList.toggle("open-menu");
    }
    Logout() {
        localStorage.removeItem('73S-User');
        localStorage.removeItem('73S-Auth');
        window.open('https://aiplatform-uat.73strings.com/#/auth');
    }
}
ProfilebuttonComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ProfilebuttonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ProfilebuttonComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: ProfilebuttonComponent, selector: "lib-profilebutton", ngImport: i0, template: "<div class=\"header_content\">\n    <span class=\"user__profilepic\" (click)=\"ProfileMenu()\">{{ shortName }}</span>\n</div>\n<div class=\"sub-menu-wrap\" id=\"subMenu\">\n    <div class=\"sub-menu\">\n        <div class=\"user__details\">\n            <span><img src=\"\" alt=\"\">{{ shortName }}</span>\n            <span>{{user?.userName}}</span>\n            <span>{{user?.userId}}</span>\n        </div>\n        <div class=\"user__logout\" (click)=\"Logout()\">\n            <span><img src=\"sign_out.svg\" alt=\"\"></span>\n            <span>Sign out</span>\n        </div>\n        <div class=\"user__info\">\n            <a href=\"#\" iv class=\"user_widget info_hover\">\n                <span><img src=\"password_reset.svg\" alt=\"\"></span>\n                <span>Password Reset</span>\n            </a>\n            <a href=\"#\" class=\"user_info_container info_hover\" onclick=\"LangMenu()\">\n                <div class=\"user_widget\">\n                    <span>\n                        <img src=\"language.svg\" alt=\"\">\n                    </span>\n                    <span>Language - English</span>\n                </div>\n                <div><img src=\"down_arrow.svg\" alt=\"\"></div>\n                <div id=\"langMenu\" class=\"lang-menu\">\n                    <ul>\n                        <li>English <img src=\"selected.svg\" alt=\"\"></li>\n                        <li>French <img src=\"selected.svg\" alt=\"\"></li>\n                        <li>Hindi <img src=\"selected.svg\" alt=\"\"></li>\n\n                    </ul>\n                </div>\n            </a>\n            <a href=\"#\" class=\"user_info_container info_hover\" onclick=\"OrgMenu()\">\n                <div class=\"user_widget\">\n                    <span><img src=\"language.svg\" alt=\"\"></span>\n                    <span>Default Organisation - Organisation 01</span>\n                </div>\n                <div>\n                    <img src=\"down_arrow.svg\" alt=\"\">\n                </div>\n                <div id=\"orgMenu\" class=\"org-menu\">\n                    <ul>\n                        <li>Organisation 01<img src=\"selected.svg\" alt=\"\"></li>\n                        <li>Organisation 02<img src=\"selected.svg\" alt=\"\"></li>\n                        <li>Organisation 03<img src=\"selected.svg\" alt=\"\"></li>\n                    </ul>\n                </div>\n            </a>\n        </div>\n\n    </div>\n</div>", styles: ["*{margin:0;padding:0;box-sizing:border-box;font-family:\"Roboto\"}.body{width:100%;height:100vh;display:flex;align-items:center;justify-content:center;background-color:#fff}header{height:64px;background-color:#1d1563}.header_content{height:inherit;padding:1rem 2rem;display:flex;align-items:center;justify-content:space-between}.header_content span:nth-child(1){color:#ffd32b;font-size:1.3rem}.user__profilepic{display:flex;align-items:center;justify-content:center;width:28px;height:28px;color:#1d1563;background-color:#fff;border:1px solid #FFFFFF;border-radius:100vmax;font-family:\"Roboto\";font-style:normal;font-weight:400;font-size:13px;line-height:24px;cursor:pointer}.sub-menu-wrap{position:absolute;height:0;width:260px;background-color:#fff;top:60px;right:14px;box-shadow:0 0 2px #0003,0 2px 10px #0000001a;border-radius:12px;display:none;transition:all .3s}.sub-menu-wrap.open-menu{display:block;height:302px;transition:all .3s}.sub-menu-wrap.open-menu:before{content:\"\";border-right:solid transparent 10px;border-left:solid transparent 10px;border-bottom:solid #ffffff 10px;top:-8px;right:24px;position:absolute;transform:translate(5%)}.sub-menu{display:flex;flex-direction:column;height:302px;justify-content:space-between}.user__details{width:100%;display:flex;flex-direction:column;align-items:center;padding:1rem;border-bottom:1px solid #E6E6E6}.user__details span:nth-child(1){width:54px;height:54px;display:flex;align-items:center;justify-content:center;background:#FFFFFF;border:1px solid #443E3E;color:#443e3e;border-radius:100vmax}.user__details span:nth-child(2){font-family:\"Roboto\";font-style:normal;font-weight:500;font-size:14px;line-height:20px;color:#1d1b1b;padding-top:.4rem}.user__details span:nth-child(3){font-family:\"Roboto\";font-style:normal;font-weight:400;font-size:12px;line-height:16px;color:#9d9d9d;padding-top:.4rem}.user_info_container{display:flex;justify-content:center;align-items:center;text-decoration:none;color:#443e3e;padding-right:.3rem;border-radius:4px}.user__info{padding:.6rem 1rem}.user__logout{width:100%!important;border-top:1px solid #E6E6E6;padding:.5rem 1.3rem!important;margin:.4rem 0}.user_widget,.user__logout{color:#443e3e;text-decoration:none;cursor:pointer;display:flex;align-items:center;font-size:12px;height:32px;width:228px;border-radius:4px;white-space:nowrap;padding:0 .3rem}.user_widget span:nth-child(1),.user__logout span:nth-child(1){width:16px;height:16px;display:flex;align-items:center;justify-content:center}.user_widget span:nth-child(2),.user__logout span:nth-child(2){padding-left:.4rem;width:170px;overflow:hidden;text-overflow:ellipsis}.info_hover:hover{border:1px solid #eee}.lang-menu,.org-menu{position:absolute;background-color:#fff;padding:.3rem;display:none;width:206px;height:88px;box-shadow:0 2px 1px #0000000d,0 0 1px #00000040;border-radius:8px;font-weight:400;font-size:12px}.lang-menu.open-menu,.org-menu.open-menu{display:block}.lang-menu ul,.org-menu ul{list-style:none;font-weight:400;font-size:12px;line-height:16px;color:#443e3e}.lang-menu ul li,.org-menu ul li{padding:4px 6px}.lang-menu ul li img,.org-menu ul li img{display:none}.lang-menu ul li:hover img,.org-menu ul li:hover img{display:block}.lang-menu ul li:hover,.org-menu ul li:hover{background-color:#eceafb;display:flex;justify-content:space-between;border-radius:4px}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ProfilebuttonComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-profilebutton',
                    templateUrl: './profilebutton.component.html',
                    styleUrls: ['./profilebutton.component.css']
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZWJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zZXZlbnR5dGhyZWVzdHJpbmdzLW5hdmJhci9zcmMvbGliL3Byb2ZpbGVidXR0b24vcHJvZmlsZWJ1dHRvbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zZXZlbnR5dGhyZWVzdHJpbmdzLW5hdmJhci9zcmMvbGliL3Byb2ZpbGVidXR0b24vcHJvZmlsZWJ1dHRvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDOztBQU9sRCxNQUFNLE9BQU8sc0JBQXNCO0lBR2pDOztRQUZBLFNBQUksR0FBUSxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFDL0QsY0FBUyxHQUFRLE1BQUEsTUFBQSxNQUFBLElBQUksQ0FBQyxJQUFJLDBDQUFFLFFBQVEsMENBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQywwQ0FBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFL0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxRQUFRO0lBQ1IsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLE9BQU8sR0FBUSxRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3RELE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFDRCxPQUFPO1FBQ0wsSUFBSSxPQUFPLEdBQVEsUUFBUSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN0RCxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBQ0QsUUFBUTtRQUNOLElBQUksUUFBUSxHQUFRLFFBQVEsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDeEQsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELE1BQU07UUFDSixZQUFZLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQ25DLFlBQVksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUE7UUFDbkMsTUFBTSxDQUFDLElBQUksQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFDO0lBQzdELENBQUM7O29IQTNCVSxzQkFBc0I7d0dBQXRCLHNCQUFzQix5RENQbkMseTVFQXVETTs0RkRoRE8sc0JBQXNCO2tCQUxsQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLFdBQVcsRUFBRSxnQ0FBZ0M7b0JBQzdDLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO2lCQUM3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1wcm9maWxlYnV0dG9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2ZpbGVidXR0b24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wcm9maWxlYnV0dG9uLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBQcm9maWxlYnV0dG9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgdXNlcjogYW55ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnNzNTLVVzZXInKSB8fCBcIlwiKTtcbiAgc2hvcnROYW1lOiBhbnkgPSB0aGlzLnVzZXI/LnVzZXJOYW1lPy5tYXRjaCgvXFxiKFxcdykvZyk/LmpvaW4oJycpO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zb2xlLmxvZyhcInVzZXJcIiwgdGhpcy5zaG9ydE5hbWUpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxuICBQcm9maWxlTWVudSgpIHtcbiAgICBsZXQgc3ViTWVudTogYW55ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWJNZW51XCIpO1xuICAgIHN1Yk1lbnUuY2xhc3NMaXN0LnRvZ2dsZShcIm9wZW4tbWVudVwiKTtcbiAgfVxuICBPcmdNZW51KCkge1xuICAgIGxldCBvcmdNZW51OiBhbnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9yZ01lbnVcIik7XG4gICAgb3JnTWVudS5jbGFzc0xpc3QudG9nZ2xlKFwib3Blbi1tZW51XCIpO1xuICB9XG4gIExhbmdNZW51KCkge1xuICAgIGxldCBsYW5nTWVudTogYW55ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsYW5nTWVudVwiKTtcbiAgICBsYW5nTWVudS5jbGFzc0xpc3QudG9nZ2xlKFwib3Blbi1tZW51XCIpO1xuICB9XG5cbiAgTG9nb3V0KCkge1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCc3M1MtVXNlcicpXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJzczUy1BdXRoJylcbiAgICB3aW5kb3cub3BlbignaHR0cHM6Ly9haXBsYXRmb3JtLXVhdC43M3N0cmluZ3MuY29tLyMvYXV0aCcpO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiaGVhZGVyX2NvbnRlbnRcIj5cbiAgICA8c3BhbiBjbGFzcz1cInVzZXJfX3Byb2ZpbGVwaWNcIiAoY2xpY2spPVwiUHJvZmlsZU1lbnUoKVwiPnt7IHNob3J0TmFtZSB9fTwvc3Bhbj5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cInN1Yi1tZW51LXdyYXBcIiBpZD1cInN1Yk1lbnVcIj5cbiAgICA8ZGl2IGNsYXNzPVwic3ViLW1lbnVcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInVzZXJfX2RldGFpbHNcIj5cbiAgICAgICAgICAgIDxzcGFuPjxpbWcgc3JjPVwiXCIgYWx0PVwiXCI+e3sgc2hvcnROYW1lIH19PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4+e3t1c2VyPy51c2VyTmFtZX19PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4+e3t1c2VyPy51c2VySWR9fTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ1c2VyX19sb2dvdXRcIiAoY2xpY2spPVwiTG9nb3V0KClcIj5cbiAgICAgICAgICAgIDxzcGFuPjxpbWcgc3JjPVwic2lnbl9vdXQuc3ZnXCIgYWx0PVwiXCI+PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4+U2lnbiBvdXQ8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwidXNlcl9faW5mb1wiPlxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBpdiBjbGFzcz1cInVzZXJfd2lkZ2V0IGluZm9faG92ZXJcIj5cbiAgICAgICAgICAgICAgICA8c3Bhbj48aW1nIHNyYz1cInBhc3N3b3JkX3Jlc2V0LnN2Z1wiIGFsdD1cIlwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3Bhbj5QYXNzd29yZCBSZXNldDwvc3Bhbj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJ1c2VyX2luZm9fY29udGFpbmVyIGluZm9faG92ZXJcIiBvbmNsaWNrPVwiTGFuZ01lbnUoKVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1c2VyX3dpZGdldFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwibGFuZ3VhZ2Uuc3ZnXCIgYWx0PVwiXCI+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+TGFuZ3VhZ2UgLSBFbmdsaXNoPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+PGltZyBzcmM9XCJkb3duX2Fycm93LnN2Z1wiIGFsdD1cIlwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJsYW5nTWVudVwiIGNsYXNzPVwibGFuZy1tZW51XCI+XG4gICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5FbmdsaXNoIDxpbWcgc3JjPVwic2VsZWN0ZWQuc3ZnXCIgYWx0PVwiXCI+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5GcmVuY2ggPGltZyBzcmM9XCJzZWxlY3RlZC5zdmdcIiBhbHQ9XCJcIj48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkhpbmRpIDxpbWcgc3JjPVwic2VsZWN0ZWQuc3ZnXCIgYWx0PVwiXCI+PC9saT5cblxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cInVzZXJfaW5mb19jb250YWluZXIgaW5mb19ob3ZlclwiIG9uY2xpY2s9XCJPcmdNZW51KClcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidXNlcl93aWRnZXRcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+PGltZyBzcmM9XCJsYW5ndWFnZS5zdmdcIiBhbHQ9XCJcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPkRlZmF1bHQgT3JnYW5pc2F0aW9uIC0gT3JnYW5pc2F0aW9uIDAxPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiZG93bl9hcnJvdy5zdmdcIiBhbHQ9XCJcIj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwib3JnTWVudVwiIGNsYXNzPVwib3JnLW1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPk9yZ2FuaXNhdGlvbiAwMTxpbWcgc3JjPVwic2VsZWN0ZWQuc3ZnXCIgYWx0PVwiXCI+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5PcmdhbmlzYXRpb24gMDI8aW1nIHNyYz1cInNlbGVjdGVkLnN2Z1wiIGFsdD1cIlwiPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+T3JnYW5pc2F0aW9uIDAzPGltZyBzcmM9XCJzZWxlY3RlZC5zdmdcIiBhbHQ9XCJcIj48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuPC9kaXY+Il19