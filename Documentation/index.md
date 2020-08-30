##À propos

Biliothèque est un projet d'API rest réalisé dans le cadre de la licence professionnel CODESI.

##Généralités
* Toutes les requêtes sont construites comme suivant:

	VERBE /api/[ressource]/[identifiant de ressource]

* Les paramètres (en dehors de l'identifiant de la ressource qui se trouve directement dans l'adresse) sont passés dans le body de la requête

##Installation
* Prérequis: pour installer cette API vous devez préalablement disposé d'un moteur de base de données ainsi qu'une version récente de nodeJS
* Executez le script de création de base de données (database.sql) fourni dans votre moteur de bases de données
* (optionnel) Executez le script d'insértion de jeu d'essai dans votre base de données
* Executez la commande `npm install` dans le répertoire Application pour installer les dépendances.
* Lancer le serveur en executant la commande `node serveur.js`

##Authentification
Cette API utilise le standart [JWT](https://jwt.io/introduction/) pour assurer l'authentification des utilisateurs.
Une fois le jeton crée celui-ci doit être ajouté à l'entête HTTP Authorization avec le préfix Bearer comme suit par exemple:

	Authorization: Bearer eyJhbGciOiJIUz9aH3IsInR5cCI6IkpPRMD

## Droits
Toutes les requêtes necessitent d'[être authentifié](auth.md). Toutes les requêtes autre que GET nécessitent les droits d'administration.

## Auteurs
* ###Obtenir tout les auteurs `GET /api/authors`

Exemple de résultat:

	[
		{
			"auteurId":1,
			"auteurNom":"JRR Tolkien"
		},
		{
			"auteurId":2,
			"auteurNom":"Victor Hugo"
		}
	]

* ### Obtenir un auteur `GET /api/authors/{identifiant author}`
Exemple de résultat:

		{
			"auteurId":1,
			"auteurNom":"JRR Tolkien"
		}

* ### Créer un nouvel auteur `POST /api/authors`
Exemple de paramètre *author*:

		{
			"auteurNom":"JRR Tolkien"
		}

Exemple de résultat:

		{
			"auteurId":1
		}

* ### Modifier un auteur existant `PUT /api/authors/{identifiant author}`
Exemple de paramètre *author*:

		{
			"auteurNom":"JRR Tolkien"
		}

* ### Supprimer un auteur `PUT /api/authors/{identifiant author}`
**Attention il s'agit d'une action irréversible, de plus tout les livres écrits par cet auteur seront eux aussi supprimés**


## Livres
* ### Obtenir tout les livres `GET /api/books`

Exemple de résultat:

	[
	  {
		    "livreId": 1,
		    "livreISBN": "p9g58e437856",
		    "livreTitre": "Le seigneur des anneaux",
		    "livreAuteur": 1
	  },
	  {
		    "livreId": 2,
		    "livreISBN": "p9g58e437855",
		    "livreTitre": "Le silmarillon",
		    "livreAuteur": 1
	  },
	  {
		    "livreId": 3,
		    "livreISBN": "p9g58e437850",
		    "livreTitre": "Les misérables",
		    "livreAuteur": 2
	  },
	  {
		    "livreId": 4,
		    "livreISBN": "p9g58e437852",
		    "livreTitre": "Notre dame de Paris",
		    "livreAuteur": 2
	  }
	]

* ### Obtenir un livre `GET /api/books/{isbn livre}`

Exemple de résultat:

	{
		"livreId": 1,
		"livreISBN": "p9g58e437856",
		"livreTitre": "Le seigneur des anneaux",
		"livreAuteur": 1
	}

* ### Obtenir les livres d'un auteur `GET /api/books/author/{identifiant author}`
* ### Créer un nouvel livre `POST /api/books`

Exemple de paramètre *book*:

	{
		"livreISBN": "p9g58e437856",
		"livreTitre": "Le seigneur des anneaux",
		"livreAuteur": 1
	}

Exemple de résultat:

		{
			"livreId": 1
		}

###* Modifier un livre existant `PUT /api/books/{identifiant author}`
Exemple de paramètre *book*:

		{
			"livreTitre": "Le seigneur des anneaux",
		}

###* Supprimer un livre `PUT /api/authors/{isbn}`
**Attention il s'agit d'une action irréversible**