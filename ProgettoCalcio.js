/* Librerie */
const express = require ('express');
const request = require ('request');

/* Inizializzazione delle librerie */
const SerieA = require ('./SerieA.json');
const app = express();

/* Inizializzazione della Porta */
const PORTA = process.env.port || 4600;