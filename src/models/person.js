import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
class PersonModel {
  static async getAll() {
    return prisma.people.findMany();
  }

  static async getById(id) {
    return prisma.people.findUnique({ where: { id: Number(id) } });
  }

  static async create(data) {
    return prisma.people.create({ data });
  }

  static async update(id, data) {
    return prisma.people.update({
      where: { id: Number(id) },
      data,
    });
  }

  static async delete(id) {
    return prisma.people.delete({ where: { id: Number(id) } });
  }
}

export default PersonModel;
