const { libraryService } = require("../services");

const createLibraryController = async(req,res) => {
    try {
        const newlibrary  = await libraryService.createLibrary(req.body);
        res.json(newlibrary);
    } catch (error) {
        res.status(500).json({ action: "createLibrary", error: error.message});
    }
};

const getLibraryController = async (req,res) => {
    try {
        const library = await libraryService.getLibrary( req.params.libraryId );
        if(!library){
            res.status(404).json({action: "getLibrary", error: "library not found"});
        }else{
            res.json(library);
        }
        
    } catch (error) {
        res.status(500).json({ action: "getLibrary", error: error.message});
    }
};

const getAllLibrarysController = async (req,res) => {
    try {
        const librarys = await libraryService.getAllLibrarys();
        if(!librarys){
            res.status(404).json({action: "getAllLibrarys", error: "Any Library was found"});
        }else{
            res.json(librarys);
        }
        
    } catch (error) {
        res.status(500).json({ action: "getAllLibrarys", error: error.message});
    }
};

const updateLibraryController = async(req,res) => {
    try {
        const library = await libraryService.updateLibrary( req.params.libraryId, req.body );
        if(!library){
            res.status(404).json({action: "updateLibrary", error: "Library not found"});
        }else{
            res.json(library);
        }
    } catch (error) {
        res.status(500).json({ action: "updateLibrary", error: error.message});
        
    }
}

const deleteLibraryController = async(req,res) => {
    try {
        const library = await libraryService.deleteLibrary( req.params.libraryId);
        if(!library){
            res.status(404).json({action: "deleteLibrary", error: "Library not found"});
        }else{
            res.json(library);
        }
    } catch (error) {
        res.status(500).json({ action: "deleteLibrary", error: error.message});
    }
}

module.exports = {
    createLibraryController,
    getLibraryController,
    getAllLibrarysController,
    updateLibraryController,
    deleteLibraryController
}


