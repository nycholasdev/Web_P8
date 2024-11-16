const { express, PORT, animes, createAnime } = require('./server');

const app = express();

app.listen (PORT, () =>{
    console.log(`servidor rodando na porta${PORT}`);
});


app.post('/anime', (req, res) => {
    const{id, name, genre, studio} = req.body
    createAnime(id, name, genre, studio);
    res.status(201).json({message: 'Anime criado com sucesso!', animes})
})

app.put('/anime/:id',  (req, res) => {
    const animeId = parseInt(req.params.id);
    const {name, genre, studio} = req.body;

    const anime = anime.find(a => a.id === animeId);

    if(!anime) {
        return res.status(404).json ({message: 'Anime não encontrado'})
    
    }
    if (name) anime.name = name;
    if (genre) anime.genre = genre;
    if (studio) anime.studio = studio;

    res.json({message: 'Anime atualizado com sucesso', anime})
})

app.delete('/anime/:id', (req, res) => {
    const animeId = parseInt(req.params.id)

    const animeDel = app.find(a => a.id === animeId)

    if(!animeDel){
        return res.status(404).json({message: 'Anime não encontrado'})

    }else{
        animeDel.splice(animeId, 1)
        return res.status(204).json({message: 'Anime deletado com sucesso!!',animes})
        
    }
})
app.get ('/anime', (res) =>{
    const allAnimes = animes.map(anime => anime.name)
    
    return res.json({ names: allAnimes});
})

app.get ('/anime/:id', (req, res) => {
    const animeId = parseInt(req.params.id);
    const oneAnime = animes.find(a => a.id === animeId)

    return res.status(200).json({message: 'Anime encontrado', oneAnime})

    
})
