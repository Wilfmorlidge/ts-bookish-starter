import { Router, Request, Response } from 'express';
import { connect } from '../connector'

const sequelize = connect();


class register {
    router: Router;

    constructor() {
        this.router = Router();
        this.router.post('/', this.register.bind(this));
    }

    register1(req: Request, res: Response) {
        res.json({message: 'accepts'})
    }

    async register(req: Request, res: Response) {
        console.log("works")
        const results1 = await sequelize.query('SELECT * FROM Users')
        console.log(results1)
        const results = await sequelize.query('INSERT INTO Users VALUES('+req.params.usernam+','+req.params.password+')')
        res.json({username: req.params.username, password: req.params.password})
    }
};


export default new register().router;
