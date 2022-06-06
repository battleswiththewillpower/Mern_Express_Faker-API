const express = require("express");
const app = express();
const port = 8000;
const { faker } = require('@faker-js/faker');

// import { faker } from '@faker-js/faker';

class User {
    constructor(){
        this._id = faker.datatype.uuid()
        this.firstName = faker.name.firstName()
        this.lastName = faker.name.lastName()
        this.phoneNumber = faker.phone.phoneNumber()
        this.email = faker.internet.email()
        this.password = faker.internet.password()
    }
}

class Company {
    constructor(){
        this._id = faker.datatype.uuid()
        this.companyName = faker.company.companyName()
        this.address = {
                // street: faker.address.street(),
                city: faker.address.city(),
                state: faker.address.state(),
                zipCode: faker.address.zipCodeByState(),
                country: faker.address.country()
        }
        
    }
}



app.get("/api/users/new", (req, res) => {
    let randomUser = new User()
    // console.log(randomUser)
    res.json({ "user": randomUser });

});


app.get("/api/companies/new", (req, res) => {
    let randomCompany = new Company()
    console.log(randomCompany)
    res.json({ "company": randomCompany });

});

app.get("/api/user/company", (req, res) => {
    let randomUser = new User()
    let randomCompany = new Company()
    // console.log(randomCompany)
    res.json({ "user": randomUser,"company": randomCompany });

});

// req is shorthand for request
// res is shorthand for response
// app.get("/api", (req, res) => {
//     //request: what we receive 
//     //response: what we send
//     res.json({ message: "Ashley for the WIN$$$$$$" });

// });

// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );

