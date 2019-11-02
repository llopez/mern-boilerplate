import { Router } from 'express'
import {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
} from '../controllers/tasks'

const router = Router()

router.get('/', async (req, res) => {
  const tasks = await getTasks()
  res.json(tasks)
})

router.post('/', async (req, res) => {
  const task = await createTask(req.body)
  res.json(task)
})

router.put('/:id', async (req, res) => {
  const data = req.body
  const task = await updateTask(req.params.id, data)
  res.json(task)
})

router.delete('/:id', async (req, res) => {
  const task = await deleteTask(req.params.id)
  res.json(task)
})

router.get('/:id', async (req, res) => {
  const task = await getTask(req.params.id)
  res.json(task)
})

export default router

// module.exports = router
