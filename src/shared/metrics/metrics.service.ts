import { Registry, collectDefaultMetrics } from 'prom-client';

export const register = new Registry();
collectDefaultMetrics({ register });

export function getMetrics() {
    return register.metrics();
}
