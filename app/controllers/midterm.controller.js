const Midterm = require('../models/midterm.model')

exports.create = (req, res) => {

    if (!req.body.age) {
        return res.status(400).send({
            message: "Age can't be empty"
        })
    }

    if (!req.body.name) {
        return res.status(400).send({
            message: "Name can't be empty"
        })
    }

    if (!req.body.major) {
        return res.status(400).send({
            message: "Major can't be empty"
        })
    }

    const midterm = new Midterm({
        name: req.body.name || 'Untitled',
        age: req.body.age,
        major: req.body.major
    })


    midterm.save()
    .then(data => res.send(data))
    .catch(err => {
        res.status(500).send({
            message: "Something went wrong!!",
            error: err
        })
    });
}


//request, response

exports.findAll = (req, res) =>{

    //Retrieve all the data

    Midterm.find().then(
        midterms => {
            res.send(midterms)
        }
    ).catch(err => {
        res.status(500).send({
            'message': "Something went wrong!!",
            'error': err
        })
});


}


exports.findOne = (req, res) => {
    Midterm.findById(req.params.id).then(
        midterms =>{
            
            console.log(midterms)

            if(!midterms){
                res.status(404).send({
                    "message" : "Student not found"
                })
            }

            res.send(midterms)
        }
    ).catch(err => {
        res.status(500).send({
            'message': "Something went wrong!!",
            'error': err
        })
});
    

}


exports.update = (req, res) => {
    if (!req.body.age) {
        return res.status(400).send({
            message: "Age can't be empty"
        })
    }

    if (!req.body.name) {
        return res.status(400).send({
            message: "Name can't be empty"
        })
    }

    if (!req.body.major) {
        return res.status(400).send({
            message: "Major can't be empty"
        })
    }

    Midterm.findByIdAndUpdate(
        req.params.id,
        {
            name: req.body.name || "Untitled",
            description: req.body.description,
        },
        { new: true }
    ).then(
        midterms =>{
            
            console.log(midterms)

            if(!midterms){
                res.status(404).send({
                    "message" : "ID not found"
                })
            }

            res.send(midterms)
        }
    ).catch(err => {
        res.status(500).send({
            'message': "Something went wrong!!",
            'error': err,
        });
    });
    
};


exports.delete = (req, res) =>{
    Midterm.findByIdAndRemove(req.params.id).then(
        midterms =>{
            
            console.log(midterms)

            if(!midterms){
                res.status(404).send({
                    "message" : "Student not found"
                })
            }

            res.send({
                'message' : 'Student got deleted!!'
            })
        }
    ).catch(err => {
        res.status(500).send({
            'message': "Something went wrong!!",
            'error': err,
        });
    });
}
    