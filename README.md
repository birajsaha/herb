# Herb - Biraj Saha

## Instructions

1. Run npm install
2. Ensure you have postgres set up properly
3. Change the connection information in the "development" section of server\config\config.json to point to your database.
4. Run the migrations ".\node_modules\sequelize-cli\.bin\sequelize db:migrate"
5. Start it up: "npm run start:dev"

Notes

 * the server app listens on port 8000
 * the test that has been provided is a "smoke test" that requires the server app to be running
 * "biraj.zip" contains all the extracted files all zipped up (for convenience)
