var GEngine = GEngine || {};




GEngine.GText = function ( p_stringId )
{
	/** @type {PIXI.Text} */
	this.m_pixiText = new PIXI.Text( "" );
	/** @type {string} */
	this.m_id = p_stringId;
	/** @type {GEngine.GEffectTypeWriter} */
	this.m_effect = null;
	/** @type {number} */
	this.m_timer = 0;

	this.init();
};

GEngine.GText.EFFECT_NONE 		 = 0;
GEngine.GText.EFFECT_TYPE_WRITER = 1;
GEngine.GText.EFFECT_BLINKY		 = 2;

GEngine.GText.prototype.init = function ()
{
	var t_stringParams = window['strings'][this.m_id];
	if ( !t_stringParams )
	{
		console.warn( 'GText::init> id' + this.m_id + ' not registered in strings' );
		return;
	}

	this.m_pixiText.style = { 'style': 'normal ' + t_stringParams['size'] + 'pt ' + t_stringParams['font'],
							  'fill' : t_stringParams['fill'],
							  'align': t_stringParams['align'],
							  'wordWrap': t_stringParams['wordWrap'],
							  'wordWrapWidth': t_stringParams['wordWrapWidth'] };
	this.m_pixiText.text = t_stringParams['text'];
};

GEngine.GText.prototype.enableEffect = function( p_effectId )
{
	if ( p_effectId == GEngine.GText.EFFECT_TYPE_WRITER )
	{
		this.m_effect = new GEngine.GEffectTypeWriter( this );
		this.m_effect.start( 50 );
	}
};

GEngine.GText.prototype.pixiText = function()
{
	return this.m_pixiText;
};


GEngine.GText.prototype.getText = function()
{
	return this.m_pixiText.text;
};

GEngine.GText.prototype.setText = function( p_text )
{
	this.m_pixiText.text = p_text;
};

GEngine.GText.prototype.update = function( p_dt )
{
	if ( this.m_effect )
	{
		this.m_effect.update( p_dt );
	}
};

GEngine.GText.prototype.isIdle = function()
{
	if ( !this.m_effect )
	{
		return true;
	}
	if ( this.m_effect.state() == GEngine.GEffectTypeWriter.ST_IDLE )
	{
		return true;
	}
	return false;
};

GEngine.GText.prototype.effect = function()
{
	return this.m_effect;
}

GEngine.GText.prototype.free = function()
{
	if ( this.m_effect )
	{
		this.m_effect.free();
		this.m_effect = null;
	}
	m_pixiText = null;
};