"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var user_service_1 = require("../services/user.service");
var router_1 = require("@angular/router");
var ProfileComponent = (function () {
    function ProfileComponent(router, UserService) {
        this.router = router;
        this.UserService = UserService;
        this.userDetails = {};
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.getUsersProfile();
    };
    ProfileComponent.prototype.getUsersProfile = function () {
        var _this = this;
        this.UserService.getUsersProfile().subscribe(function (userDetails) { return _this.userDetails = userDetails; }, function (error) { return _this.errorMessage = error; });
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    core_1.Component({
        selector: 'profile',
        templateUrl: '/../views/app/component/templates/profile.component.html',
        providers: [user_service_1.UserService],
    }),
    __metadata("design:paramtypes", [router_1.Router, user_service_1.UserService])
], ProfileComponent);
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=profile.component.js.map