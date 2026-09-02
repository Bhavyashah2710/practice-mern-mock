# Test 3 — Product Inventory Manager

**Time:** 3 hours

> Direct practical task. No questions to answer. Complete the application, test it, commit it on a feature branch, push it, and create a PR to `main`.

## Task

Build a **Product Inventory Manager** using HTML, CSS, JavaScript, and Node.js.

### 1. Frontend — HTML & CSS

Create a product-management page with:

- Header/navigation
- Product form: product ID, name, category, price, quantity
- Search input
- Category filter
- Product table
- Inventory summary area

Use Flexbox and the styling concepts covered in class. Make the layout usable on smaller screens.

### 2. Frontend — JavaScript

Implement:

- Load products from JSON data.
- Dynamically render the product table.
- Search by product name.
- Filter by category.
- Add a product through the form.
- Validate product ID, name, price, and quantity.
- Delete a product.
- Calculate total number of products.
- Calculate total inventory value using `price * quantity`.
- Highlight products whose quantity is below a chosen low-stock threshold.
- Keep the displayed data synchronized after every operation.

### 3. Node.js

Using `fs`, JSON, modules, `require()`, and `module.exports`:

- Read and parse the product JSON file.
- Create a separate module containing reusable product functions.
- Import and use the functions from the main file.
- Add a product.
- Update a product quantity.
- Save changes to the JSON file.
- Print inventory statistics in the terminal.

### 4. Git/GitHub

Use a feature branch, create meaningful commits, push the branch, and open a PR to `main`.

## Completion Checklist

- [ ] Product UI works
- [ ] CSS/layout works
- [ ] Dynamic rendering works
- [ ] Search/filter works
- [ ] Add/delete works
- [ ] Validation works
- [ ] Inventory calculations work
- [ ] Low-stock display works
- [ ] Node.js file operations work
- [ ] Separate module works
- [ ] JSON updates correctly
- [ ] Git workflow completed
- [ ] PR opened

**Do not modify this test document. Do not ask for or provide solutions during the test.**
