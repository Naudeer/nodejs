const PersonModel = require('../models/person');

exports.getAll = async (req, res) => {
  try {
    const people = await PersonModel.getAll();
    res.json(people);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve people' });
  }
};

exports.getById = async (req, res) => {
  try {
    const person = await PersonModel.getById(req.params.id);
    if (person) {
      res.json(person);
    } else {
      res.status(404).json({ error: 'Person not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve person' });
  }
};

exports.create = async (req, res) => {
  try {
    const person = await PersonModel.create(req.body);
    res.status(201).json(person);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create person' });
  }
};

exports.update = async (req, res) => {
  try {
    const person = await PersonModel.update(req.params.id, req.body);
    res.json(person);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update person' });
  }
};

exports.delete = async (req, res) => {
  try {
    await PersonModel.delete(req.params.id);
    res.json({ message: 'Person deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete person' });
  }
};
