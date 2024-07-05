import express from 'express';
import 'dotenv/config';
import { Router, Request, Response } from 'express';

import healthcheckRoutes from './controllers/healthcheckController';
import bookRoutes from './controllers/bookController';
import {Request as tedious_Request, Connection } from 'tedious';
import dumpbooks from './controllers/dumpbooks';
import { connect } from './connector'
import register from './controllers/register';
import newbook from './controllers/newbook';
import checkoutchecker from './controllers/checkoutchecker';
import remainingcopies from './controllers/remainingcopies';

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
app.use('/newbook',newbook);
app.use('/checkoutchecker',checkoutchecker);
app.use('/remainingcopies',remainingcopies);



