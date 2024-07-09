import prisma from '../config/database';

class PersonModel {
  static async getAll() {
    return prisma.person.findMany();
  }

  static async getById(id) {
    return prisma.person.findUnique({ where: { id: Number(id) } });
  }

  static async create(data) {
    return prisma.person.create({ data });
  }

  static async update(id, data) {
    return prisma.person.update({
      where: { id: Number(id) },
      data,
    });
  }

  static async delete(id) {
    return prisma.person.delete({ where: { id: Number(id) } });
  }
}

export default PersonModel;
