import { Schema } from '@hapi/joi';
import { NextFunction, Request, Response } from 'express';

export enum RequestProperty {
  Body = 'body',
  Query = 'query',
}

type Middleware = (req: Request, res: Response, next: NextFunction) => void;

export default class ValidatorMiddleware {
  validate(schema: Schema, property: RequestProperty): Middleware {
    return (req: Request, res: Response, next: NextFunction): void => {
      const { error } = schema.validate(req[property]);

      if (error) {
        res.status(400).json({ error: error.message });
        return;
      }

      next();
    };
  }
}
