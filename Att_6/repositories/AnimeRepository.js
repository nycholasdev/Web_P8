
const Anime = require('../models/Anime');

class AnimeRepository {
    constructor() {
        this.animes = [
            new Anime(1, 'Naruto', 'Shounen', 'Pierrot'),
            new Anime(2, 'Attack on Titan', 'Action', 'MAPPA'),
            new Anime(3, 'One Piece', 'Adventure', 'Toei Animation')
        ];
    }

    findAll() {
        return this.animes;
    }

    findById(id) {
        return this.animes.find(anime => anime.id === id);
    }

    create(id, name, genre, studio) {
        const newAnime = new Anime(id, name, genre, studio);
        this.animes.push(newAnime);
        return newAnime;
    }

    update(id, data) {
        const anime = this.findById(id);
        if (!anime) return null;

        anime.name = data.name || anime.name;
        anime.genre = data.genre || anime.genre;
        anime.studio = data.studio || anime.studio;

        return anime;
    }

    delete(id) {
        const index = this.animes.findIndex(anime => anime.id === id);
        if (index === -1) return null;

        return this.animes.splice(index, 1)[0];
    }
}

module.exports = new AnimeRepository();
