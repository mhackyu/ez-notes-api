const Note = require('../models/note.model');

// Create and Save a new Note
exports.create = (req, res) => {
  // Validate request
  if (!req.body.content) {
    return res.status(400).send({
      message: 'Note content cannot be empty.',
    });
  }

  // Create a new instance of Note
  const note = new Note({
    title: req.body.title || 'Untitled Note',
    content: req.body.content,
  });

  // Save Note in the database
  note.save()
    .then((data) => {
      res.send(data);
    }).catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occured while create the Note.',
      });
    });
};

// Retrieve and return all Notes from database
exports.findAll = (req, res) => {
  Note.find()
    .then((notes) => {
      res.send(notes);
    }).catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occured while retrieving notes.',
      });
    });
};

// Retrieve a Note by ID
exports.findOne = (req, res) => {
  const { id } = req.params;

  Note.findById(id)
    .then((note) => {
      if (!note) {
        return res.status(404).send({
          message: `Note not found with id: ${id}`,
        });
      }
      return res.send(note);
    }).catch((err) => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: `Note not found with id ${id}`,
        });
      }
      return res.status(500).send({
        error: err.message || `Some error occured while retrieving note with id ${id}`,
      });
    });
};

// Update a Note by ID
exports.update = (req, res) => {
  // Validate request
  if (!req.body.content) {
    return res.status(400).send({
      message: 'Note content cannot be empty',
    });
  }

  const { id } = req.params;
  const { title, content } = req.body;
  Note.findByIdAndUpdate(id, { title: title || 'Untitled Note', content }, { new: true })
    .then((note) => {
      if (!note) {
        return res.status(404).send({
          message: `Note not found with id ${id}`,
        });
      }
      return res.send(note);
    }).catch((err) => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: `Note note found with id ${id}`,
        });
      }

      return res.status(500).send({
        message: err.message || `Error updating note with id ${id}`,
      });
    });
};

// Delete a Note by ID
exports.delete = (req, res) => {
  const { content } = req.body;
  const { id } = req.params;

  // Validate request
  if (!content) {
    return res.status(404).send({ message: 'Note content cannot be empty' });
  }

  Note.findByIdAndRemove(id)
    .then((note) => {
      if (!note) {
        return res.status(404).send({ message: `Note not found with id ${id}` });
      }
      return res.send({ message: 'Note deleted successfully' });
    }).catch((err) => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({ message: `Note not found with id ${id}` });
      }
      return res.status(500).send({ message: `Could not delete note with id ${id}` });
    });
};
