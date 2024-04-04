import Queue from 'bull';
import cron from 'node-cron';

const taskQueue = new Queue('taskQueue', {
  redis: {
    host: 'localhost', // Redis server host
    port: 6379, // Redis server port
  },
});

cron.schedule('* * * * *', async () => {
  await taskQueue.add({ someData: 'data' });
});


export default taskQueue;
