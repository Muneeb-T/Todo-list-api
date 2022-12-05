import express from 'express';
import {
    getTodos,
    getTodo,
    deleteTodo,
    updateTodo,
    addTodo,
} from '../controllers/todo-controller.js';
const router = express.Router();

router.post('/add-todod', addTodo);
router.get('/get-todos', getTodos);
router.get('/get-todo/:id', getTodo);
router.put('/update-todo/:id', updateTodo);
router.delete('/delete-todo/:id', deleteTodo);

export default router;
