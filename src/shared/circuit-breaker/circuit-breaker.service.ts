import * as opossum from 'opossum';

export function createCircuitBreaker(action: (...args: any[]) => Promise<any>, options = {}) {
    // wrapper para opossum
    const breaker = new opossum(action, options as any);
    return breaker;
}
