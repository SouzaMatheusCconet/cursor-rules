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
exports.MonitoringController = void 0;
const common_1 = require("@nestjs/common");
const terminus_1 = require("@nestjs/terminus");
const metrics_service_1 = require("../shared/metrics/metrics.service");
let MonitoringController = class MonitoringController {
    constructor(health) {
        this.health = health;
    }
    readiness() {
        return this.health.check([]);
    }
    async metrics() {
        return await (0, metrics_service_1.getMetrics)();
    }
};
exports.MonitoringController = MonitoringController;
__decorate([
    (0, common_1.Get)('health'),
    (0, terminus_1.HealthCheck)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MonitoringController.prototype, "readiness", null);
__decorate([
    (0, common_1.Get)('metrics'),
    (0, common_1.Header)('Content-Type', 'text/plain; version=0.0.4; charset=utf-8'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MonitoringController.prototype, "metrics", null);
exports.MonitoringController = MonitoringController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [terminus_1.HealthCheckService])
], MonitoringController);
//# sourceMappingURL=monitoring.controller.js.map