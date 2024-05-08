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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAdminDetails = exports.UpdateUserDetails = exports.PutUserDetails = exports.DomainUserDetails = exports.Insertdetails = exports.Insertempdetails = void 0;
const swagger_1 = require("@nestjs/swagger");
class Insertempdetails {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Insertempdetails.prototype, "emp_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Insertempdetails.prototype, "emp_no", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Insertempdetails.prototype, "issue_report", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], Insertempdetails.prototype, "qr_code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Insertempdetails.prototype, "date_time", void 0);
exports.Insertempdetails = Insertempdetails;
class Insertdetails {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], Insertdetails.prototype, "qr_codes", void 0);
exports.Insertdetails = Insertdetails;
class DomainUserDetails {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], DomainUserDetails.prototype, "domain", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], DomainUserDetails.prototype, "description", void 0);
exports.DomainUserDetails = DomainUserDetails;
class PutUserDetails {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], PutUserDetails.prototype, "username", void 0);
exports.PutUserDetails = PutUserDetails;
class UpdateUserDetails {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UpdateUserDetails.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UpdateUserDetails.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UpdateUserDetails.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UpdateUserDetails.prototype, "language", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UpdateUserDetails.prototype, "quota", void 0);
exports.UpdateUserDetails = UpdateUserDetails;
class UpdateAdminDetails {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Object)
], UpdateAdminDetails.prototype, "username", void 0);
exports.UpdateAdminDetails = UpdateAdminDetails;
//# sourceMappingURL=user.dto.js.map