function notFound(err, req, res, next) {
    res.status(404)
    res.json({
        error: "not found",  // qui invece non restituisco err, perchè il fatto che una rotta no esista, non costituisce un errore per express
        message: "pagina "
    })                      // anch qui non invoco next() perchè non voglio che il programma continui, ma segnali che la risorsa non è stata trovata
}

module.exports = notFound