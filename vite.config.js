import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import dotenv from "dotenv";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
	  port: 5000,
  },
	define:{                                                  'proces.env.VITE_API_KEY': JSON.stringify(process.env.VITE_API_KEY),                                'proces.env.VITE_READ_ACCESS_TOKEN': JSON.stringify(process.env.VITE_READ_ACCESS_TOKEN),

        }

})
