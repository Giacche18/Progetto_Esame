## Informazioni Studente

Filippo Giacchetti
Matricola # 282558
Email # f.giacchetti1@campus.uniurb.it

# Progetto_Esame  

Progetto_Esame è un web-service  in [NodeJS](https://nodejs.org/) che serve a ricercare varie informazioni inerenti a partite di calcio. L'obbiettivo del servizio è quello di fornire una lista in JSON che fa riferimento a una serie di partite di varie competizioni.

## Architettura

L'architettura scelta per questo progetto consiste in un server scritto in NodeJS, in questo caso scelto perchè mi piaceva particolarmente e quindi ho pensato di approfondire questo linguaggio tramite questo progetto.

Il server necessità di alcune dipendenze:
- express

## Open data 

L'api usata è un open data scaricata al link (https://apilist.fun/api/football-soccer-video-api-by-scorebat).

## Documentazione

/
Questa risorsa, all'interno del servizio, viene interpretata come la richiesta di API fornite dal server, sotto forma di documento JSON.

/title/:nome
Questa risorsa, all'interno del servizio, viene interpretata come la richiesta di API riguardante solamente le partite richieste dall'utente all'interno dell'URL, sotto forma di documento JSON.

### Richiesta HTTP

``` http
Connection: keep-alive
Date: Mon, 23 Sep 2019 18:38:19 GMT
ETag: W/"1664-/kPu7wn7nN+d2fdj6rwwPDehx5k"
X-Powered-By: Express
``` 

### Risposta HTTP

``` http
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3
Accept-Encoding: gzip, deflate, br
Accept-Language: it-IT,it;q=0.9
Connection: keep-alive
Host: 127.0.0.1:4600
If-None-Match: W/"1664-/kPu7wn7nN+d2fdj6rwwPDehx5k"
Sec-Fetch-Mode: navigate
Sec-Fetch-Site: none
Sec-Fetch-User: ?1
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36
``` 