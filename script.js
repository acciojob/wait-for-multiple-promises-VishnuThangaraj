//your JS code here. If required.
// Create an array of three Promises
const promises = [
  createRandomPromise(),
  createRandomPromise(),
  createRandomPromise(),
];

// Utility function to create a Promise that resolves after a random time
function createRandomPromise() {
  const randomTime = Math.floor(Math.random() * 3000) + 1000; // Random time between 1 and 3 seconds
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(randomTime);
    }, randomTime);
  });
}

// Wait for all Promises to resolve using Promise.all()
Promise.all(promises)
  .then((results) => {
    // Remove the loading text and populate the table
    const table = document.getElementById('my-table'); // Assuming you have an existing table with the ID 'my-table'
    const tbody = table.querySelector('tbody');

    // Create rows for each Promise result
    results.forEach((time, index) => {
      const row = document.createElement('tr');
      const promiseCell = document.createElement('td');
      const timeCell = document.createElement('td');

      promiseCell.textContent = `Promise ${index + 1}`;
      timeCell.textContent = `${(time / 1000).toFixed(3)} seconds`;

      row.appendChild(promiseCell);
      row.appendChild(timeCell);
      tbody.appendChild(row);
    });

    // Calculate the total time taken
    const totalTime = results.reduce((acc, time) => acc + time, 0);
    const totalRow = document.createElement('tr');
    const totalCell = document.createElement('td');
    const totalTimeCell = document.createElement('td');

    totalCell.textContent = 'Total';
    totalTimeCell.textContent = `${(totalTime / 1000).toFixed(3)} seconds`;

    totalRow.appendChild(totalCell);
    totalRow.appendChild(totalTimeCell);
    tbody.appendChild(totalRow);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
