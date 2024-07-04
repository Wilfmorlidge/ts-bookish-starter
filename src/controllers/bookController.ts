import { Router, Request, Response } from 'express';
import { connect } from '../connector'

const sequelize = connect();

class BookController {
    router: Router;

    constructor() {
        this.router = Router();
        this.router.get('/:searchby', this.getBook.bind(this));
    }

    async getBook(req: Request, res: Response) {
        var results: any = undefined
        if (req.params.searchby=='author') {
            results = await sequelize.query('SELECT * FROM Catalogue WHERE author=' + req.query.author);
        }
        if (req.params.searchby=='title') {
            results = await sequelize.query('SELECT * FROM Catalogue WHERE title=' + req.query.title);
        }
            res.json(results)
    }
};


export default new BookController().router;
