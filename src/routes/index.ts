import { Application } from 'express';
import userRouter from './UserRoutes';
//import lessonRouter from './LessonRoutes';

export default class Routes {

  constructor(app: Application) {
    // course reoutes
    app.use('/api/courses', userRouter);
    // lesson routes
    //app.use('/api/lessons', lessonRouter);
  }
}