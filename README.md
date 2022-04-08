# SWE Foam Take Home Challenge for Culture Biosciences

## You can view a quick video of this project showcasing its functionality [here](https://www.loom.com/share/05d29b9f1fd34e21b792910443dbceea).

## Getting started
1. open your terminal (`control + ~`)
2. run `npm install`
3. run `npm run build`
4. open another terminal window (`shift + control + ~`) and navigate to it
5. run `npm start`
6. navigate to http://localhost:3000
<br>

## Load Your Database
After cloning/forking this repo, if you would like to set up your own mongo database in a way that will work with this code code, follow these instructions (and make sure to save any changes (`command + s`) along the way):
1. stop your server (`control + c`)
2. run `mongoimport --db=foam --collection=pictures --file=database/foam-seed.json`
3. uncomment (`command + /`) the addIds() function and invocation within the server/controllers.js file on lines 86-99
4. uncomment (`command + /`) the controllers require statement within the server/index.js file on line 5
5. restart (`npm start`) your server
6. once the addIds() function has completed ru, close your server once more (`control + c`)
7. you can re-comment out the addIds() function now (`command + /`) within the server/controllers.js file on lines 86-99
8. you can also re-comment out the controllers require statement again (`command + /`) within the server/index.js file on line 5
9. open a new terminal window (`shift + control + ~`) and navigate to it, then open your mongo shell by running `mongo`
10. run `use foam` in the shell
11. run this query in the shell: `db.pictures.updateMany({}, {$set: {"tagged": "unclassified"}} )`
12. Congratulations! Your database is loaded! You may navigate back to your server terminal and restart your server (`control + c`)
<br>

## Tech Stack
- React
- JavaScript
- Node.js
- Express
- MongoDB
- Mongoose
<br>

## User Stories
- As a user, I need to be able to view images from the reactor run.
- As a user, while viewing images I need the ability to mark them as foaming or not.
- As a user, I want my decisions to be stored for the next time I use the app.
- As a user, I need to be able to filter by foaming, non-foaming and unclassified images.
<br>

## Other goodies
- Pagination: My client only loads in 20 images at a time.
- A user can view the current page number, and can view the previos page and the next page with the click of a button.
- A user can choose to filter and view all of the images at once regardless of that image's classification.
- When hovering over an image, the user will be given a chance to click and make the image larger to get a better look.