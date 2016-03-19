

function SceneSelectCandidates( p_canvas )
{
	GEngine.GScene.call( this, p_canvas );

	/** @type {Array.<Candidate>} */
	this.m_candidatesSelected = [];
	/** @type {Array.<PIXI.Container>} */
	this.m_spritesSelected = [];
	/** @type {number} */
	this.m_candidatesCount = 0;
};

SceneSelectCandidates.prototype = Object.create( GEngine.GScene.prototype );

SceneSelectCandidates.NUM_COLS = 7;

SceneSelectCandidates.PADDING_X = 100;
SceneSelectCandidates.PADDING_Y = 100;

SceneSelectCandidates.DELTA_X = 120;
SceneSelectCandidates.DELTA_Y = 160;

SceneSelectCandidates.prototype.createScene = function()
{
	GEngine.GScene.prototype.createScene.call( this );

	var t_candidatesInfo = AppSettings.instance.candidatesBasicInfo;
	var t_columnCounter = 0;
	var t_rowCounter = 0;

	for ( var q = 0; q < t_candidatesInfo.length; q++ )
	{
		var t_newControl = new GEngine.GSprite( 'res_' + ( q + 1 ) + '.png',
												( q + 1 ) );

		var t_xPos = SceneSelectCandidates.PADDING_X;
		var t_yPos = SceneSelectCandidates.PADDING_Y;
		t_xPos += t_columnCounter * SceneSelectCandidates.DELTA_X;
		t_yPos += t_rowCounter * SceneSelectCandidates.DELTA_Y;

		t_newControl.x = t_xPos;
		t_newControl.y = t_yPos;

		this.m_controls.push( t_newControl );

		t_columnCounter++;
		if ( t_columnCounter >= SceneSelectCandidates.NUM_COLS )
		{
			t_columnCounter = 0;
			t_rowCounter += 1;
		}
	}
};


SceneSelectCandidates.prototype.onPointerDown = function( p_id )
{	
	if ( this.m_candidatesCount >= 5 )
	{
		return;
	}
	
	if ( this.checkIfSelected( p_id ) )
	{
		return;
	}

	console.log( 'SceneSelectCandidates::onPointerDown> selected candidate with id ' + p_id );
	
	this.m_candidatesCount++;

	var t_selectedCandidate = AppSettings.instance.candidatesBasicInfo[p_id - 1];
	this.m_candidatesSelected.push( t_selectedCandidate.clone() );
	
	var t_selectedControl = this.getControl( p_id );
	
	/// Add selected sprite
	var t_sprite = PIXI.Sprite.fromFrame( this.m_candidatesCount == 1 ? 
										  'res_star1.png' : 'res_check.png' );
	var t_xPos = t_selectedControl.x;
	var t_yPos = t_selectedControl.y;
	
	t_sprite.scale.x = 0.25;
	t_sprite.scale.y = 0.25;

	this.m_canvas.addChild( t_sprite );
	t_sprite.x = t_xPos;
	t_sprite.y = t_yPos;

	this.m_spritesSelected.push( t_sprite );

	if ( this.m_candidatesCount >= 5 )
	{
		AppSettings.instance.user_selectedCandidates = this.m_candidatesSelected;
		GEngine.GSceneManager.instance.changeScene( GEngine.GSceneManager.SCENE_SELECT_PILARS );
	}
};

SceneSelectCandidates.prototype.checkIfSelected = function( p_id )
{
	for ( var q = 0; q < this.m_candidatesSelected.length; q++ )
	{
		if ( p_id == this.m_candidatesSelected[q].id )
		{
			return true;
		}
	}

	return false;
};

SceneSelectCandidates.prototype.free = function()
{
	for ( var q = 0; q < this.m_spritesSelected.length; q++ )
	{
		this.m_canvas.removeChild( this.m_spritesSelected[q] );
		this.m_spritesSelected[q] = null;
	}

	GEngine.GScene.prototype.free.call( this );
};