import { Router, Request, Response } from 'express';
import { connect } from '../connector'
import validator from './validator'

const sequelize = connect();

class BookController {
    router: Router;

    constructor() {
        this.router = Router();
        this.router.get('/:username/:password/:searchby', this.getBook.bind(this));
    }

    async getBook(req: Request, res: Response) {
        var results: any = undefined
        const queryvalid: boolean = await validator(req.params.username,req.params.password)
        if (queryvalid == true) {
            if (req.params.searchby=='author') {
                results = await sequelize.query('SELECT * FROM Catalogue WHERE author=' + req.query.author);
            }
            if (req.params.searchby=='title') {
                results = await sequelize.query('SELECT * FROM Catalogue WHERE title=' + req.query.title);
            }
                res.json(results)
        }
    }
};


export default new BookController().router;
