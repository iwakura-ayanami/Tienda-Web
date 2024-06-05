import { pool } from "../db.js";

export const getCategories = async (req, res) => {
    try {
      const [rows] = await pool.query('SELECT * FROM category');
      res.status(200).json(rows);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al obtener categorías' });
    }
  };
  
  export const postCategories = async (req, res) => {
    try {
      const { id, name } = req.body;
      const [rows] = await pool.query('INSERT INTO category (id, name) VALUES (?, ?)', [id, name]);
      res.status(201).json(rows);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al crear categoría' });
    }
  };
  
  export const putCategories = async (req, res) => {
    try {
      const { id, name } = req.body;
      const [rows] = await pool.query('UPDATE category SET name = ? WHERE id = ?', [name, id]);
      res.status(200).json(rows);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al actualizar categoría' });
    }
  };
  
  export const deleteCategories = async (req, res) => {
    try {
      const { id } = req.params;
      const [rows] = await pool.query('DELETE FROM category WHERE id = ?', [id]);
      res.status(200).json(rows);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al eliminar categoría' });
    }
  };
  
  export const patchCategories = async (req, res) => {
    try {
      const { id } = req.params;
      const { name } = req.body;
      const [rows] = await pool.query('UPDATE category SET name = ? WHERE id = ?', [name, id]);
      res.status(200).json(rows);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al actualizar categoría' });
    }
  };