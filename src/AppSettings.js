

function AppSettings()
{
	/** @type {boolean} */
	this.ready = false;

	/** @type {Array.<Object>} */
	this.objCandidatesBasicInfo = null;
	/** @type {Array.<Candidate>} */
	this.candidatesBasicInfo = [];
	/** @type {Array.<string>}*/
	this.pilars = ['ambient','education','employment',
				   'health','security','technology'];

	/** @type {Array.<string>} */
	this.user_selectedPilars = null;
	/** @type {Array.<Candidate>} */
	this.user_selectedCandidates = null;
};

/** @type {AppSettings} */ AppSettings.instance = null;

AppSettings.create = function()
{
	AppSettings.instance = new AppSettings();
	AppSettings.loadJson( AppSettings.instance.onBasicInfoLoaded,
						  'assets/json/candidatesBasicInfo.json' );
};

AppSettings.prototype.resetData = function()
{
	this.user_selectedPilars = null;
	this.user_selectedCandidates = null;
};

AppSettings.loadJson = function( p_callback, p_file )
{
	var t_xObj = new XMLHttpRequest();
	t_xObj.overrideMimeType( 'application/json' );
	t_xObj.open( 'GET', p_file, true );
	t_xObj.onreadystatechange = function()
	{
		if ( t_xObj.readyState == 4 && t_xObj.status == '200' )
		{
			p_callback( t_xObj.responseText );
		}
	}
	t_xObj.send( null );
};

AppSettings.prototype.onBasicInfoLoaded = function( p_response )
{
	var t_parsedBasicInfoFile = JSON.parse( p_response );
	AppSettings.instance.objCandidatesBasicInfo = t_parsedBasicInfoFile['candidates'];
	for ( var q = 0; q < AppSettings.instance.objCandidatesBasicInfo.length; q++ )
	{
		var t_candidateInfo = AppSettings.instance.objCandidatesBasicInfo[q];
		var t_candidateObj = new Candidate( q + 1 );
		t_candidateObj.id 		= t_candidateInfo['id'];
		t_candidateObj.fname 	= t_candidateInfo['nom'];
		t_candidateObj.lname 	= t_candidateInfo['ape'];
		t_candidateObj.age 		= t_candidateInfo['age'];
		t_candidateObj.job 		= t_candidateInfo['prof'];
		t_candidateObj.province = t_candidateInfo['prov'];
		t_candidateObj.party 	= t_candidateInfo['org'];
		t_candidateObj.state 	= t_candidateInfo['st'];

		AppSettings.instance.candidatesBasicInfo.push( t_candidateObj );
	}

	AppSettings.instance.ready = true;
};