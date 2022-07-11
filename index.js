const client_1 = require("@prisma/client");

const createPrismaClient = () => {
  const prisma = new client_1.PrismaClient();
  return prisma;
};

exports.createPrismaClient = createPrismaClient;
