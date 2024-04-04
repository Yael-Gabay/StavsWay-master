"use strict";
// workerFile.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const scheduler_1 = __importDefault(require("./scheduler")); // Import the queue from the scheduler
const processor_1 = require("./processor"); // Import the processing function
// Process jobs using the imported function from processorFile.ts
scheduler_1.default.process((job) => __awaiter(void 0, void 0, void 0, function* () {
    return (0, processor_1.processJob)(job.data); // Call the processing function with job data
}));
// Start processing jobs from the queue
scheduler_1.default
    .isReady()
    .then(() => {
    console.log('Worker is ready and processing jobs...');
})
    .catch((err) => {
    console.error('Worker error:', err);
});
