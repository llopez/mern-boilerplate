import { Task } from '../models/task'

export const getTasks = async () => {
  const tasks = await Task.find()
  return tasks
}

export const createTask = async (data) => {
  const task = new Task(data)
  return await task.save()
}

export const updateTask = async (id, data) => {
  const task = await Task.findByIdAndUpdate(id, data)
  return task
}

export const deleteTask = async (id) => {
  const task = await Task.findByIdAndDelete(id)
  return task
}

export const getTask = async (id) => {
  const task = await Task.findById(id)
  return task
}

