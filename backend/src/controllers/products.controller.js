import { pool } from "../db.js";

export const getProducts = async (req, res) => {
    try {
      const [rows] = await pool.query('SELECT * FROM product');
      res.status(200).json(rows);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al obtener productos' });
    }
  };
  
  export const postProducts = async (req, res) => {
    try {
      const { id, name } = req.body;
      const [rows] = await pool.query('INSERT INTO product (id, name) VALUES (?, ?)', [id, name]);
      res.status(201).json(rows);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al crear productos' });
    }
  };
  
  export const putProducts = async (req, res) => {
    try {
      const { id, name } = req.body;
      const [rows] = await pool.query('UPDATE product SET name = ? WHERE id = ?', [name, id]);
      res.status(200).json(rows);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al actualizar productos' });
    }
  };
  
  export const deleteProducts = async (req, res) => {
    try {
      const { id } = req.params;
      const [rows] = await pool.query('DELETE FROM product WHERE id = ?', [id]);
      res.status(200).json(rows);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al eliminar productos' });
    }
  };
  
  export const patchProducts = async (req, res) => {
    try {
      const { id } = req.params;
      const { name } = req.body;
      const [rows] = await pool.query('UPDATE product SET name = ? WHERE id = ?', [name, id]);
      res.status(200).json(rows);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al actualizar productos' });
    }
  };