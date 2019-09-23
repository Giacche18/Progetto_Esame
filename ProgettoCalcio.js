/* Librerie */
const express = require ('express');
const request = require ('request');

/* Inizializzazione delle librerie */
const SerieA = require ('./SerieA.json');
const app = express();

/* Inizializzazione della Porta */
const PORTA = process.env.port || 4600;

/* Funzione per visualizzare sul servizio Web tutte le informazioni messe a disposizione dall'API utilizzata */
app.get('/' , (req, res) => {

	res.send(SerieA);
	res.end();
	});
	
/* Funzione per visualizzare sul servizio Web le informazioni messe a disposizione dall'API in base al nome della squadra di serie che gli passi nell'URL */
app.get('/title/:nome', (req, res) => {
	let nome = decodeURIComponent(req.params.nome);
	let risposta = [];
	for(let i = 0; i < SerieA.length; i++)
		if(SerieA[i]['title'].toLowerCase().includes(nome.toLocaleString()))
			risposta.push(SerieA[i]);
	
	res.send(risposta);
	res.end();
	});

/* Funzione per far sapere all'utente la porta utilizzata e per far capire che tutto sta funzionando */
const listener = app.listen(PORTA, () => {
	console.log('La tua applicazione sta ascoltando sulla porta' + listener.address().port);
 });