

function GameInfo() 
{

    // .....

    this.m_candidates = {};

    // Leer los candidatos

    this.m_candidates = { 'Vero': null, 
                          'Alan': null,
                          'Keiko': null };

    for ( key in this.m_candidates )
    {
        this.m_candidates[key] = new Candidate( key );
        this.m_candidates[key].initFromData();
    }



}

GameInfo.prototype.getCandidate = function( id )
{
    return this.m_candidates[id];
}


objGameInfo.getCandidate( 'Vero' ).setStats( { 'coincidencias':2, 'fallos':3 } );


function CandidateBasicInfo()
{
    this.edad = 35;
    this.name = "VeroMendoza";
    this.stats = {};
};

function CandidateProposalsInfo()
{
    this.education = [];
    this.technology = [];
}

function Candidate( p_id )
{
    this.id = p_id;

    this.infoBasic = new CandidateBasicInfo();
    this.infoProposals = new CandidateProposalsInfo();
}



function Candidate()
{
    this.id = "Vero";

    this.edad = 35;

    this.name = "Veronica Mendoza";

    this.stats = { 'coincidencias': 1, 'fallos': 2 };

    this.proposals = { 'education': "fiasofnasiofnas" };
}

Candidate.prototype.initFromData = function( p_data )
{
    this.edad = p_data['edad'];
    this.name = p_data['name'];
    this.stats['coincidencias'] = p_data['coincidencias'];
    this.stats['coincidencias'] = p_data['coincidencias'];

};

Candidate.prototype.setStats = function( stats )
{
    this.stats['coincidencias'] = stats['coincidencias'];
    this.stats['fallos'] = stats['fallos'];
};

objCandidate = new Candidate();

objCandidate.initFromData();

/*
"Vero_proposals.json"

"Vero_stats.json"

data = requestJson( candidate.id );

parseFromData( candidate, data );
*/
