// copy this file and rename it <initial>-person.js
// Add the get route to get the people from the People model
// add the post route that will take a firstName and lastName from the body
// this code should NOT be on master and should be done on a branch
// push this branch to github ‘git push -u <remote> <branch>’
// this branch needs to be merged to master. I can’t stop you from using git merge however this excersise is to practice pull requests. To complete this correctly merge the branch to master using the pull request system on your own repo
// Lastly figure out how to submit a pull request of your master to my master on github
const express = require('express');
const router = express.Router();
const Person=require('../../models/Person');

router.get('/', async (req, res) => {
    try{
        const persons=await Person.find().sort('lastName');
        console.log("Persons list request received.");
        console.log(persons);
        res.send(persons);
    } catch(err){
        res.status(300).json({msg:err.message});
    }

})

router.post('/', async(req, res)=>{
    console.log("POST request received:");
    const person=new Person({
        firstName: req.body.firstName,
        lastName: req.body.lastName
    })
    try{
        console.log(person);
        const newPerson=await person.save();
        res.status(201).json(newPerson);
    } catch (err){
        res.status(400).json({message:err.message});
    }
})

module.exports = router;