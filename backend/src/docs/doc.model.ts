import * as mongoose from 'mongoose';
// import { DocsService } from './docs.service';

export const DocSchema = new mongoose.Schema({
    hashcode: { type: String, default: ''},
    title: { type: String, required: false, default: ''},
    created_at: { type: Date, default: Date.now }
})


export interface Doc extends mongoose.Document {    
    hashcode: string,
    title: string,
    created_at: Date,
}