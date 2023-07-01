const { Library } = require("../models");
const { Op } = require("sequelize");

//CRUD libreria

const createLibrary = async (library) => {
  try {
    const newLibrary = await Library.create(library);
    return newLibrary;
  } catch (error) {
    console.error("Error when creating Library", error);
  }
};
const getLibrary = async (libraryId) => {
  try {
    const libraryFound = await Library.findByPk(libraryId, {
        where: { deleted: 0},
        include: { all: true },
    });
    return libraryFound;
  } catch (error) {
    console.error("Error when feching Library", error);
    throw error;
  }
};

const getAllLibrarys = async () => {
  try {
    const librarys = await Library.findAll(
      {
        where: { deleted: 0},
        include: { all: true } }
      // {
      // where: {
      //     id: options.id
      // }
      // }
    );
    return librarys;
  } catch (error) {
    console.error("Error when fetching Library", error);
    throw error;
  }
};

const updateLibrary = async (libraryId, library) => {
  try {
    const libraryFound = await Library.findByPk(libraryId, {
      include: { all: true },
    });
    if (libraryFound) {
      await libraryFound.update(library);
      return libraryFound;
    } else {
      throw new Error("Library not found");
    }
  } catch (error) {
    console.error("Error when updating Library", error);
    throw error;
  }
};
const deleteLibrary = async (libraryId) => {
  try {
    const libraryFound = await Library.findByPk(libraryId, {
      include: { all: true },
    }); //A testear si esto funciona
    if (libraryFound) {
      libraryFound.deleted = true;
      libraryFound.save();
      return libraryFound;
    } else {
      throw new Error("Library not found");
    }
  } catch (error) {
    console.error("Error at deleting Library", error);
    throw error;
  }
};

module.exports = {
  createLibrary,
  updateLibrary,
  deleteLibrary,
  getLibrary,
  getAllLibrarys,
};
