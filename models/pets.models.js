import { PrismaClient } from '../generated/prisma/index.js'

const prisma = new PrismaClient() 

export const getItem = async (id) => {
    try {
      const pet = await prisma.pet.findUnique({
        where: { id: Number(id) }
      });
      return pet;
    } catch (err) {
      console.error('Error', err);
    }
  }

  export const listItems = async () => {
    try {
      return await prisma.pet.findMany();
    } catch (err) {
      console.error('Error', err);
    }
  }

  export const editItem = async (id, data) => {
    try {
      const updatedPet = await prisma.pet.update({
        where: { id: Number(id) },
        data
      });
      return updatedPet;
    } catch (err) {
      console.error('Error', err);
    }
  }
  

  export const addItem = async (data) => {
    try {
      const newPet = await prisma.pet.create({ data });
      return newPet;
    } catch (err) {
      console.error('Error', err);
    }
  }
  
  export const deleteItem = async (id) => {
    try {
      await prisma.pet.delete({
        where: { id: Number(id) }
      });
      return { message: 'Pet deleted' };
    } catch (err) {
      console.error('Error', err);
    }
  }
  