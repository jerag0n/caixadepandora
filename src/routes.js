import { Router } from 'express';

const routes = new Router();


routes.get('/', function (req, res){ 
    return res.status(200).json({ok: true})


});

export default routes;

