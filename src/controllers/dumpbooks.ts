import { Router, Request, Response } from 'express';
import express from 'express';
import 'dotenv/config';
import {Request as tedious_Request, Connection } from 'tedious';
import { connect } from '../connector'
//import {Catalogue, Users, checkouts} from '../models'

interface returnedBooks {
    books: any[]
  }



const sequelize = connect();



class dumpbooks {
    router: Router;

    constructor() {
        this.router = Router();
        this.router.get('/', this.redundant_function.bind(this));
    }
      
    async redundant_function(req: Request, res:Response) {
        const results = await sequelize.query('SELECT * FROM Catalogue');
        console.log(results)
        res.json(results)
    };
}     

export default new dumpbooks().router;