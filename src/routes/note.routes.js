const notes = require('../controllers/note.controller');

module.exports = (app) => {
  // Create new Note
  app.post('/notes', notes.create);

  // Retrieve all Notes
  app.get('/notes', notes.findAll);

  // Retrieve a single Note by ID
  app.get('/notes/:id', notes.findOne);

  // Update a Note by ID
  app.put('/notes/:id', notes.update);

  // Delete a Note by ID
  app.delete('/notes/:id', notes.delete);
};
