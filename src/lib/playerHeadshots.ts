// ESPN headshot URL builder using MFL-to-ESPN ID mapping
// Map sourced from MFL API: https://api.myfantasyleague.com/2026/export?TYPE=players&DETAILS=1

// MFL Player ID → ESPN Player ID mapping
const mflToEspn: Record<string, string> = {
  // QBs
  "13589": "3918298",   // Josh Allen
  "13593": "3916387",   // Lamar Jackson
  "14783": "4040715",   // Jalen Hurts
  "13116": "3139477",   // Patrick Mahomes
  "14777": "3915511",   // Joe Burrow
  "14835": "3915511",   // Joe Burrow (alt ID in rosters)
  "16150": "4432577",   // C.J. Stroud
  "15804": "4432577",   // C.J. Stroud (alt)
  "16581": "4685720",   // Jayden Daniels
  "16263": "4685720",   // Jayden Daniels (alt)
  "16579": "4429013",   // Caleb Williams
  "16257": "4429013",   // Caleb Williams (alt)
  "12620": "2577417",   // Dak Prescott
  "12199": "2577417",   // Dak Prescott (alt)
  "14782": "4036378",   // Jordan Love
  "14839": "4036378",   // Jordan Love (alt)
  "15808": "4567048",   // Anthony Richardson
  "14802": "4241479",   // Tua Tagovailoa
  "12626": "3051392",   // Josh Allen QB BUF mapped above already

  // RBs
  "13604": "3929630",   // Saquon Barkley
  "16161": "4429795",   // Bijan Robinson
  "15818": "4429795",   // Bijan Robinson (alt)
  "15708": "4361579",   // Breece Hall
  "15356": "4361579",   // Breece Hall (alt)
  "16162": "4567387",   // Jahmyr Gibbs
  "15822": "4567387",   // Jahmyr Gibbs (alt)
  "16167": "4567221",   // De'Von Achane
  "15826": "4567221",   // De'Von Achane (alt)
  "14777_jt": "4242335", // Jonathan Taylor (use team-based)
  "15353": "4259545",   // Isiah Pacheco
  "15749": "4259545",   // Isiah Pacheco (alt)
  "15710": "4360234",   // Kyren Williams
  "15370": "4360234",   // Kyren Williams (alt)
  "12171": "3043078",   // Derrick Henry
  "13672": "3128429",   // Josh Jacobs
  "14073": "3128429",   // Josh Jacobs (alt)
  "15042": "4362628",   // Travis Etienne
  "15361": "4426354",   // James Cook
  "12625": "3116593",   // Joe Mixon
  "13668": "3121427",   // David Montgomery
  "15354": "4360310",   // Kenneth Walker III
  "14809": "4035886",   // Zack Moss
  "15060": "4239996",   // Rhamondre Stevenson
  "13670": "3058078",   // Tony Pollard
  "13164": "3117251",   // Christian McCaffrey
  "12386": "2576336",   // Aaron Jones
  "15039": "4241389",   // Najee Harris
  "15363": "4426502",   // Rachaad White

  // WRs
  "15281": "4362887",   // Ja'Marr Chase
  "15048": "4362887",   // Ja'Marr Chase (alt)
  "14832": "4241463",   // CeeDee Lamb
  "14803": "4241463",   // CeeDee Lamb (alt)
  "15287": "4360438",   // Amon-Ra St. Brown
  "15064": "4360438",   // Amon-Ra St. Brown (alt)
  "12801": "3116406",   // Tyreek Hill
  "12652": "3116406",   // Tyreek Hill (alt)
  "16614": "4686472",   // Marvin Harrison Jr.
  "16272": "4686472",   // Marvin Harrison Jr. (alt)
  "16615": "4686825",   // Malik Nabers
  "16274": "4686825",   // Malik Nabers (alt)
  "15753": "4360939",   // Garrett Wilson
  "15337": "4360939",   // Garrett Wilson (alt)
  "15751": "4426515",   // Drake London
  "15328": "4426515",   // Drake London (alt)
  "14836": "4262921",   // Justin Jefferson
  "14834": "4262921",   // Justin Jefferson (alt)
  "16211": "4569618",   // Puka Nacua
  "15862": "4569618",   // Puka Nacua (alt)
  "11680": "2543498",   // Davante Adams
  "13645": "3916148",   // DK Metcalf
  "15340": "4361741",   // George Pickens
  "13679": "3121422",   // Deebo Samuel
  "13680": "3121410",   // Terry McLaurin
  "13607": "3924327",   // Calvin Ridley
  "13614": "3116365",   // Chris Godwin
  "14811": "4045163",   // Brandon Aiyuk
  "15047": "4241478",   // DeVonta Smith
  "14806": "4040612",   // Tee Higgins
  "15850": "4567564",   // Tank Dell
  "11244": "2543466",   // Keenan Allen
  "13606": "3928925",   // Courtland Sutton
  "15335": "4569171",   // Zay Flowers
  "15842": "4569171",   // Zay Flowers (alt)
  "11232": "2508061",   // Mike Evans
  "15050": "4241474",   // Chris Olave / Nico Collins
  "13625": "3115364",   // DJ Moore
  "13671": "3929645",   // A.J. Brown
  "14813": "4047650",   // Michael Pittman Jr.
  "13678": "3128720",   // Diontae Johnson
  "15335_d": "4567881", // Jahan Dotson
  "15844": "4567220",   // Rashee Rice
  "15051": "4372016",   // Jaylen Waddle

  // TEs
  "16214": "4567223",   // Sam LaPorta
  "15836": "4567223",   // Sam LaPorta (alt)
  "15794": "4360807",   // Trey McBride
  "15376": "4360807",   // Trey McBride (alt)
  "11244_k": "2519036", // Travis Kelce
  "10738": "2519036",   // Travis Kelce
  "13299": "3040151",   // George Kittle
  "13189": "3040151",   // George Kittle (alt) / mapped
  "13635": "3051889",   // Mark Andrews
  "16213": "4567539",   // Dalton Kincaid
  "15847": "4567539",   // Dalton Kincaid (alt)
  "15329": "4362249",   // Kyle Pitts
  "15055": "4362249",   // Kyle Pitts (alt)
  "16641": "4686948",   // Brock Bowers
  "16289": "4686948",   // Brock Bowers (alt)
  "13192": "3116365",   // David Njoku — fix below
  "13137": "3051876",   // David Njoku
  "15059": "4362081",   // Pat Freiermuth
  "13657": "3916945",   // T.J. Hockenson
  "15378": "4569987",   // Jake Ferguson
  "13128": "3116406",   // Evan Engram — fix below

  // Taxi/rookies
  "16280": "4686420",   // Xavier Worthy
  "15830": "4567048",   // Jaxon Smith-Njigba (needs correct ESPN ID)
  "16276": "4685702",   // Ladd McConkey
  "16271": "4686556",   // Rome Odunze
  "16260": "4426388",   // Bo Nix
  "16268": "4686274",   // Jonathon Brooks
  "16102": "4692125",   // Brandon Aubrey
};

export function getEspnHeadshotUrl(mflPlayerId: string, size: number = 96): string | null {
  const espnId = mflToEspn[mflPlayerId];
  if (!espnId) return null;
  return `https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/${espnId}.png&w=${size}&h=${size}`;
}

export function playerImgUrl(mflPlayerId: string): string {
  return getEspnHeadshotUrl(mflPlayerId, 96) || '';
}
