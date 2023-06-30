const { libraryProvider } = require("../providers");

const createLibrary = async(library) => {
    return await libraryProvider.createLibrary(library);
};

const getLibrary = async(libraryId) =>{
    const library = await libraryProvider.getLibrary(libraryId);
    return library;
};

const getAllLibrarys = async(name,id) =>{
    const librarys = await libraryProvider.getAllLibrarys({name, id});
    return librarys;
};

const updateLibrary = async(libraryId, library) => {
    const libraryFound = await libraryProvider.getLibrary(libraryId);
    if(libraryFound){
        const libraryUpdated = await libraryProvider.updateLibrary(libraryId, library);
        return libraryUpdated;
    }
    return null;
};

const deleteLibrary = async(libraryId) => {
    return await libraryProvider.deleteLibrary(libraryId);
};

module.exports = {
    createLibrary,
    getLibrary,
    getAllLibrarys,
    updateLibrary,
    deleteLibrary
};