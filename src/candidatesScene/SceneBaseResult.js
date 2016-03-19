

function SceneBaseResult( p_canvas, p_params )
{
	/** @type {PIXI.Sprite} */
	this.m_panelBg = null;
	/** @type {Array.<PIXI.Sprite>} */
	this.m_sprites = [];
	/** @type {Array.<GEngine.GText>} */
	this.m_texts = [];
	/** @type {string} */
	this.m_panelId = '';

	GEngine.GScene.call( this, p_canvas,p_params );
};

SceneBaseResult.prototype = Object.create( GEngine.GScene.prototype );

SceneBaseResult.prototype.createScene = function()
{
	var t_panelData = window['DataPanels']['panels'][this.m_panelId];

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
			var t_gId 	 = t_sprites[q]['gId'];
			var t_sprite = null;
			if ( t_sprites[q]['interactive'] )
			{
				t_sprite = new GEngine.GSprite( t_textureId, t_gId );
				this.m_controls.push( t_sprite );
			}
			else
			{
				t_sprite = PIXI.Sprite.fromFrame( t_textureId );
				this.m_canvas.addChild( t_sprite );
				this.m_sprites.push( t_sprite );
			}
			t_sprite['gId'] = t_sprites[q]['gId'];
			
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

	/// Initialize according to the best and favorite


};

SceneBaseResult.prototype.getText = function( p_strId )
{
	for ( var q = 0; q < this.m_texts.length; q++ )
	{
		if ( this.m_texts[q].id() === p_strId )
		{
			return this.m_texts[q];
		}
	}

	return null;
};

SceneBaseResult.prototype.getSprite = function( p_gId )
{
	for ( var q = 0; q < this.m_sprites.length; q++ )
	{
		if ( this.m_sprites[q]['gId'] === p_gId )
		{
			return this.m_sprites[q];
		}
	}

	return null;
};

SceneBaseResult.prototype.free = function()
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