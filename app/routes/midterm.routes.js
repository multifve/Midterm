module.exports = (app) => {
    const midterm = require('../controllers/midterm.controller')


//Add a new student
    app.post('/midterm', midterm.create);

//Fetch all students
    app.get('/midterm', midterm.findAll);

//Fetch one students
    app.get('/midterm/:id', midterm.findOne);

//Update a student by id
    app.put('/midterm/:id', midterm.update);

//Delete a student by id
    app.delete('/midterm/:id', midterm.delete);

}