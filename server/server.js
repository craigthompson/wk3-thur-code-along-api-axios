import express from 'express'
import ViteExpress from 'vite-express'

const app = express()
ViteExpress.config({ printViteDevServerHost: true });

app.use(express.urlencoded({extended: false}))
app.use(express.json())

// ENDPOINTS GO HERE
app.get('/', (req, res) => {
    res.sendFile("src/index.html", {root: '.'})
})


ViteExpress.listen(app, 2319, () => console.log('Server running at http://localhost:2319'))