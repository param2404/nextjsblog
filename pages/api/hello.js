export default (req, res) => {
    res.status(200).json({ text: 'Hello' })
}

// req is an instance of http.IncomingMessage
// res is an instance of http.ServerResponse