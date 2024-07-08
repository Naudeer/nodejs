require('dotenv').config();
const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const app = express();

app.use(express.json());

app.get('/api/people', async (req, res) => {
  try {
    const people = await prisma.person.findMany();
    res.json(people);
  } catch (error) {n
    console.error('Error fetching people:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/api/people', async (req, res) => {
  const { name, age } = req.body;
  if (!name || !age) {
    return res.status(400).json({ error: 'Name and age are required' });
  }

  try {
    const person = await prisma.person.create({
      data: { name, age },
    });
    res.status(201).json(person);
  } catch (error) {
    console.error('Error creating person:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.patch('/api/people/:id', async (req, res) => {
  const id = parseInt(req.params.id, 10);
  const { name, age } = req.body;

  if (!id || !name || !age) {
    return res.status(400).json({ error: 'ID, name, and age are required' });
  }

  try {
    const person = await prisma.person.update({
      where: { id },
      data: { name, age },
    });
    res.json(person);
  } catch (error) {
    console.error('Error updating person:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.delete('/api/people/:id', async (req, res) => {
  const id = parseInt(req.params.id, 10);

  if (!id) {
    return res.status(400).json({ error: 'ID is required' });
  }

  try {
    await prisma.person.delete({
      where: { id },
    });
    res.status(200).json({ message: 'Person deleted successfully' });
  } catch (error) {
    console.error('Error deleting person:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
