export interface ICard {
  id: string;
  name: string;
  cardImage: string;
  cardType: string;
  dp: string;
  playCost: string;
  cardLv: string;
  form: string;
  attribute: string;
  type: string;
  rarity: string;
  version: string;
  cardNumber: string;
  color: string;
  digivolveCost1: string;
  digivolveColor1?: string;
  digivolveLevel1?: string;
  digivolveCost2: string;
  digivolveColor2?: string;
  digivolveLevel2?: string;
  digivolveCost3?: string;
  digivolveColor3?: string;
  digivolveLevel3?: string;
  digiXros: string;
  specialDigivolve: string;
  burstDigivolve?: string;
  dnaDigivolve: string;
  effect: string;
  digivolveEffect: string;
  securityEffect: string;
  aceEffect?: string;
  notes: string;
  illustrator: string;
  restriction?: string;
  block: string[];
}
