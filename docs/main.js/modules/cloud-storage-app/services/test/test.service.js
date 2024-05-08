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
exports.TestService = void 0;
const common_1 = require("@nestjs/common");
const app_module_1 = require("../../../../app.module");
const auth_service_1 = require("../../../../auth/services/auth.service");
let TestService = class TestService {
    constructor(passEncrypt) {
        this.passEncrypt = passEncrypt;
    }
    async empDetails() {
        try {
            const terms = await app_module_1.dbConnection.query(`
      SELECT * FROM yuken.employee_data;

     `);
            return terms;
        }
        catch (error) {
            throw error;
        }
    }
    async insertDetails(details) {
        try {
            const qrCodesArray = details.qr_codes;
            if (!qrCodesArray || qrCodesArray.length === 0) {
                throw new Error('No QR codes found in details.');
            }
            const allFields = qrCodesArray.map((qrData) => Object.keys(qrData));
            const commonFields = allFields;
            const fieldList = commonFields.join(', ');
            let placeholders = '';
            const values = [];
            const placeholdersForRow = qrCodesArray.map(() => '?').join(', ');
            placeholders += `(${placeholdersForRow})`;
            qrCodesArray.forEach((qrData, index) => {
                const qrDataValues = Object.values(qrData);
                values.push(...qrDataValues);
                if (index < qrCodesArray.length - 1) {
                    placeholders;
                }
            });
            const sqlQuery = `INSERT INTO yuken.yil_scan (${fieldList}) VALUES ${placeholders};`;
            console.log(sqlQuery);
            await app_module_1.dbConnection.query(sqlQuery, values);
        }
        catch (error) {
            console.error('Error occurred while inserting details:', error);
            throw error;
        }
    }
};
TestService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], TestService);
exports.TestService = TestService;
//# sourceMappingURL=test.service.js.map