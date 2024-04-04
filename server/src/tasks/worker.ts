// workerFile.ts

import taskQueue from './scheduler'; // Import the queue from the scheduler
import { processJob } from './processor'; // Import the processing function

// Process jobs using the imported function from processorFile.ts
taskQueue.process(async (job: { data: any; }) => {
  return processJob(job.data); // Call the processing function with job data
});

// Start processing jobs from the queue
taskQueue
  .isReady()
  .then(() => {
    console.log('Worker is ready and processing jobs...');
  })
  .catch((err: any) => {
    console.error('Worker error:', err);
  });
