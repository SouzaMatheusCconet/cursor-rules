"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createQueue = createQueue;
exports.createWorker = createWorker;
const bullmq_1 = require("bullmq");
function createQueue(name, connection) {
    return new bullmq_1.Queue(name, { connection });
}
function createWorker(name, processor, connection) {
    return new bullmq_1.Worker(name, processor, { connection });
}
//# sourceMappingURL=worker.service.js.map