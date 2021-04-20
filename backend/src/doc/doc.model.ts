import * as mongoose from 'mongoose';

export const DocSchema = new mongoose.Schema({
    title: {type: String, required: false},
    description: {type: String, required: false}
})

export interface Doc {
    id: number,
    hash: string,
    title: string,
    description: string
    //nodeList []
}