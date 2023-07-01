import Project from "../model/Project-model.js";


export const create = async (req, res) => {
    const project = new Project(req.body);
    try {
        const savedproject = await project.save();
        res.status(202).json(savedproject);
    } catch(error) {
        throw error;
    }
};

export const update = async (req, res) => {
    try {
        const updateproject = await Project.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.status(202).json(updateproject);
    } catch(error) {
        throw (error);
    }
};

export const deleteProject = async (req, res) => {
    try {
        await Project.findByIdAndDelete(req.params.id);
        res.status(202).json('deleted');
    } catch(error) {
        throw error;
    }
};

export const getProject = async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
        res.status(202).json(project);
    } catch(error) {
        throw (error);
    }
};

export const getAllProject = async (req, res) => {
    try {
        const projects = await Project.find();
        res.status(202).json(projects);
    } catch(error) {
        throw (error);
    }
};