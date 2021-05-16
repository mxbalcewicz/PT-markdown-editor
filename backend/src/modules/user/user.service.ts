import { Injectable } from '@nestjs/common';
import { AuthUserDto } from './dto/auth-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(authUserDto: AuthUserDto): Promise<User> {
    const createdCat = new this.userModel(authUserDto);
    return createdCat.save();
  }

  findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  findOne(id: string): Promise<User> {
    return this.userModel.findById(id).exec();
  }

  findOneByFacebookId(facebookId: string): Promise<User> {
    return this.userModel.findOne({ facebookId }).exec();
  }

  update(id: string, updateUserDto: UpdateUserDto): Promise<User | null> {
    return this.userModel.findByIdAndUpdate(id, updateUserDto).exec();
  }

  remove(id: string): Promise<User | null> {
    return this.userModel.findByIdAndDelete(id).exec();
  }
}
