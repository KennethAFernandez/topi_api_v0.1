import { Request, Response, NextFunction} from 'express';

/** Simple error handler */

const errorHandler = (error: Error, req: Request, res: Response, next: NextFunction) => {
    if (typeof(error) === 'string') {
        return res.status(400).json({ message: error});
    }
    if (error.name === 'UnauthorizedError') {
        return res.status(401).json({ message: error.message});
    }
    if (error.name === "ValidationError") {
        return res.status(400).json({ message: error.message});
    }
    return res.status(500).json({message: error.message});
}

export default { errorHandler };