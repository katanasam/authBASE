[Documentation] 
* Project : HomeHoner
* Autheur : Sam kan
* Date Début 1/07/2023

[Mise en place du système d'authentification]
- 1 Installation du server expresss 
-- npm i express dotenv mongoose bcryptjs jsonwebtoken cookie-parser nodemon

- Mise en place d'un server basic express
- Création d'un fichier .env pour la configuration

- Création du fichier serveur, et mise en écoute du serveur.
- Création du dossier "routes" et du fichier "userRoutes"
-- Utilisation de [express.Router()] 
-- Création d'un controller, contient toutes les fonctions liées au users "userController"
 