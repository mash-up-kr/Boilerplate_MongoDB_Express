import dotenv from 'dotenv';
import path from 'path';

const __dirname = path.resolve();

dotenv.config({ 
  path: path.join(__dirname, 'config/.env')
});