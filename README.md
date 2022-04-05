# SWE Foam Take Home Challenge
SWE Foam Take Home Challenge for Culture Biosciences

npm install
npm run build
npm start

mongoimport --db=foam --collection=pictures --file=database/foam-seed.json

mongo
use foam
db.pictures.updateMany({}, {$set: {"tagged": false}} )