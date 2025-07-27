import pool from "../db/index.js";

// Get all books
export const getBooks = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM books");
    res.status(200).json(result.rows);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

// Get book by title
export const getBookByTitle = async (req, res) => {
  const { title } = req.params;
  try {
    const result = await pool.query("SELECT * FROM books WHERE title=$1", [
      title,
    ]);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json(result.rows);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

// Add book
export const addBook = async (req, res) => {
  const { title, author, price } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO books(title,author,price) VALUES($1,$2,$3) RETURNING *",
      [title, author, price]
    );
    res
      .status(201)
      .json({ message: "Book added successfully", data: result.rows });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

// Delete book
export const deleteBook = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query(
      "DELETE FROM books WHERE id=$1 RETURNING *",
      [id]
    );
    res
      .status(200)
      .json({ message: "Book deleted successfully", data: result.rows });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

// Update book
export const updateBook = async (req, res) => {
  const { id } = req.params;
  const { title, author, price } = req.body;
  try {
    const result = await pool.query(
      "UPDATE books SET title=$1,author=$2,price=$3 WHERE id=$4 RETURNING *",
      [title, author, price, id]
    );
    res
      .status(200)
      .json({ message: "Book updated successfully", data: result.rows });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};
