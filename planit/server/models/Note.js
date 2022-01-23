import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const NoteSchema = new Schema({
  body: { type: String, required: true },
  projectId: { type: Schema.Types.ObjectId, ref: 'Project', required: true },
  // sprintId: { type: Schema.Types.ObjectId, ref: 'Sprint', required: true },
  creatorId: { type: Schema.Types.ObjectId, ref: 'Profile', required: true },
  taskId: { type: Schema.Types.ObjectId, ref: 'Task', required: true }

}, { timestamps: true, toJSON: { virtuals: true } })

NoteSchema.virtual('project', {
  localField: 'projectId',
  foreignField: '_id',
  justOne: true,
  ref: 'Project'
})

NoteSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true,
  ref: 'Profile'
})
NoteSchema.virtual('sprint', {
  localField: 'sprintId',
  foreignField: '_id',
  justOne: true,
  ref: 'Sprint'
})

NoteSchema.virtual('task', {
  localField: 'taskId',
  foreignField: '_id',
  justOne: true,
  ref: 'Task'
})
