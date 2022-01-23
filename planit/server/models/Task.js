import mongoose, { Schema } from 'mongoose'
import { ProjectSchema } from './Project'

export const TaskSchema = new Schema({
  name: { type: String, required: true },
  weight: { type: Number, required: true },
  projectId: { type: Schema.Types.ObjectId, ref: 'Project', required: true },
  sprintId: { type: Schema.Types.ObjectId, ref: 'Sprint', required: true },
  creatorId: { type: Schema.Types.ObjectId, ref: 'Profile', required: true },
  isComplete: { type: Boolean }

}, { timestamps: true, toJSON: { virtuals: true } })

TaskSchema.virtual('project', {
  localField: 'projectId',
  foreignField: '_id',
  justOne: true,
  ref: 'Project'
})

TaskSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true,
  ref: 'Profile'
})
TaskSchema.virtual('sprint', {
  localField: 'sprintId',
  foreignField: '_id',
  justOne: true,
  ref: 'Sprint'
})
