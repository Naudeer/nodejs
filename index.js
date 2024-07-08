require('dotenv').config();

const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const app = express();
app.use(express.json());

app.get('/api/people', async (req, res) => {
  const people = await prisma.person.findMany();
  res.json(people);
});

app.post('/api/people', async (req, res) => {
  const { name, age } = req.body;
  const person = await prisma.person.create({
    data: { name, age },
  });
  res.status(201).json(person);
});

app.patch('/api/people/:id', async (req, res) => {
  const { id } = req.params;
  const { name, age } = req.body;
  const person = await prisma.person.update({
    where: { id: Number(id) },
    data: { name, age },
  });
  res.json(person);
});

app.delete('/api/people/:id', async (req, res) => {
  const { id } = req.params;
  await prisma.person.delete({
    where: { id: Number(id) },
  });
  res.json({ message: 'Person deleted' });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
