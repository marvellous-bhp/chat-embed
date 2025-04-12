import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Serve static files from the root directory
app.use(express.static(__dirname));

// Serve the test HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'custom-test.html'));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log(`Open http://localhost:${PORT} in your browser to test the ChatEmbed`);
});
