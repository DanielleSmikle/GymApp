# GYM JOURNAL APP
This app is targeted users who are gym lovers but their schedule does not allow them the flexiblitly. The app essentially lets users choose a day and  prefixed targeted workout routine for their convience. 
[Link] ()
## WIREFRAME
---
When the game opens, you will see this homepage:
![Homepage of Loteria Memory Game](lib/screenshots/home.png)
Once you click on "Jugar," then the cards will appear!
![Initial Start Page of Loteria Memory Game](lib/screenshots/startpage.png)
## TECHNOLOGIES USED
---
Node.js, Mongoose, Express, and EJS, CRUD

## APP PREMISE
---------------
- Users are greeted with the opening page of the game. They need to click on "Jugar" (Spanish for "play") to start the game.
- Users click on the image they would like to flip. For each pair they find, users are alerted that they earned 20 points. The cards then disappear, leaving behind an empty space to mark where the cards used to be.
- Users lose 5 points if they do not make a match. They are alerted when they do not make a match, and the cards immediately flip back to their place.
- Once users find all possible matches, their success is celebrated with a message that pops up that congratulates them. They are then invited to play again. If users click on "play again," the game restarts to the beginning and the cards are shuffled.
### What's Next/ Stretch Goals?
- Adding video tutorial pages that explain to the user how to do their workout of choice
- Improve CSS/ overall flow of the app
- A Third Party API, for users to have access to other workout routines that may not be listed on the app
- Turning the app into a Work out tracker, where users have the option of jotting down their results, sucess and obstacles during their work out time
- Users having the opprotunity to create an in app profile 
### Known Bugs?
- Currently users are not able to customize their workout rotuines. 
- Current