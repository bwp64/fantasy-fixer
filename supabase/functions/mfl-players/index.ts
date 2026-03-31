const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const MFL_API = 'https://api.myfantasyleague.com';
const LEAGUE_ID = '38734';
const YEAR = '2026';

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const url = new URL(req.url);
    const playerIds = url.searchParams.get('ids'); // comma-separated MFL player IDs
    const type = url.searchParams.get('type') || 'players'; // 'players' or 'rosters'

    if (type === 'rosters') {
      const res = await fetch(
        `${MFL_API}/${YEAR}/export?TYPE=rosters&L=${LEAGUE_ID}&JSON=1`
      );
      const data = await res.json();
      return new Response(JSON.stringify(data), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Fetch player details (with ESPN IDs for headshots)
    const playersParam = playerIds ? `&PLAYERS=${playerIds}` : '';
    const res = await fetch(
      `${MFL_API}/${YEAR}/export?TYPE=players&DETAILS=1${playersParam}&JSON=1`
    );
    const data = await res.json();

    // Normalize to array
    const rawPlayers = data?.players?.player;
    const playerList = Array.isArray(rawPlayers) ? rawPlayers : rawPlayers ? [rawPlayers] : [];

    // Map to clean response with headshot URLs
    const players = playerList.map((p: Record<string, string>) => ({
      id: p.id,
      name: p.name, // "LastName, FirstName"
      position: p.position,
      team: p.team,
      jersey: p.jersey,
      espnId: p.espn_id,
      headshotUrl: p.espn_id
        ? `https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/${p.espn_id}.png&w=96&h=96`
        : null,
    }));

    return new Response(JSON.stringify({ players }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('MFL API error:', error);
    const msg = error instanceof Error ? error.message : 'Unknown error';
    return new Response(JSON.stringify({ error: msg }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
