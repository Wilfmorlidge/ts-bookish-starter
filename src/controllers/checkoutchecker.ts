import { Router, Request, Response } from 'express';
import { connect } from '../connector'
import validator from './validator'

const sequelize = connect();

class checkoutchecker {
    router: Router;

    constructor() {
        this.router = Router();
        this.router.get('/:username/:password/:User_ID', this.checkoutchecker.bind(this));
    }

    async checkoutchecker(req: Request, res: Response) {
        const queryvalid: boolean = await validator(req.params.username,req.params.password)
        if (queryvalid == true) {
            const results = await sequelize.query('SELECT * FROM checkouts WHERE Users_ID=' + req.params.User_ID);
            res.json(results)
        }
    }
};


export default new checkoutchecker().router;
