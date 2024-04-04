import { CorsOptions } from 'cors';
import allowedOrigins from'./allowedOrigins'
import logger from "../middleware/logEvents";

const corsOptions: CorsOptions = {

    origin: (origin, callback) => {
        if (origin && allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            logger.error('Not allowed by CORS');
            callback(new Error('Not allowed by CORS'));
        }
    },
    optionsSuccessStatus: 200
}

export default corsOptions;