const express = require('express');
const app = express();
const port = 3000; // Change as needed

// Serve static files (CSS, JS, images)
app.use(express.static('public'));

// Sample data (simulating database data)
const lectures = [
  { id: 1, module: '13 intakes', date: '20th Jun 2024', startTime: '5:00pm', endTime: '6:00pm', status: 'alarm', nextSchedule: '25th Jul 2024' },
  { id: 2, module: '14 intakes', date: '20th Jun 2024', startTime: '5:00pm', endTime: '6:00pm', status: 'alarm', nextSchedule: '25th Jul 2024' },
  { id: 3, module: '14 intakes', date: '20th Jun 2024', startTime: '5:00pm', endTime: '6:00pm', status: 'alarm', nextSchedule: '25th Jul 2024' },
  { id: 4, module: '14 intakes', date: '20th Jun 2024', startTime: '5:00pm', endTime: '6:00pm', status: 'alarm', nextSchedule: '25th Jul 2024' },
];

// Route to serve HTML page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Start server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
