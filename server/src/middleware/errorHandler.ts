import logger  from './logEvents';
import { ErrorRequestHandler } from 'express';

const errorHandler:ErrorRequestHandler = (err, req, res, next) => {
    logger.error(`${err.name}: ${err.message}`);
    console.error(err.stack)
    res.status(500).send(err.message);
}

export default errorHandler;