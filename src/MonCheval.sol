pragma solidity 0.6.4;
pragma experimental ABIEncoderV2;

contract MonCheval {

  event Vente(uint256 id, address cedant, address cessionnaire, uint256 date);

  enum EtatCheval {
    EN_VENTE,
    ALIENE,
    EN_PASSATION
  }

  struct Cheval {
    uint256 id;
    address payable proprietaire;
    string nom;
    string image;
    uint256 prix;
    EtatCheval etat;
  }

  address private agentAgree;
  mapping(uint256 => Cheval) public chevaux;

  uint256[] public listeChevaux;

  constructor() public {
    agentAgree = msg.sender;
  }

  modifier estAgentAgree() {
    require(msg.sender == agentAgree, "Doit être un agent agréé");
    _;
  }

  modifier estProprietaire(uint256 _id) {
    require(chevaux[_id].proprietaire == msg.sender, "Doit être propriétaire");
    _;
  }

  function ajouterCheval(
    uint256 _id,
    address payable _proprietaire,
    string calldata _nom,
    string calldata _image
  ) external estAgentAgree{
    chevaux[_id] = Cheval(_id, _proprietaire, _nom, _image, 0, EtatCheval.ALIENE);
    listeChevaux.push(_id);
  }

  function chevalIndex(uint256 _index) external view returns (Cheval memory) {
    require(_index < listeChevaux.length, "Index inconnu");
    uint256 id = listeChevaux[_index];
    return chevaux[id];
  }

  function totalCheval() external view returns (uint256) {
    return listeChevaux.length;
  }

  function mettreChevalEnVente(
    uint256 _id,
    uint256 _prix
  ) external estProprietaire(_id) {
    chevaux[_id].prix = _prix;
    chevaux[_id].etat = EtatCheval.EN_VENTE;
  }

  function acheterCheval(
    uint256 _id
  ) payable external {
    require(chevaux[_id].etat == EtatCheval.EN_VENTE);
    require(chevaux[_id].prix > 0);
    require(chevaux[_id].prix == msg.value);

    chevaux[_id].proprietaire.transfer(msg.value);

    emit Vente(_id, chevaux[_id].proprietaire, msg.sender, now);

    changerProprietaire(_id, msg.sender);
  }

  function changerProprietaire(uint256 _id, address payable _cessionnaire) private {
    require(_cessionnaire != address(0x0));
    require(_id != 0);
    chevaux[_id].proprietaire = _cessionnaire;
    chevaux[_id].prix = 0;
    chevaux[_id].etat = EtatCheval.EN_PASSATION;
  }

  function declarerCheval(uint256 _id) external estProprietaire(_id) {
    require(chevaux[_id].etat == EtatCheval.EN_PASSATION);
    chevaux[_id].etat = EtatCheval.ALIENE;
  }


}
