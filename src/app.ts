import express from 'express';
import 'dotenv/config';
import { Router, Request, Response } from 'express';

import healthcheckRoutes from './controllers/healthcheckController';
import bookRoutes from './controllers/bookController';
import {Request as tedious_Request, Connection } from 'tedious';
import dumpbooks from './controllers/dumpbooks';
import { connect } from './connector'
import register from './controllers/register';

// estbalishing connection with tedious

const port = process.env['PORT'] || 3000;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});

/**
 * Primary app routes.
 */
app.use('/healthcheck', healthcheckRoutes);
app.use('/books', bookRoutes);
app.use('/dumpbooks', dumpbooks);
app.use('/register', register);



