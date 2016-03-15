

function BasePanel( p_id, p_container )
{
	/** @type {string} */
	this.m_id = p_id;
	/** @type {PIXI.Container} */
	this.m_container = new PIXI.Container();
	p_container.addChild( this.m_container );

	/** @type {PIXI.Text} */
	this.m_text = null;
	/** @type {number} */
	this.m_xText = 0;
	/** @type {number} */
	this.m_yText = 0;
	/** @type {number} */
	this.m_state = BasePanel.ST_IDLE;

	this.m_aniText = null;

	this.init();
};

BasePanel.ST_IDLE 		= 0;
BasePanel.ST_FADING_IN 	= 1;
BasePanel.ST_FADING_OUT = 2;

BasePanel.prototype.init = function()
{
	this.m_text = new PIXI.Text( "votape" );
	//this.m_container.addChild( this.m_text );

	this.m_xText = 200;
	this.m_yText = 200;

	this.m_text.x = this.m_xText;
	this.m_text.y = this.m_yText;

	this.m_aniText = new GEngine.GText( 'STR_PANEL1_SCENE_INFO' );
	this.m_aniText.enableEffect( GEngine.GText.EFFECT_TYPE_WRITER );
	this.m_container.addChild( this.m_aniText.pixiText() );
	this.m_aniText.pixiText().x = this.m_xText;
	this.m_aniText.pixiText().y = this.m_yText;

};

BasePanel.prototype.gotoState = function( p_state )
{
	if ( this.m_state == p_state )
	{
		return;
	}

	this.m_state = p_state;

	switch ( this.m_state )
	{
		case BasePanel.ST_FADING_IN:

		case BasePanel.ST_FADING_OUT:
	}

};

BasePanel.prototype.onEnter = function()
{

};

BasePanel.prototype.onExit = function()
{

};

BasePanel.prototype.update = function( p_dt )
{
	if ( this.m_state == BasePanel.ST_FADING_IN )
	{

	}
	else if ( this.m_state == BasePanel.ST_FADING_OUT )
	{

	}

	if ( this.m_aniText )
	{
		this.m_aniText.update( p_dt );
	}
};

BasePanel.prototype.free = function()
{
	if ( this.m_aniText )
	{
		this.m_aniText.free();
		this.m_aniText = null;
	}
};

