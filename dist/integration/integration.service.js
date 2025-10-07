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
var IntegrationService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntegrationService = void 0;
const common_1 = require("@nestjs/common");
const circuit_breaker_service_1 = require("../shared/circuit-breaker/circuit-breaker.service");
let IntegrationService = IntegrationService_1 = class IntegrationService {
    constructor() {
        this.logger = new common_1.Logger(IntegrationService_1.name);
        this.breaker = (0, circuit_breaker_service_1.createCircuitBreaker)(async (dto) => {
            this.logger.log(`Processing integration message from ${dto.source}`);
            return { status: 'ok', received: dto };
        }, { timeout: 5000, errorThresholdPercentage: 50, resetTimeout: 30000 });
    }
    async handleMessage(dto) {
        try {
            return await this.breaker.fire(dto);
        }
        catch (err) {
            this.logger.error('Integration handler failed', err);
            throw err;
        }
    }
};
exports.IntegrationService = IntegrationService;
exports.IntegrationService = IntegrationService = IntegrationService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], IntegrationService);
//# sourceMappingURL=integration.service.js.map