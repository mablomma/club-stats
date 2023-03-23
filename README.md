# Werkwijze Club Brugge Player Stats app

## Stap 1: Data inspectie en cleaning

•	Gebruik van Jupyter notebook voor cleaning (Python 3)
•	Inlezen van de aparte ‘match’-json-files en vervolgens samenvoegen tot 1 json-array, ter voorbereiding van het uploaden naar een mongodb database (collection ‘matches’).
•	Inlezen van de aparte ‘info-json-files en vervolgens samenvoegen tot 1 json-array, ter voorbereiding van het uploaden naar een mongodb database (collection ‘stats’).
•	De attributen onder home_team en away_team heb ik aangepast: de prefixen van de attributen (home_team_name, home_team_id, …) heb ik verwijderd zodat het object onder home_team en away_team eenzelfde layout krijgt van type Team.
•	Oplijsten van alle unieke teams en unieke spelers om vervolgens voor deze teams/spelers clubiconen en afbeeldingen te verzamelen.
  


## Stap 2: Backend met graphql

•	Maken van MongoDB model voor zowel de ‘matches’ collectie als de ‘stats’ collection, gebruik makende van package mongoose.
•	Opzetten van een apollo graphql server
o	Aanmaken nodige typedefinitions
o	Aanmaken nodige resolvers
•	Bij het ophalen van een match object (by ID), kan de frontend het veld player_stats toevoegen. Enkel indien de query dit veld bevat wordt niet alleen de ‘matches’ collectie gelezen met mongoose maar ook de ‘stats’ collectie. Alle stat records die betrekking hebben op de opgevraagde match worden dan toegevoegd in een array onder het veld ‘player_stats’.


 


## Stap 3: Design in Adobe XD

•	Design heb ik gemaakt in Adobe XD. Heb verschillende designs herleid to finaal design. (Initieel design was minder geschikt voor brede schermen en groter aantal matchen).
 

## Stap 4: Frontend met React

•	Creatie van volgende componenten
o	Header met branding
o	Footer
o	Matches component: deze component bevat een oplijsting van alle matchen van Club Brugge van het seizoen 2021-2022. Elke match heeft zijn eigen kaart:
	MatchCard component: deze component geeft voor elke match de datum, teams, score en snellink naar stats weer in een vaste layout.
o	Match component: deze component bevat de details van een bepaalde match. Bovenop de data die we ook al terugvinden in de MatchCard component zijn er nog enkel details toegevoegd: stadion, scheidsrechter en spelerstatistieken. Voor deze statistieken heb ik een aparte component aangemaakt:
	PlayerStats component: deze component bevat een tabel met verschillende statistieken voor elke speler. Ik heb een PieChart component gemaakt om de data visueel te ondersteunen. 
•	Voor routing heb ik gebruik gemaakt van de package ‘react-router-dom’. Ik heb een scrollToTop component toegevoegd zodat bij het veranderen van route de scroll positie telkens hersteld wordt.
•	Voor het inlezen van de graphql data heb ik opnieuw gebruik gemaakt van Apollo.
![image](https://user-images.githubusercontent.com/54857444/227341601-d1c30553-bd5f-424f-bd37-cdc2a1a934f5.png)
