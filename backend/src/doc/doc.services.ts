import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Doc } from './doc.model'
import { InjectModel } from '@nestjs/mongoose';


@Injectable()
export class CatsService {
    constructor(@InjectModel('Doc') private docModel: Model) {}
}