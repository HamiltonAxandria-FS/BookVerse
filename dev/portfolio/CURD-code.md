**CURD Code From Previous Class**

*I did a project in a previous class that also used books. This was the CURD code that I had in that project.
I will need to update it to make it for this project but I know it will be helpful.*

// GET ALL
router.get('/', protectedRoute, async (req, res) => {
    try {
        const books = await Book.find()
        res.json(books)
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
})

// GET ONE
router.get('/:id', getBook, async (req, res) => {
    res.json(res.book)
})

// POST CREATE
router.post('/', async (req, res) => {
    const book = new Book({
        name: req.body.name,
        author: req.body.author
    })
    try {
        const newBook = await book.save();
        res.status(201).json(newBook)
    } catch(error) {
        res.status(400).json({ message: error.message })
    }
})

// PATCH UPDATE
router.patch('/:id', getBook, async (req, res) => {
    if(req.body.name != null){
        res.book.name = req.body.name
    }
    if(req.body.author != null){
        res.book.author = req.body.author
    }
    try {
        const updatedBook = await res.book.save()
        res.json(updatedBook)
    } catch(error){
        res.status(400).json({message: error.message })
    }
})

// DELETE
router.delete('/:id', getBook, async(req, res) => {
    try {
        await res.book.remove();
        res.json({message: "Removed book"})
    } catch(error){
        res.status(500).json({ message: error.message })
    }
})
