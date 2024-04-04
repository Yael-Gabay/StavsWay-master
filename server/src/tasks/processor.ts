export async function processJob(jobData: any) {
  console.log('start processing job:', jobData);
  // Perform job processing logic here
  // Example: Simulate processing time with a delay
  await new Promise((resolve) => setTimeout(resolve, 5000)); // Simulated processing time: 5 seconds
  console.log('Job processed:', jobData);
  return { result: 'success' };
}