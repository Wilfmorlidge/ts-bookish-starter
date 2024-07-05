import { Router, Request, Response } from 'express';
import { connect } from '../connector'
import validator from './validator'

const sequelize = connect();


class newbook {
    router: Router;

    constructor() {
        this.router = Router();
        this.router.get('/:username/:password/:isbn/:title/:author/:number', this.newbook.bind(this));
    }
    async newbook(req: Request, res: Response) {
        const queryvalid: boolean = await validator(req.params.username,req.params.password)
        if (queryvalid == true) {
            res.json({ISBN: req.params.isbn, title: req.params.title, author: req.params.author,number: req.params.number})
            const results = await sequelize.query('INSERT INTO Catalogue VALUES('+req.params.isbn+','+req.params.title+','+req.params.author+','+req.params.number+')')
        }
    }
};


export default new newbook().router;
