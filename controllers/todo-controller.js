import mongoose from 'mongoose';
import todoModel from '../models/todo-model.js';
const addTodo = async function (req, res, next) {
    try {
        const { text } = req.body;
        if (!text || text === '') {
            return res.status(401).json({ success: false, message: 'Bad credentials' });
        }
        const todo = await todoModel.create({ text });
        res.status(201).json({ success: true, todo, message: 'Todo added successfully' });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Something went wrong' });
    }
};
const updateTodo = async function (req, res, next) {
    try {
        const { id } = req.params;
        const { text } = req.body;
        if (id === '' || text === '') {
            return res.status(401).json({ success: false, message: 'Invalid todo ID' });
        }
        const todo = await todoModel.findByIdAndUpdate(id, { text }, { new: true });
        res.status(201).json({ success: true, todo, message: 'Todo updated successfully' });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Something went wrong' });
    }
};

const deleteTodo = async function (req, res, next) {
    try {
        const { id } = req.params;
        if (id === '') {
            return res.status(401).json({ success: false, message: 'Invalid todo ID' });
        }
        const todo = todoModel.findByIdAndDelete(id);
        res.status(200).json({ success: true, todo, message: 'Todo deleted successfully' });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Something went wrong' });
    }
};

const getTodo = async function (req, res, next) {
    try {
        const { id } = req.params;
        if (id === '') {
            return res.status(401).json({ success: false, message: 'Invalid todo ID' });
        }
        const todo = await todoModel.findById(id);
        res.status(200).json({ success: true, todo, message: 'Todo fetched successfully' });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Something went wrong' });
    }
};

const getTodos = async function (req, res, next) {
    try {
        const todos = await todoModel.find({});
        res.status(200).json({ success: true, todos, message: 'Todos successfully' });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Something went wrong' });
    }
};

export { addTodo, updateTodo, deleteTodo, getTodo, getTodos };
