import { Router } from 'express';
import UserController from '../controllers/UserController';

class UserRoutes {
  router = Router();
  userController = new UserController();

  constructor() {
    this.intializeRoutes();
  }
  intializeRoutes() {
    this.router.route('/').get(this.userController.getAllUsers);
    this.router.route('/:id').get(this.userController.getUserById);
  }
}
export default new UserRoutes().router;