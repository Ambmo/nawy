#!/bin/sh

# Start the frontend server
npm run start &
# npm run dev

# Give the frontend time to start
sleep 10

# # Open the frontend in the default web browser
# xdg-open http://localhost:3000

# Open the frontend in the default web browser (Windows)
start http://localhost:3000