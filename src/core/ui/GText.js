var GEngine = GEngine || {};




GEngine.GText = function ( p_stringId, p_container )
{
	/** @type {PIXI.Text} */
	this.m_pixiText = new PIXI.Text();
	/** @type {string} */
	this.m_id = p_stringId;

	this.init();
};

GEngine.GText.prototype.init = function ()
{
	var t_stringParams = window['strings'][this.m_id];
	if ( !t_stringParams )
	{
		console.warn( 'GText::init> id' + this.m_id + ' not registered in strings' );
		return;
	}

	this.m_pixiText.style = {};
};