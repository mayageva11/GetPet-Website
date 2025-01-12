const PostSchema = require('../../models/PostSchema');

exports.DeletePost = async (req, res) => {
    var _id = req.params.postId?.toString();
    
    if(_id){
        try {
            const post = await PostSchema.findOneAndDelete(
                {_id}
            );

            res.status(200).json({ message: 'Success' })
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};