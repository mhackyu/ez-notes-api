
# ezNotes

Simple API CRUD operation using express and mongodb. 
[Website Link](https://cryptic-sands-38004.herokuapp.com/)

## Getting Started

### Installation

Step 1: Clone the project
```
$ git clone git clone https://mhackyu@bitbucket.org/mhackyu/eznotes.git
```
```
$ cd ezNotes
```

Step 2: Run
```
$ npm install
```
Step 3: To configure mongodb, create .*env* file in root directory 
**Example below**
```
ezNotes
 |-src
 |-app.js
 |-package.json
 ..
 |-.env <---- created file
```
Then add this to *.env* file
```
DB_URL=[URL_OF_MONGODB_HERE]
```

Step 4: Run 
```
$ npm start
```

Step 5: Browse http://localhost:4000

And you're done!

## Examples
```
GET     /notes       - get all notes.
GET     /notes/:id   - get note by id.
POST    /notes       - create a new note.
PUT     /notes/:id   - update note by id.
DELETE  /notes/:id   - delete note by id.
```

## Author
* Mark Christian Paderes [@mhackyu](https://github.com/mhackyu)




