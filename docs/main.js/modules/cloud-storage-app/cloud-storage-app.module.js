"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudStorageAppModule = void 0;
const common_1 = require("@nestjs/common");
const auth_module_1 = require("../../auth/auth.module");
const query_procedures_module_1 = require("./query-procedures/query-procedures.module");
const test_controller_1 = require("./controllers/test/test.controller");
const test_service_1 = require("./services/test/test.service");
let CloudStorageAppModule = class CloudStorageAppModule {
};
CloudStorageAppModule = __decorate([
    (0, common_1.Module)({
        imports: [query_procedures_module_1.QueryProceduresModule, auth_module_1.AuthModule],
        controllers: [test_controller_1.TestController],
        providers: [test_service_1.TestService],
    })
], CloudStorageAppModule);
exports.CloudStorageAppModule = CloudStorageAppModule;
//# sourceMappingURL=cloud-storage-app.module.js.map