

function SceneSelectPilars( p_canvas )
{
	GEngine.GScene.call( this, p_canvas );

	/** @type {PIXI.Sprite} */
	this.m_spriteBg = null;
	/** @type {Array.<string>} */
	this.m_pilarsSelected = [];
	/** @type {Array.<PIXI.Sprite>} */
	this.m_spritesSelected = [];
	/** @type {number} */
	this.m_pilarsCount = 0;
};

SceneSelectPilars.prototype = Object.create( GEngine.GScene.prototype );

SceneSelectPilars.NUM_COLS = 3;

SceneSelectPilars.PADDING_X = 240;
SceneSelectPilars.PADDING_Y = 100;

SceneSelectPilars.DELTA_X = 220;
SceneSelectPilars.DELTA_Y = 200;

SceneSelectPilars.MAX_CHOICES = 3;

SceneSelectPilars.prototype.createScene = function()
{
	GEngine.GScene.prototype.createScene.call( this );

	var t_pilarsInfo = AppSettings.instance.pilars;
	var t_columnCounter = 0;
	var t_rowCounter = 0;

	this.m_spriteBg = PIXI.Sprite.fromFrame( 'res_bg_panel_black.png' );
	this.m_canvas.addChild( this.m_spriteBg );
	this.m_spriteBg.x = 50;
	this.m_spriteBg.y = 50;
	this.m_spriteBg.scale.x = 900 / this.m_spriteBg.width;
	this.m_spriteBg.scale.y = 500 / this.m_spriteBg.height;
	this.m_spriteBg.alpha = 0.75;

	for ( var q = 0; q < t_pilarsInfo.length; q++ )
	{
		var t_pilarId = t_pilarsInfo[q];
		var t_newControl = new GEngine.GSprite( 'res_' + t_pilarId + '.png',
												t_pilarId );

		var t_xPos = SceneSelectPilars.PADDING_X;
		var t_yPos = SceneSelectPilars.PADDING_Y;
		t_xPos += t_columnCounter * SceneSelectPilars.DELTA_X;
		t_yPos += t_rowCounter * SceneSelectPilars.DELTA_Y;

		t_newControl.x = t_xPos;
		t_newControl.y = t_yPos;

		t_newControl.scale.x = 0.4;
		t_newControl.scale.y = 0.4;

		this.m_controls.push( t_newControl );

		t_columnCounter++;
		if ( t_columnCounter >= SceneSelectPilars.NUM_COLS )
		{
			t_columnCounter = 0;
			t_rowCounter += 1;
		}
	}
};


SceneSelectPilars.prototype.onPointerDown = function( p_id )
{	
	if ( this.m_pilarsCount >= SceneSelectPilars.MAX_CHOICES )
	{
		return;
	}
	
	if ( this.checkIfSelected( p_id ) )
	{
		return;
	}

	console.log( 'SceneSelectPilars::onPointerDown> selected pilar with id ' + p_id );
	
	this.m_pilarsCount++;

	this.m_pilarsSelected.push( p_id );
	
	var t_selectedControl = this.getControl( p_id );
	
	/// Add selected sprite
	var t_sprite = PIXI.Sprite.fromFrame( 'res_check.png' );
	var t_xPos = t_selectedControl.x;
	var t_yPos = t_selectedControl.y;
	
	t_sprite.scale.x = 0.25;
	t_sprite.scale.y = 0.25;

	this.m_canvas.addChild( t_sprite );
	t_sprite.x = t_xPos;
	t_sprite.y = t_yPos;

	this.m_spritesSelected.push( t_sprite );

	if ( this.m_pilarsCount >= SceneSelectPilars.MAX_CHOICES )
	{
		AppSettings.instance.user_selectedPilars = this.m_pilarsSelected;
		///GEngine.GSceneManager.instance.changeScene( GEngine.GSceneManager.SCENE_INTRO );
		AppSettings.instance.user_currentPilar = 0;
		GEngine.GSceneManager.instance.changeScene( GEngine.GSceneManager.SCENE_PROPOSALS, 
													{ 'pilar': AppSettings.instance.user_selectedPilars[0] } );
	}
};

SceneSelectPilars.prototype.checkIfSelected = function( p_id )
{
	for ( var q = 0; q < this.m_pilarsSelected.length; q++ )
	{
		if ( p_id == this.m_pilarsSelected[q] )
		{
			return true;
		}
	}

	return false;
};

SceneSelectPilars.prototype.free = function()
{
	for ( var q = 0; q < this.m_spritesSelected.length; q++ )
	{
		this.m_canvas.removeChild( this.m_spritesSelected[q] );
		this.m_spritesSelected[q] = null;
	}

	if ( this.m_spriteBg )
	{
		this.m_canvas.removeChild( this.m_spriteBg );
		this.m_spriteBg = null;
	}

	GEngine.GScene.prototype.free.call( this );
};