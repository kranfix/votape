

function SceneQuestions( p_canvas, p_params )
{
	/** @type {PIXI.Sprite} */
	this.m_panelBg = null;
	/** @type {Array.<PIXI.Sprite>} */
	this.m_sprites = [];
	/** @type {Array.<GEngine.GText>} */
	this.m_texts = [];
	/** @type {string} */
	this.m_pilar = p_params['pilar'] || 'education';

	GEngine.GScene.call( this, p_canvas );
};

SceneQuestions.prototype = Object.create( GEngine.GScene.prototype );

SceneQuestions.prototype.createScene = function()
{
	GEngine.GScene.prototype.createScene.call( this );

	var t_panelData = window['DataPanels']['panels']['panelQuestions'];

	if ( t_panelData['bg'] )
	{
		this.m_panelBg = PIXI.Sprite.fromFrame( t_panelData['bg'] );
		this.m_canvas.addChild( this.m_panelBg );

		this.m_panelBg.scale.x = t_panelData['panelWidth'] / this.m_panelBg.width;
		this.m_panelBg.scale.y = t_panelData['panelHeight'] / this.m_panelBg.height;

		this.m_panelBg.x = 0.5 * ( GEngine.App.APP_WIDTH - 
						   		   t_panelData['panelWidth'] );
		this.m_panelBg.y = t_panelData['yPos'];

		this.m_panelBg.alpha = 0.8;
	}
	else
	{
		this.m_panelBg = null;
	}

	if ( t_panelData['sprites'] &&
		 t_panelData['sprites'].length > 0 )
	{
		var t_sprites = t_panelData['sprites'];
		for ( var q = 0; q < t_sprites.length; q++ )
		{
			var t_xPos = t_sprites[q]['xPos'];
			var t_yPos = t_sprites[q]['yPos'];
			var t_textureId = t_sprites[q]['texture'];
			var t_scaleX = t_sprites[q]['sx'];
			var t_scaleY = t_sprites[q]['sy'];
			var t_alpha  = t_sprites[q]['alpha'];

			var t_sprite = null;
			if ( t_sprites[q]['interactive'] )
			{
				t_sprite = new GEngine.GSprite( t_textureId, q );
				this.m_controls.push( t_sprite );
			}
			else
			{
				t_sprite = PIXI.Sprite.fromFrame( t_textureId );
				this.m_canvas.addChild( t_sprite );
				this.m_sprites.push( t_sprite );
			}
			
			t_sprite.x = t_xPos;
			t_sprite.y = t_yPos;
			t_sprite.scale.x = t_scaleX;
			t_sprite.scale.y = t_scaleY;
			t_sprite.alpha   = t_alpha;
		}
	}

	if ( t_panelData['texts'] &&
		 t_panelData['texts'].length > 0 )
	{
		var t_texts = t_panelData['texts'];
		for ( var q = 0; q < t_texts.length; q++ )
		{
			var t_textId = t_texts[q]['textId'];
			var t_xText = t_texts[q]['xPos'];
			var t_yText = t_texts[q]['yPos'];
			var t_textEffect = t_texts[q]['effect'];
			var t_gText = new GEngine.GText( t_textId );
			this.m_canvas.addChild( t_gText.pixiText() );
			t_gText.pixiText().x = t_xText;
			t_gText.pixiText().y = t_yText;
			if ( t_textEffect )
			{
				t_gText.enableEffect( t_textEffect['id'] );
			}
			this.m_texts.push( t_gText );
		}
	}
	
	var t_candidates = AppSettings.instance.user_selectedCandidates;

	this.m_texts[0].setText( this.m_pilar.toUpperCase() );

	for ( var q = 0; q < t_candidates.length; q++ )
	{
		var t_candidateProposal = t_candidates[q]['proposals'][this.m_pilar];
		this.m_texts[q + 1].setText( t_candidateProposal );
	}

};

SceneQuestions.prototype.onPointerDown = function( p_id )
{
	console.log( 'foo: ' + p_id );
	if ( AppSettings.instance.user_currentPilar == AppSettings.instance.user_selectedPilars.length - 1 )
	{
		AppSettings.instance.user_selectedCandidates[p_id - 1].numMatches++;
		console.log( 'Check result' );

		var t_favoriteCandidate = AppSettings.instance.user_selectedCandidates[0];
		var t_bestCandidate 	= AppSettings.instance.user_selectedCandidates[this.getBestCandidateId()];
	
		if ( t_favoriteCandidate.id !== t_bestCandidate.id )
		{
			AppSettings.instance.onSendFailureToDB( t_favoriteCandidate.id );
			GEngine.GSceneManager.instance.changeScene( GEngine.GSceneManager.SCENE_INCORRECT,
														{ 'favorite': t_favoriteCandidate.id,
														  'best': t_bestCandidate.id } );
		}
		else
		{
			AppSettings.instance.onSendCoincidenceToDB( t_favoriteCandidate.id );
			GEngine.GSceneManager.instance.changeScene( GEngine.GSceneManager.SCENE_CORRECT,
														{ 'favorite': t_favoriteCandidate.id } );
		}
	}
	else
	{
		/// Add the count to the corresponding candidate
		AppSettings.instance.user_selectedCandidates[p_id - 1].numMatches++;
		AppSettings.instance.user_currentPilar++;
		GEngine.GSceneManager.instance.changeScene( GEngine.GSceneManager.SCENE_PROPOSALS,
													{ 'pilar': AppSettings.instance.user_selectedPilars[AppSettings.instance.user_currentPilar] } );
	}
};

SceneQuestions.prototype.getBestCandidateId = function()
{
	var t_candidates = AppSettings.instance.user_selectedCandidates;
	var t_maxIndx = 0;
	var t_maxMatches = 0;
	for ( var q = 0; q < t_candidates.length; q++ )
	{
		if ( t_candidates[q].numMatches > t_maxMatches )
		{
			t_maxMatches = t_candidates[q].numMatches;
			t_maxIndx = q;
		}
	}
	return t_maxIndx;
};

SceneQuestions.prototype.free = function()
{
	for ( var q = 0; q < this.m_sprites.length; q++ )
	{
		this.m_canvas.removeChild( this.m_sprites[q] );
		this.m_sprites[q] = null;
	}
	this.m_sprites = null;

	for ( var q = 0; q < this.m_texts.length; q++ )
	{
		this.m_canvas.removeChild( this.m_texts[q].pixiText() );
		this.m_texts[q].free();
		this.m_texts[q] = null;
	}
	this.m_texts = null;

	if ( this.m_panelBg )
	{
		this.m_canvas.removeChild( this.m_panelBg );
		this.m_panelBg = null;
	}

	GEngine.GScene.prototype.free.call( this );
};