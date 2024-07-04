import express from 'express';
import 'dotenv/config';
import { Request, Response } from "express";

import healthcheckRoutes from './controllers/healthcheckController';
import bookRoutes from './controllers/bookController';
import {Request as tedious_Request, Connection } from 'tedious';

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
app.use('/dumpbooks', redundant_function);

var one = {}
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

interface returnedBooks {
  books: any[]
}

function redundant_function(req: Request, res:Response) {
  dumpbooks_connection()
  .then((response) => {
    res.json(response)
  })
  .catch((err) => {
    res.send("your query is broken");
  })

}

function dumpbooks_connection(): Promise<returnedBooks> { 
    var Request = require('tedious').Request;
    var Connection = require('tedious').Connection;
    var connection = new Connection(config);
    connection.connect();

    return (new Promise ((resolve,reject) => {connection.on('connect', async function(err) {
        if(err) {
          console.log("connection unsuccessful")
          reject(err);
        } 
          console.log("connection successful")
          resolve(dumpbooks())
    //output = {message: "interface successful"}
       //const output: any = dumpbooks()
       //return res.json({message: "done gone did it"});
      });
    }));
    function dumpbooks(): Promise<returnedBooks>{
      const request = new tedious_Request("SELECT * FROM Catalogue", (err, rowCount) => {
      if (err) {
        console.log("request unsuccessful")
        console.log(err);
      } else {
        // and we close the connection
        console.log("request successfull")
        connection.close()
      }
    });
  
    const response: returnedBooks = {books :[]}
    connection.execSql(request);
    return new Promise ((resolve,reject) => {request.on('row', (columns) => {
      console.log("row defined")
      response.books.push(columns)
      });
      request.on('doneInProc',() => {
        console.log("true success")
        console.log(response)
        resolve(response)
      });
      request.on('error',(err) =>{
        console.log("on end error")
        reject(err);
      })
    });
  }
//return res.json(one);
}
