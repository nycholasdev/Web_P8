const express = require('express');
const PORT = 3000;

const animes = [
    {
        id: 1,
        name: 'Dandadan',
        genre: 'Action, Romance',
        studio: 'Science Saru'
    },
    {
        id: 2,
        name: 'Chainsaw Man',
        genre: 'Action, Horror',
        studio: 'MAPPA'
    },
    {
        id: 3,
        name: 'Neon Genesis Evangelion',
        genre: 'Mecha, Action, Psychological Horror', 
        studio: 'Gainax'
    }
];


function createAnime(id, name, genre, studio){
    const newAnime = {id, name, genre, studio};
    animes.push(newAnime);
}
module.exports = {express, PORT, animes, createAnime};

