"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCircuitBreaker = createCircuitBreaker;
const opossum = require("opossum");
function createCircuitBreaker(action, options = {}) {
    const breaker = new opossum(action, options);
    return breaker;
}
//# sourceMappingURL=circuit-breaker.service.js.map