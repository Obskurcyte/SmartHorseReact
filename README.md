# Présentation de SmartHorse

Il s'agit d'une plateforme de vente en ligne de parts et de saillies d'étalons ainsi que de chevaux, dont le processus d'achat-vente s'effectue sur une blockchain. Pour l'instant, la solution n'est pas déployée sur le mainet d'Ethereum donc si vous voulez réaliser des tests, il faudra faire marcher le processus en local. 

## Installation de Ganache 

Ganache permet d'installer une blockchain privée en local sur votre ordinateur. Vous devez télécharger ce logiciel 

## Installation de Metamask

Metamask est un plugin qui s'installe directement sur votre navigateur web (utilisez de préférence chrome ou firefox). Une fois installez vous devrez cliquer sur "importer portefeuille à partir d'une seed" et recopier la seed présente sur Ganache afin de connecter Metamask à votre blockchain présente sur votre ordinateur. 

## Remix 

Remix est un IDE qui permet de coder des smarts contracts sur Ethereum (le fichier sur smart contract se trouve dans Cheval.sol). Pour interagir avec le contrat vous devrez d'abord le copier sur remix (en prenant l'url http et pas https) puis le compiler. Pour le déployer vous devrez sélectionner Web3Provider et rentrer l'url "http://127.0.0.1:7545". 
Remix sera alors connecté à Ganache. Ensuite, il ne restera plus qu'à executé la fonction ajouterCheval pour ajouter un cheval sur la blockchain et mettreEnVenteCheval pour le mettre en vente (il apparaitra alors dans les offres de vente ! Enfin, il faudra coller la nouvelle adresse du contrat dans la fonction: const contrat = new web3.eth.Contract(abi, '  ADRESSE', {}) qui est présente dans les fichiers MyHorses, HomePage et VenteChevaux. 



### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


## Note 

Les transactions prennent du temps et je n'ai pas encore pu ajouter de LoadingSpinner donc il faudra attendre un peu pour voir les transactions s'effectuer sur le site. Il est difficile d'expliquer clairement le fonctionnement de remix et des différentes connexion avec Metamask et Ganache à l'écrit, j'espère néanmoins que vous pourrez tester le site sur votre machine. Notez également que si vous lancez le site sans avoir au préalable déployé le contrat avec remix, vous ne pourrez pas voir les chevaux sur la plateforme (ça risque d'ailleurs de renvoyer une erreur). De plus, j'espère que vous excuserez le fait que le code ne soit pas clean, le site est en plein développement et je ne l'ai pas encore restructuré d'une bonne manière...
