import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    link: {
        type: String,
    }
});

export default mongoose.model("Project", ProjectSchema);
