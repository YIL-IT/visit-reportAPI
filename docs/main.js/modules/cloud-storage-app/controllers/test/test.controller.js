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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestController = void 0;
const common_1 = require("@nestjs/common");
const test_service_1 = require("../../services/test/test.service");
const user_dto_1 = require("../../../../models/dto/user.dto");
let TestController = class TestController {
    constructor(testservice) {
        this.testservice = testservice;
    }
    async termsAndCondition() {
        const data = await this.testservice.empDetails();
        return {
            message: 'Get Successfully',
            statusCode: common_1.HttpStatus.OK,
            data,
        };
    }
    async InsertQrCodes(details) {
        try {
            await this.testservice.insertDetails(details);
            return {
                statusCode: common_1.HttpStatus.OK,
                message: 'Data inserted successfully',
            };
        }
        catch (error) {
            return {
                statusCode: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                message: 'Failed to insert data',
            };
        }
    }
};
__decorate([
    (0, common_1.Get)('employee-data'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TestController.prototype, "termsAndCondition", null);
__decorate([
    (0, common_1.Post)('insert-qr-codes'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.Insertdetails]),
    __metadata("design:returntype", Promise)
], TestController.prototype, "InsertQrCodes", null);
TestController = __decorate([
    (0, common_1.Controller)('test'),
    __metadata("design:paramtypes", [test_service_1.TestService])
], TestController);
exports.TestController = TestController;
//# sourceMappingURL=test.controller.js.map