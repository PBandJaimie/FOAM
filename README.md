# SWE Foam Take Home Challenge
SWE Foam Take Home Challenge for Culture Biosciences

npm install
npm run build
npm start

mongoimport --db=foam --collection=pictures --file=database/foam-seed.json

mongo
use foam
db.pictures.updateMany({}, {$set: {"tagged": false}} )


in controllers:

async function addIds() {
  await models.Picture.find({})
    .then(async function (allPictures) {
      for (i = 0; i < allPictures.length; i++) {
        let idString = allPictures[i]._id.toString();
        await models.Picture.findOneAndUpdate({_id: idString},{pictureId: i + 1}, {new: true})
          .then((pic) => {
            console.log(pic)
          })
      }
    })
}

addIds()