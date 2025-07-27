import pool from "../db/index.js";
export const registerUser = async (req, res) => {
  const { name, email } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO users(name,email) VALUES($1,$2) RETURNING *",
      [name, email]
    );
    res.status(201).json({ message: "User registered successfully",data:result.rows });
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: "Registration failed",detail:error.message });
  }
};
