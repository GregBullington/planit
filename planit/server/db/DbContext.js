import mongoose from 'mongoose'
import { AccountSchema, ProfileSchema } from '../models/Account'
import { ProjectSchema } from '../models/Project'
import { ValueSchema } from '../models/Value'
import { SprintSchema } from '../models/Sprint'
import { TaskSchema } from '../models/Task'
import { NoteSchema } from '../models/Note'
class DbContext {
  Note = mongoose.model('Note', NoteSchema);
  Task = mongoose.model('Task', TaskSchema);
  Sprint = mongoose.model('Sprint', SprintSchema);
  Project = mongoose.model('Project', ProjectSchema);
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Profiles = mongoose.model('Profile', ProfileSchema, 'accounts');
}

export const dbContext = new DbContext()
