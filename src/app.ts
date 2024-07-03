import express from 'express';
import 'dotenv/config';
import { Request, Response } from "express";

import healthcheckRoutes from './controllers/healthcheckController';
import bookRoutes from './controllers/bookController';
import { Connection } from 'tedious';

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
app.use('/dumpbooks', dumpbooks_connection);

var one = {}

function dumpbooks_connection(req: Request, res: Response) {
    var Connection = require('tedious').Connection;
    var config = {
        server: "KOMODODRAGON",
        authentication: {
            type: "default",
            options: {  
                userName: "User",
                password: "&inger_sn4p3402",
            }
        },
        options: {
            trustedConnection: true,
            encrypt: true,
            enableArithAbort: true,
            trustServerCertificate: true
        }
    };

    var connection = new Connection(config);

    connection.on('connect', async function(err) {
    if(err) {
        console.log("connection unsuccessful")
        console.log('Error: ', err)
    } 
    console.log("connection successful")
    await dumpbooks(res,connection);
    //output = {message: "interface successful"}
       //const output: any = dumpbooks()
       //return res.json({message: "done gone did it"});
    });
connection.connect();
//return res.json(one);
}


async function dumpbooks(res: Response, connection: Connection): Promise<Response>{
    var output = {}
    var Request = require('tedious').Request;
    console.log("life is not purposeful")
    var request = new Request("SELECT * FROM Catalogue", function(err, rowCount) {
    if (err) {
      console.log(err);
    } else {
      // and we close the connection
      connection.close()
    }
  });

  request.on('row', function(columns) {
    columns.forEach(function(column) {
        console.log(column)
      output += column
    });
  });

  connection.execSql(request);
  return res.json(output)
  //const test = request
  //output = test
  //console.log(output)
}