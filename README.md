# Boilerplate El Tigre

Le boilerplate utilisé pour démarrer un projet WP El Tigre.

# Latest

- Formulaire de contact
- Formulaire support intégré au Dashboard
- Sanitize filename (Suppression des accents à l'upload);
## Installation

Cloner le repository

```
git clone git@bitbucket.org:el-tigre-dev/wp-eltigre-2021.git NOM_PROJET
```

Entrer dans ce nouveau dossier

```
cd NOM_PROJET
```

Installer les éléments

```
composer install
```

Créer une base de données pour le projet

```
mysql -uroot -p -e "create database NOM_PROJET"
```

Créer un fichier .env à la racine, en utilisant le .env.example comme modèle, et le remplir avec les informations du site. Le paramètre WP_HOME doit être l'url du site, et doit donc commencer par "http://..."

```
cp .env.example .env

nano .env
```

Se rendre dans le dossier du starter theme El Tigre

```
cd content/themes/eltigre
```

Installer les packages NPM

```
npm install
```

## Usage

Pour lancer webpack en mode dev : 

```
npm start
```

Pour build le site en version prod : 

```
npm run build
```