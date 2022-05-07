# DESIGN WEB - Création d'un CV à partir d'une page web

Dans le cadre du cours de design web, nous avons été chargé de créer un CV à partir d'une page web déjà existante. Avec pour volonté de me démarquer de mes camarades, je me suis dirigé vers une page assez atypique me permettant de mettre en avant mes précédentes études en plus de mes nouvelles compétences...





## Le choix de la page web

Voici donc la page web que j'ai décidé de recréer, la page web de Denise Chandler :
https://web.archive.org/web/20211007065841/https://denisechandler.com/ (Version archivée)

Et voici la version actuelle de son site :
https://denisechandler.com/ (Version actuelle)

Je joins également une vidéo montrant les interactions de la version archivée du site :

<video src="E:\Video\Interacivité site CV.mkv"></video>



Comme dit plus haut, je souhaitais recréer une page me permettant de mettre en avant aussi bien mes compétences de développeur front end que celles d'illustrateur. J'ai donc choisis cette page car, à mon sens, elle atteignait un bon équilibre entre ces deux aspects !





## Optimisations

### Les images

Au vu du nombre importants d'images sur ma page, il était important d'optimiser cette partie le plus possible. J'ai donc :

- redimensionné les fichiers sources aux bonnes dimensions ;
- utilisé les bons formats en fonctions de chaque image (SVG => JPEG  => PNG) ;
- utilisé un ***srcset*** pour changer le fichier source de l'illustration principale en fonction de la taille de l'écran ;
- passé toutes les images dans *ImageOptim* afin de réduire d'avantage le poids.

Grâce à tout cela, le poids total de mes images ne dépasse pas les 500 Ko ! Petit bémol cependant, je n'ai pas pu convertir l'illustration principale au format SVG à cause de plusieurs problèmes liés à Illustrator.



### Le slider JS

Afin de ne pas utiliser des ressources inutilement, j'ai créé un slider custom au lieu d'utiliser une libraire JS. Il est assez basique mais il a la mérite d'être très léger en plus d'être toujours fonctionnel sans javascript ! 





## Quelques tests

### GTMetrix

Voici un test effectué sur GTMetrix (avant la minification du javascipt) :
![Capture d’écran 2022-05-07 231811](C:\Users\nath3\Desktop\Capture d’écran 2022-05-07 231811.png)

Mis à part un problème due au temps d'apparition du canvas (visible entre 1.4 et 1.8 secondes) tout est dans le vert ! N'ayant malheureusement pas le temps d'optimiser cette partie, ce désagrément ne pourra pas être régler.



### Accessibilité

Au niveau de l'accessibilité, le site est :

- entièrement navigable au clavier (l'ouverture du menu est cependant contre-intuitive) ;
- adapté au condition de contraste diminué et aux différents daltonismes ;
- utilisable sans javascript ;
- adapté à différents supports grâce aux media queries.

J'ai aussi suivis plusieurs conseil donné sur le site anysurfer ! (Je n'ai pas été jusqu'à tenté de me donner un score d'accessibilité cependant)
