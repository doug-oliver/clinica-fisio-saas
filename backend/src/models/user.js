const pool = require('../config/db');
const bcrypt = require('bcryptjs');

class User {
  static async findByEmail(email) {
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    return result.rows[0];
  }

  static async create({ name, email, password, role }) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await pool.query(
      'INSERT INTO users (name, email, password, role) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, email, hashedPassword, role]
    );
    return result.rows[0];
  }

  static async findAll() {
    const result = await pool.query('SELECT * FROM users');
    return result.rows;
  }

  static async update(id, { name, email, password, role }) {
    const hashedPassword = password ? await bcrypt.hash(password, 10) : undefined;
    const result = await pool.query(
      'UPDATE users SET name = $1, email = $2, password = COALESCE($3, password), role = $4 WHERE id = $5 RETURNING *',
      [name, email, hashedPassword, role, id]
    );
    return result.rows[0];
  }

  static async delete(id) {
    await pool.query('DELETE FROM users WHERE id = $1', [id]);
  }
}

module.exports = User;