import axios from 'axios';

const button = document.getElementById('button1');
const output = document.getElementById('result');

button.addEventListener('click', async () => {
  try {
    const response = await axios.get('/api/health');
    output.textContent = JSON.stringify(response.data, null, 2);
  } catch (error) {
    output.textContent = 'Error fetching data';
    console.error(error);
  }
});