const http = require("http");
const Koa = require("koa");
const koaBody = require("koa-body");
const cors = require("@koa/cors");

const app = new Koa();

tickets = [
  {
    id: 0,
    name: "Написать front",
  },
  {
    id: 1,
    name: "Написать back",
  },
];

app.use(
  koaBody({
    json: true,
    text: true,
    urlencoded: true,
    // multipart: true,
  })
);

app.use(
  cors({
    origin: "*",
    credentials: true,
    "Access-Control-Allow-Origin": true,
    allowMethods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(async (ctx) => {
  
  let method;
  if (ctx.request.method === "GET") ({ method } = ctx.request.query);
  else if (ctx.request.method === "POST") ({ method } = ctx.request.body);

  // all incoming data in ctx.request.query and ctx.request.body
  switch (method) {
    case "allTickets":
      
      break;
    case "ticketById":

      break;
    case "createTicket":
      
      break;
    case "changeStatus":

      break;
    case "updateTicket":
      
      break;
    case "deleteTicket":

      break;
    default:
      ctx.response.body = `Server is working`;
  }

});
const port = process.env.PORT || 7070;
const server = http.createServer(app.callback()).listen(port);
