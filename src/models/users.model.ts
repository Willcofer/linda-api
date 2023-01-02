import * as mongoose from 'mongoose';
import { UserDto } from '../dtos/user.dto';

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  external_username: String,
});

const userModel = mongoose.model<UserDto & mongoose.Document>('User', userSchema);

export default userModel;