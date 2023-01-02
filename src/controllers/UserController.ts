import { Request, Response, NextFunction } from 'express';
import { UserService } from '../services/UserService';
import { apiErrorHandler } from './../handlers/errorHandler';

export default class UserController {
  constructor() { }

  async getAllUsers(req: Request, res: Response, next: NextFunction) {
    try {
      const courseList = await UserService.getAllUsers({ order: ['seqNo'] });
      res.json(courseList);
    } catch (error) {
      apiErrorHandler(error, req, res, 'Fetch All Courses failed.');
    }
  }

  async getUserById(req: Request, res: Response, next: NextFunction) {
    try {
      const courseDetails = await CourseRepo.getById(req.params.id);
      if (courseDetails) {
        return res.json(courseDetails);
      } else {
        res.status(404).send(`Lesson ${req.params.id} not found.`);
      }
    } catch (error) {
      apiErrorHandler(error, req, res, `Course ${req.params.id} is failed.`);
    }
  }
}