# Présentation de SmartHorse

Il s'agit d'une plateforme de vente en ligne de parts et de saillies d'étalons ainsi que de chevaux, dont le processus d'achat-vente s'effectue sur une blockchain. Pour l'instant, la solution n'est pas déployée sur le mainet d'Ethereum donc si vous voulez réaliser des tests, il faudra faire marcher le processus en local. 

## Installation de Ganache 

Ganache permet d'installer une blockchain privée en local sur votre ordinateur. Vous devez télécharger ce logiciel 

## Installation de Metamask

Metamask est un plugin qui s'installe directement sur votre navigateur web (utilisez de préférence chrome ou firefox). Une fois installez vous devrez cliquer sur "importer portefeuille à partir d'une seed" et recopier la seed présente sur Ganache afin de connecter Metamask à votre blockchain présente sur votre ordinateur. 

## Remix 

Remix est un IDE qui permet de coder des smarts contracts sur Ethereum (le fichier sur smart contract se trouve dans Cheval.sol). Pour interagir avec le contrat vous devrez d'abord le copier sur remix (en prenant l'url http et pas https) puis le compiler. Pour le déployer vous devrez sélectionner Web3Provider et rentrer l'url "http://127.0.0.1:7545". 
Remix sera alors connecté à Ganache. Ensuite, il ne restera plus qu'à executé la fonction ajouterCheval pour ajouter un cheval sur la blockchain et mettreEnVenteCheval pour le mettre en vente (il apparaitra alors dans les offres de vente ! 



### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


## Note 

Les transactions prennent du temps et je n'ai pas encore pu ajouter de LoadingSpinner donc il faudra attendre un peu pour voir les transactions s'effectuer sur le site
