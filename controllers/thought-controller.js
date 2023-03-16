const { Thoughts, Users } = require('../models');

const thoughtsController = {

    // Get all available Thoughts
    getAllThoughts(req,res) {
        Thoughts.find({})
        .populate({path: 'reactions',select: '-__v'})
        .select('-__v')
        // .sort({_id: -1})
        .then(dbThoughtsData => res.json(dbThoughtsData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    },
},


    // Get a specific thought by ID
    getThoughtsById({ params }, res) {
        Thoughts.findOne({ _id: params.id })
        .populate({path: 'reactions',select: '-__v'})
        .select('-__v')
        .then(dbThoughtsData => {
            if(!dbThoughtsData) {
            res.status(404).json({message: 'No thoughts with this particular ID!'});
            return;
        }
        res.json(dbThoughtsData)
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err)
        });
    },

    // Create a new thought below
    createThoughts({ params, body}, res) {
        Thoughts.create(body)
        .then(({ _id }) => {
            return Users.findOneAndUpdate({ _id: params.userId }, { $push: { thoughts: _id }}, { new: true, runValidators: true });
        })
        .then(dbThoughtsData => {
            if(!dbThoughtsData) {
                res.status(404).json({ message: 'No thoughts with this particular ID!'});
                return;
            }
            res.json(dbThoughtsData)
        })
        .catch(err => res.json(err)); 
        
    },

     // Updating a current thought by ID
     updateThoughts({ params, body }, res) {
        Thoughts.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
        .populate({path: 'reactions', select: '-__v'})
        .select('-___v')
        .then(dbThoughtsData => {
            if (!dbThoughtsData) {
                res.status(404).json({ message: 'No thoughts with this particular ID!' });
                return;
            }
                res.json(dbThoughtsData);
        })
        .catch(err => res.status(400).json(err));
    },

  // Deleting a current thought by its ID
  deleteThoughts({ params }, res) 
  {
    Thoughts.findOneAndDelete({ _id: params.id })
    .then(dbThoughtsData => {
        if (!dbThoughtsData) {
            res.status(404).json({ message: 'No thoughts with this particular ID!' });
            return;
        }
        res.json(dbThoughtsData);
        })
        .catch(err => res.status(400).json(err));
},


