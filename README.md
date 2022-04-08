# SWE Foam Take Home Challenge for Culture Biosciences

You can view a quick video of this project showcasing its functionality [here](https://duckduckgo.com).
***
<br>

## Getting started
1. run `npm install`
2. run `npm run build`
3. run `npm start`
3. navigate to http://localhost:3000
<br>
<br>

## Load Your Database
If you are cloning/forking this repo and would like to set up your own mongo database in a way that will work with the code, follow these instructions:
1. drag your foam-seed.json file into the database folder
2. run `mongoimport --db=foam --collection=pictures --file=database/foam-seed.json`
3. uncomment (`command + /`) the addIds() function and invocation within the server/controllers.js file on lines 88-100
4. close (`control + c`) and restart (`npm start`) your server
5. once the addIds() function has run, you can comment it out again (`control + c`)
6. open your mongo shell by running `mongo` into the terminal
7. run `use foam` into the shell
8. run this query into the shell: `db.pictures.updateMany({}, {$set: {"tagged": "unclassified"}} )`
9. Congratulations! Your database is loaded!
<br>
<br>

## Tech Stack
- React
- JavaScript
- Node.js
- Express
- MongoDB
- Mongoose
<br>
<br>

## User Stories
- As a user, I need to be able to view images from the reactor run.
- As a user, while viewing images I need the ability to mark them as foaming or not.
- As a user, I want my decisions to be stored for the next time I use the app.
- As a user, I need to be able to filter by foaming, non-foaming and unclassified images.
<br>
<br>

## Other goodies
- Pagination: My client only loads in 20 images at a time.
- A user can view the current page number, and can view the previos page and the next page with the click of a button.
- A user can choose to filter and view all of the images at once regardless of that image's classification.
- By hovering over an image, the user will be shown a slightly zoomed in version of that image.