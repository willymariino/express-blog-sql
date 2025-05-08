function errorsHandler(err, req, res, next) {
    res.status(500)
    res.json({
        error: err.message // voglio restituisca err per segnalare l'errore al client

    })                      // non invoco next() perchè non voglio che il programma continui, ma segnali l'errore invece
}

module.exports = errorsHandler