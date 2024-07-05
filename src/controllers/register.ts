import { Router, Request, Response } from 'express';
import { connect } from '../connector'

const sequelize = connect();


class register {
    router: Router;

    constructor() {
        this.router = Router();
        this.router.get('/:user_ID/:username/:password', this.register.bind(this));
    }
    async register(req: Request, res: Response) {
        console.log("works")
        res.json({username: req.params.username, password: req.params.password})
        const results = await sequelize.query('INSERT INTO Users VALUES('+req.params.user_ID+','+req.params.username+','+req.params.password+')')
    }
};


export default new register().router;
