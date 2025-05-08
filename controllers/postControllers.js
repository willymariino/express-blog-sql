// vado a prendere la cartella con l'array di oggetti
const connection = require("../data/db.js")

// index restituisce l'elenco completo dei post identificati dall'Id
// non usa req.params perchè restituisce tutti i post, non un post specifico
function index(req, res) {
    const sql = 'SELECT * FROM posts';
    // eseguiamo la query!
    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: 'Database query failed' });
        res.json(results);
    });
}


// show: restituisce un sigolo post identificato dall'id
// usa req.params.id perchè voglio un post specifico
function show(req, res) {

    // recuperiamo l'id dall'url e trasormiamolo in numero
    const id = parseInt(req.params.id)




    // cerchiamo il post tramite id
    // post è l'oggetto che andiamo ad iterare all'interno dell'array e mi chiedo se quell'id è lo stesso che che sto andando a ricercare, id è una chiave di posts
    const post = posts.find(post => post.id === id)

    // facciamo il controllo
    if (!post) {
        // res.status(404)
        return res.status(404).json({
            error: "not found",
            message: "post non trovato"

        })


    }


    res.json(post)
}


// store: crea un nuovo post
// non usa req.params.id perchè stiamo creando un nuovo post, non modificando uno esistente

function store(req, res) {

    const newId = posts[posts.length - 1].id + 1 // prendo l'ultimo elemento dell'array, leggo il suo id, e aggiungo + 1, per dire che il nuovo oggetto, avrà l'id dell'ultimo oggetto +1

    // creo il nuovo oggetto
    const newPost = {
        id: newId,
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags


    }
    // pusho il nuovo post nell'array
    posts.push(newPost)

    // faccio un console log di verifica
    console.log(posts)

    // restituiamo lo status corretto con il nuovo oggetto appena creato
    res.status(201)
    res.json(newPost)
}

// update: sostituisce un post esistente
// usa req.params.id perchè devo sapere quale post modificare
function update(req, res) {

    // recuperiamo l'id dall'url e lo trasformiamo in numero
    const id = parseInt(req.params.id)

    // cerchiamo il post da modificare tramite id
    const post = posts.find(post => post.id === id)

    // se il post non viene trovato restituisco lo status elemento non trovato
    if (!post) {
        res.status(404)

        return res.json({
            error: "not found",
            message: "post non trovato"
        })
    }

    // aggiorniamo i post
    post.title = req.body.title
    post.content = req.body.content
    post.tags = req.body.tags

    // controlliamo l'array in console
    console.log(posts)

    // restituiamo il post appena aggiornato
    res.json(post)

    // aggiorniamo il post
}

function modify(req, res) {


    // recuperiamo l'id e lo trasformiamo in numero
    const id = parseInt(req.params.id)

    // cerchiamo il post tramite id
    const post = posts.find(post => post.id === id)

    // se il post non viene trovato restituisco lo staus 404

    if (!post) {
        res.status(404)

        return res.json({
            error: "not found",
            message: "post non trovato"

        })
    }

    // aggiorniamo i post
    if (req.body.title !== undefined) post.title = req.body.title
    if (req.body.content !== undefined) post.content = req.body.content
    if (req.body.tags !== undefined) post.tags = req.body.tags

    // controlliamo la modifica all'array in console
    console.log(posts)

    res.json(post)

}

// destroy: elimina un post esistente
// usa req.params.id perchè devo sapere quale post eliminare
function destroy(req, res) {
    // recuperiamo l'id dall' URL
    const { id } = req.params;
    //Eliminiamo la pizza dal menu
    connection.query('DELETE FROM posts WHERE id = ?', [id], (err) => {
        if (err) return res.status(500).json({ error: 'Failed to delete pizza' });
        res.sendStatus(204)
    });
}










module.exports = { index, show, store, update, modify, destroy }