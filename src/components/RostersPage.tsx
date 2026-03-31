import { useState } from "react";
import { playerImgUrl } from "@/lib/playerHeadshots";

type RosterSlot = {
  pos: string;
  player: string;
  team: string;
  playerId: string;
};

type TeamRoster = {
  name: string;
  abbr: string;
  owner: string;
  roster: RosterSlot[];
};

const posColorMap: Record<string, string> = {
  QB: "bg-pos-qb",
  RB: "bg-pos-rb",
  WR: "bg-pos-wr",
  TE: "bg-pos-te",
  K: "bg-muted",
  DEF: "bg-muted",
  TAXI: "bg-secondary",
  IR: "bg-destructive/30",
};

function playerImgUrl(id: string) {
  return `https://www.mflscripts.com/playerImages_96x96/mfl_${id}.png`;
}

const rosters: TeamRoster[] = [
  {
    name: "Chiefs", abbr: "KC", owner: "Team 1",
    roster: [
      { pos: "QB", player: "Patrick Mahomes", team: "KC", playerId: "13116" },
      { pos: "RB", player: "Isiah Pacheco", team: "KC", playerId: "15353" },
      { pos: "RB", player: "De'Von Achane", team: "MIA", playerId: "15826" },
      { pos: "WR", player: "CeeDee Lamb", team: "DAL", playerId: "14803" },
      { pos: "WR", player: "Garrett Wilson", team: "NYJ", playerId: "15337" },
      { pos: "WR", player: "Drake London", team: "ATL", playerId: "15328" },
      { pos: "TE", player: "Travis Kelce", team: "KC", playerId: "10738" },
      { pos: "K", player: "Harrison Butker", team: "KC", playerId: "13193" },
      { pos: "TAXI", player: "Xavier Worthy", team: "KC", playerId: "16280" },
    ],
  },
  {
    name: "Bengals", abbr: "CIN", owner: "Team 2",
    roster: [
      { pos: "QB", player: "Joe Burrow", team: "CIN", playerId: "14835" },
      { pos: "RB", player: "Bijan Robinson", team: "ATL", playerId: "15818" },
      { pos: "RB", player: "Josh Jacobs", team: "GB", playerId: "13672" },
      { pos: "WR", player: "Ja'Marr Chase", team: "CIN", playerId: "15048" },
      { pos: "WR", player: "Tyreek Hill", team: "MIA", playerId: "12652" },
      { pos: "WR", player: "Malik Nabers", team: "NYG", playerId: "16274" },
      { pos: "TE", player: "Trey McBride", team: "AZ", playerId: "15376" },
      { pos: "K", player: "Evan McPherson", team: "CIN", playerId: "15068" },
      { pos: "TAXI", player: "Jaxon Smith-Njigba", team: "SEA", playerId: "15830" },
    ],
  },
  {
    name: "Dolphins", abbr: "MIA", owner: "Team 3",
    roster: [
      { pos: "QB", player: "C.J. Stroud", team: "HOU", playerId: "15804" },
      { pos: "RB", player: "Breece Hall", team: "NYJ", playerId: "15356" },
      { pos: "RB", player: "Kyren Williams", team: "LAR", playerId: "15370" },
      { pos: "WR", player: "Amon-Ra St. Brown", team: "DET", playerId: "15064" },
      { pos: "WR", player: "Puka Nacua", team: "LAR", playerId: "15862" },
      { pos: "WR", player: "Chris Olave", team: "NO", playerId: "15330" },
      { pos: "TE", player: "Sam LaPorta", team: "DET", playerId: "15836" },
      { pos: "K", player: "Jake Moody", team: "SF", playerId: "15870" },
      { pos: "TAXI", player: "Marvin Harrison Jr.", team: "AZ", playerId: "16272" },
    ],
  },
  {
    name: "Colts", abbr: "IND", owner: "Team 4",
    roster: [
      { pos: "QB", player: "Jalen Hurts", team: "PHI", playerId: "14836" },
      { pos: "RB", player: "Saquon Barkley", team: "PHI", playerId: "13604" },
      { pos: "RB", player: "Jonathan Taylor", team: "IND", playerId: "14777" },
      { pos: "WR", player: "Justin Jefferson", team: "MIN", playerId: "14834" },
      { pos: "WR", player: "Deebo Samuel", team: "SF", playerId: "13679" },
      { pos: "WR", player: "Terry McLaurin", team: "WAS", playerId: "13680" },
      { pos: "TE", player: "George Kittle", team: "SF", playerId: "13189" },
      { pos: "K", player: "Brandon Aubrey", team: "DAL", playerId: "16102" },
      { pos: "TAXI", player: "Jayden Daniels", team: "WAS", playerId: "16263" },
    ],
  },
  {
    name: "Ravens", abbr: "BAL", owner: "Team 5",
    roster: [
      { pos: "QB", player: "Lamar Jackson", team: "BAL", playerId: "13593" },
      { pos: "RB", player: "Derrick Henry", team: "BAL", playerId: "12171" },
      { pos: "RB", player: "Jahmyr Gibbs", team: "DET", playerId: "15822" },
      { pos: "WR", player: "Stefon Diggs", team: "HOU", playerId: "12171" },
      { pos: "WR", player: "Rashee Rice", team: "KC", playerId: "15844" },
      { pos: "WR", player: "Jaylen Waddle", team: "MIA", playerId: "15051" },
      { pos: "TE", player: "Mark Andrews", team: "BAL", playerId: "13635" },
      { pos: "K", player: "Justin Tucker", team: "BAL", playerId: "10683" },
      { pos: "TAXI", player: "Ladd McConkey", team: "LAC", playerId: "16276" },
    ],
  },
  {
    name: "Texans", abbr: "HOU", owner: "Team 6",
    roster: [
      { pos: "QB", player: "Josh Allen", team: "BUF", playerId: "12626" },
      { pos: "RB", player: "Travis Etienne", team: "JAX", playerId: "15042" },
      { pos: "RB", player: "James Cook", team: "BUF", playerId: "15361" },
      { pos: "WR", player: "Davante Adams", team: "NYJ", playerId: "11680" },
      { pos: "WR", player: "DK Metcalf", team: "SEA", playerId: "13645" },
      { pos: "WR", player: "George Pickens", team: "PIT", playerId: "15340" },
      { pos: "TE", player: "Dalton Kincaid", team: "BUF", playerId: "15847" },
      { pos: "K", player: "Tyler Bass", team: "BUF", playerId: "14860" },
      { pos: "TAXI", player: "Caleb Williams", team: "CHI", playerId: "16257" },
    ],
  },
  {
    name: "Saints", abbr: "NO", owner: "Team 7",
    roster: [
      { pos: "QB", player: "Dak Prescott", team: "DAL", playerId: "12199" },
      { pos: "RB", player: "Alvin Kamara", team: "NO", playerId: "13128" },
      { pos: "RB", player: "Rachaad White", team: "TB", playerId: "15363" },
      { pos: "WR", player: "Mike Evans", team: "TB", playerId: "11232" },
      { pos: "WR", player: "Brandon Aiyuk", team: "SF", playerId: "14811" },
      { pos: "WR", player: "DeVonta Smith", team: "PHI", playerId: "15047" },
      { pos: "TE", player: "Kyle Pitts", team: "ATL", playerId: "15055" },
      { pos: "K", player: "Cameron Dicker", team: "LAC", playerId: "15385" },
      { pos: "TAXI", player: "Rome Odunze", team: "CHI", playerId: "16271" },
    ],
  },
  {
    name: "49ers", abbr: "SF", owner: "Team 8",
    roster: [
      { pos: "QB", player: "Jordan Love", team: "GB", playerId: "14839" },
      { pos: "RB", player: "Christian McCaffrey", team: "SF", playerId: "13164" },
      { pos: "RB", player: "Aaron Jones", team: "MIN", playerId: "12386" },
      { pos: "WR", player: "A.J. Brown", team: "PHI", playerId: "13671" },
      { pos: "WR", player: "Nico Collins", team: "HOU", playerId: "15050" },
      { pos: "WR", player: "DJ Moore", team: "CHI", playerId: "13625" },
      { pos: "TE", player: "Evan Engram", team: "JAX", playerId: "13128" },
      { pos: "K", player: "Ka'imi Fairbairn", team: "HOU", playerId: "13195" },
      { pos: "TAXI", player: "Brock Bowers", team: "LV", playerId: "16289" },
    ],
  },
  {
    name: "Lions", abbr: "DET", owner: "Team 9",
    roster: [
      { pos: "QB", player: "Jayden Daniels", team: "WAS", playerId: "16263" },
      { pos: "RB", player: "Kenneth Walker III", team: "SEA", playerId: "15354" },
      { pos: "RB", player: "Zack Moss", team: "CIN", playerId: "14809" },
      { pos: "WR", player: "Tee Higgins", team: "CIN", playerId: "14806" },
      { pos: "WR", player: "Tank Dell", team: "HOU", playerId: "15850" },
      { pos: "WR", player: "Keenan Allen", team: "CHI", playerId: "11244" },
      { pos: "TE", player: "David Njoku", team: "CLE", playerId: "13137" },
      { pos: "K", player: "Younghoe Koo", team: "ATL", playerId: "13524" },
      { pos: "TAXI", player: "Luther Burden III", team: "—", playerId: "0" },
    ],
  },
  {
    name: "Cardinals", abbr: "AZ", owner: "Team 10",
    roster: [
      { pos: "QB", player: "Caleb Williams", team: "CHI", playerId: "16257" },
      { pos: "RB", player: "Rhamondre Stevenson", team: "NE", playerId: "15060" },
      { pos: "RB", player: "Tony Pollard", team: "TEN", playerId: "13670" },
      { pos: "WR", player: "Marvin Harrison Jr.", team: "AZ", playerId: "16272" },
      { pos: "WR", player: "Zay Flowers", team: "BAL", playerId: "15842" },
      { pos: "WR", player: "Courtland Sutton", team: "DEN", playerId: "13606" },
      { pos: "TE", player: "Jake Ferguson", team: "DAL", playerId: "15378" },
      { pos: "K", player: "Matt Gay", team: "IND", playerId: "13698" },
      { pos: "TAXI", player: "Tetairoa McMillan", team: "—", playerId: "0" },
    ],
  },
  {
    name: "Vikings", abbr: "MIN", owner: "Team 11",
    roster: [
      { pos: "QB", player: "Anthony Richardson", team: "IND", playerId: "15808" },
      { pos: "RB", player: "Joe Mixon", team: "HOU", playerId: "12625" },
      { pos: "RB", player: "David Montgomery", team: "DET", playerId: "13668" },
      { pos: "WR", player: "Tyreek Hill", team: "MIA", playerId: "12652" },
      { pos: "WR", player: "Chris Godwin", team: "TB", playerId: "13614" },
      { pos: "WR", player: "Calvin Ridley", team: "TEN", playerId: "13607" },
      { pos: "TE", player: "T.J. Hockenson", team: "MIN", playerId: "13657" },
      { pos: "K", player: "Jake Elliott", team: "PHI", playerId: "13192" },
      { pos: "TAXI", player: "Bo Nix", team: "DEN", playerId: "16260" },
    ],
  },
  {
    name: "Eagles", abbr: "PHI", owner: "Team 12",
    roster: [
      { pos: "QB", player: "Tua Tagovailoa", team: "MIA", playerId: "14802" },
      { pos: "RB", player: "Nick Chubb", team: "CLE", playerId: "13604" },
      { pos: "RB", player: "Najee Harris", team: "PIT", playerId: "15039" },
      { pos: "WR", player: "Michael Pittman Jr.", team: "IND", playerId: "14813" },
      { pos: "WR", player: "Diontae Johnson", team: "HOU", playerId: "13678" },
      { pos: "WR", player: "Jahan Dotson", team: "PHI", playerId: "15335" },
      { pos: "TE", player: "Pat Freiermuth", team: "PIT", playerId: "15059" },
      { pos: "K", player: "Jason Sanders", team: "MIA", playerId: "13530" },
      { pos: "TAXI", player: "Jonathon Brooks", team: "CAR", playerId: "16268" },
    ],
  },
];

export default function RostersPage() {
  const [expandedTeam, setExpandedTeam] = useState<string | null>(rosters[0].abbr);

  return (
    <div className="space-y-4">
      <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-card-foreground">
        Rosters
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {rosters.map((team) => {
          const isExpanded = expandedTeam === team.abbr;
          return (
            <div key={team.abbr} className="bg-card rounded-lg border border-border card-glow overflow-hidden">
              <button
                onClick={() => setExpandedTeam(isExpanded ? null : team.abbr)}
                className="w-full px-5 py-3.5 flex items-center justify-between hover:bg-secondary/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded bg-secondary flex items-center justify-center text-card-foreground text-[11px] font-bold font-heading shrink-0">
                    {team.abbr}
                  </span>
                  <div className="text-left">
                    <span className="block font-heading text-sm font-bold text-card-foreground">{team.name}</span>
                    <span className="block text-[11px] text-muted-foreground">{team.owner}</span>
                  </div>
                </div>
                <svg
                  className={`w-4 h-4 text-muted-foreground transition-transform ${isExpanded ? "rotate-180" : ""}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isExpanded && (
                <div>
                  {team.roster.map((slot, i) => (
                    <a
                      key={i}
                      href={slot.playerId !== "0" ? `https://www44.myfantasyleague.com/2026/player?L=57893&P=${slot.playerId}` : undefined}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2.5 hover:bg-secondary/40 transition-colors group"
                    >
                      <span className={`w-9 text-[10px] font-heading font-bold uppercase tracking-wider px-1.5 py-0.5 rounded text-center text-accent-foreground ${posColorMap[slot.pos] || "bg-muted"}`}>
                        {slot.pos}
                      </span>

                      {slot.playerId !== "0" ? (
                        <img
                          src={playerImgUrl(slot.playerId)}
                          alt={slot.player}
                          className="w-8 h-8 rounded-full object-cover bg-secondary border border-border ml-3 mr-2.5"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-8 h-8 rounded-full bg-secondary border border-border ml-3 mr-2.5 flex items-center justify-center text-[10px] text-muted-foreground font-heading">
                          ?
                        </div>
                      )}

                      <div className="flex-1 min-w-0">
                        <span className="block text-sm font-medium text-card-foreground group-hover:text-accent transition-colors truncate">
                          {slot.player}
                        </span>
                        <span className="block text-[11px] text-muted-foreground">{slot.team}</span>
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
