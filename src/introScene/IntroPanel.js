

/**
* @constructor
* @param {string} p_id
* @param {PIXI.Container} p_container
* @extends BasePanel
*/
function IntroPanel( p_id, p_container )
{
	/** @type {PIXI.Sprite} */
	this.m_panelBg = null;
	/** @type {number} */ 
	this.m_panelState = -1;
	/** @type {number} */ 
	this.m_panelStateBef = -1;
	/** @type {number} */ 
	this.m_fadeInSpeed = 1 / 1000;
	/** @type {number} */
	this.m_fadeOutSpeed = 1 / 1000;
	/** @type {number} */
	this.m_fadeSpeedModifier = 1;
	/** @type {number} */
	this.m_timer = 0;
	/** @type {number} */
	this.m_lifeTime = 1000;
	/** @type {number} */
	this.m_currentAlpha = 0;
	/** @type {Array.<PIXI.Sprite>} */
	this.m_sprites = [];
	/** @type {Array.<GEngine.GText>} */
	this.m_texts = [];
	/** @type {Array.<number>} */
	this.m_spritesAlpha = [];

	BasePanel.call( this, p_id, p_container );
};

/** @const */ IntroPanel.ST_IDLE 	   = 0;
/** @const */ IntroPanel.ST_FADING_IN  = 1;
/** @const */ IntroPanel.ST_FADING_OUT = 2;
/** @const */ IntroPanel.ST_FINISHED   = 3;


IntroPanel.prototype = Object.create( BasePanel.prototype );


IntroPanel.prototype.init = function()
{
	BasePanel.prototype.init.call( this );

	this.m_container.visible = false;

	this.m_lifeTime = this.m_panelData['lifetime'] || 3000;

	if ( this.m_panelData['bg'] )
	{
		this.m_panelBg = PIXI.Sprite.fromFrame( this.m_panelData['bg'] );
		this.m_container.addChild( this.m_panelBg );

		this.m_panelBg.scale.x = this.m_panelData['panelWidth'] / this.m_panelBg.width;
		this.m_panelBg.scale.y = this.m_panelData['panelHeight'] / this.m_panelBg.height;

		this.m_panelBg.x = 0.5 * ( GEngine.App.APP_WIDTH - 
						   		   this.m_panelData['panelWidth'] );
		this.m_panelBg.y = this.m_panelData['yPos'];

		this.m_panelBg.alpha = 0.8;
	}
	else
	{
		this.m_panelBg = null;
	}

	if ( this.m_panelData['sprites'] &&
		 this.m_panelData['sprites'].length > 0 )
	{
		var t_sprites = this.m_panelData['sprites'];
		for ( var q = 0; q < t_sprites.length; q++ )
		{
			var t_xPos = t_sprites[q]['xPos'];
			var t_yPos = t_sprites[q]['yPos'];
			var t_textureId = t_sprites[q]['texture'];
			var t_scaleX = t_sprites[q]['sx'];
			var t_scaleY = t_sprites[q]['sy'];
			var t_alpha  = t_sprites[q]['alpha'];

			var t_sprite = PIXI.Sprite.fromFrame( t_textureId );
			this.m_container.addChild( t_sprite );
			t_sprite.x = t_xPos;
			t_sprite.y = t_yPos;
			t_sprite.scale.x = t_scaleX;
			t_sprite.scale.y = t_scaleY;
			t_sprite.alpha   = t_alpha;

			this.m_sprites.push( t_sprite );
			this.m_spritesAlpha.push( t_sprite.alpha );
		}
	}

	if ( this.m_panelData['texts'] &&
		 this.m_panelData['texts'].length > 0 )
	{
		var t_texts = this.m_panelData['texts'];
		for ( var q = 0; q < t_texts.length; q++ )
		{
			var t_textId = t_texts[q]['textId'];
			var t_xText = t_texts[q]['xPos'];
			var t_yText = t_texts[q]['yPos'];
			var t_textEffect = t_texts[q]['effect'];
			var t_gText = new GEngine.GText( t_textId );
			this.m_container.addChild( t_gText.pixiText() );
			t_gText.pixiText().x = t_xText;
			t_gText.pixiText().y = t_yText;
			if ( t_textEffect )
			{
				t_gText.enableEffect( t_textEffect['id'] );
			}
			this.m_texts.push( t_gText );
		}
	}

	this.m_panelState = IntroPanel.ST_IDLE;
	this.m_panelStateBef = -1;
};


IntroPanel.prototype.update = function( p_dt )
{
	switch ( this.m_panelState )
	{

		case IntroPanel.ST_IDLE:
			if ( this.m_panelStateBef == IntroPanel.ST_FADING_IN )
			{
				this.m_timer += p_dt;
				if ( this.m_timer >= this.m_lifeTime )
				{
					this.setState( IntroPanel.ST_FADING_OUT );
				}
			}
			break;

		case IntroPanel.ST_FADING_IN:
			this.m_currentAlpha += this.m_fadeInSpeed * p_dt;
			if ( this.m_currentAlpha >= 1 )
			{
				this.m_currentAlpha = 1;
				this.setAlphaToElements();
				this.setState( IntroPanel.ST_IDLE );
			}
			else
			{
				this.setAlphaToElements();
			}
			break;

		case IntroPanel.ST_FADING_OUT:
			this.m_currentAlpha -= this.m_fadeOutSpeed * p_dt;
			if ( this.m_currentAlpha < 0 )
			{
				this.m_currentAlpha = 0;
				this.setAlphaToElements();
				this.setState( IntroPanel.ST_FINISHED );
			}
			else
			{
				this.setAlphaToElements();
			}
			break;
	}
};

IntroPanel.prototype.setAlphaToElements = function()
{
	for ( var q = 0; q < this.m_sprites.length; q++ )
	{
		this.m_sprites[q].alpha = this.m_currentAlpha * this.m_spritesAlpha[q];
	}
	for ( var q = 0; q < this.m_texts.length; q++ )
	{
		this.m_texts[q].pixiText().alpha = this.m_currentAlpha;
	}
};

IntroPanel.prototype.onEnter = function()
{
	this.setState( IntroPanel.ST_FADING_IN );
	this.m_container.visible = true;
};

IntroPanel.prototype.onExit = function()
{
	this.setState( IntroPanel.ST_FINISHED );
};

IntroPanel.prototype.setState = function( p_state )
{
	if ( this.m_panelState == p_state )
	{
		return;
	}
	this.m_panelStateBef = this.m_panelState;
	this.m_panelState = p_state;

	switch ( this.m_panelState )
	{

		case IntroPanel.ST_IDLE:
			this.m_timer = 0;
			break;

		case IntroPanel.ST_FADING_IN:
			this.m_timer = 0;
			this.m_currentAlpha = 0;
			this.setAlphaToElements();
			break;

		case IntroPanel.ST_FADING_OUT:
			this.m_timer = 0;
			this.m_currentAlpha = 1;
			this.setAlphaToElements();
			break;

	}
};

IntroPanel.prototype.getState = function()
{
	return this.m_panelState;
};

IntroPanel.prototype.free = function()
{
	for ( var q = 0; q < this.m_sprites.length; q++ )
	{
		this.m_container.removeChild( this.m_sprites[q] );
		this.m_sprites[q] = null;
	}
	this.m_sprites = null;

	for ( var q = 0; q < this.m_texts.length; q++ )
	{
		this.m_container.removeChild( this.m_texts[q].pixiText() );
		this.m_texts[q].free();
		this.m_texts[q] = null;
	}
	this.m_texts = null;

	if ( this.m_panelBg )
	{
		this.m_container.removeChild( this.m_panelBg );
		this.m_panelBg = null;
	}

	BasePanel.prototype.free.call( this );
};