import { Queue, Worker } from 'bullmq';

export function createQueue(name: string, connection: any) {
    return new Queue(name, { connection });
}

export function createWorker(name: string, processor: any, connection: any) {
    return new Worker(name, processor, { connection });
}
