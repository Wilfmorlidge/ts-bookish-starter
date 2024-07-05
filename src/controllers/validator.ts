import { Router, Request, Response } from 'express';
import { connect } from '../connector'

const sequelize = connect();

async function validator(username: string, password: string): Promise<boolean> {
    const [results,metedata] = await sequelize.query('SELECT COUNT(Users_ID) FROM Users WHERE username=' + username + 'AND password =' + password);
    let matches: string[] = (JSON.stringify(results[0])).match(/[0-9]/)
    let number = parseInt(matches[0])
    if (number == 1) {
        return true
    } else {
        return false
    }
};


export default validator;
