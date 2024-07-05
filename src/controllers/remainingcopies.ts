import { Router, Request, Response } from 'express';
import { connect } from '../connector'
import validator from './validator'

const sequelize = connect();

class remainingcopies {
    router: Router;

    constructor() {
        this.router = Router();
        this.router.get('/:username/:password/:ISBN', this.remainingcopies.bind(this));
    }

    async remainingcopies(req: Request, res: Response) {
        const queryvalid: boolean = await validator(req.params.username,req.params.password)
        if (queryvalid == true) {
            const [results1,metedata1] = await sequelize.query('SELECT number FROM Catalogue WHERE ISBN ='+ req.params.ISBN);
            const [results2,metadata2] = await sequelize.query('SELECT COUNT(checkout_ID) AS num FROM checkouts WHERE ISBN ='+req.params.ISBN);
            let matches1: string[] = (JSON.stringify(results1[0])).match(/[0-9]/)
            let matches2: string[] = (JSON.stringify(results2[0])).match(/[0-9]/)
            let output = parseInt(matches1[0]) - parseInt(matches2[0])
            res.json({number: output})
        }
    }
};


export default new remainingcopies().router;
