

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

	this.init();
};

BasePanel.ST_IDLE 		= 0;
BasePanel.ST_FADING_IN 	= 1;
BasePanel.ST_FADING_OUT = 2;

BasePanel.prototype.init = function()
{
	this.m_text = new PIXI.Text( "votape" );
	this.m_container.addChild( this.m_text );

	this.m_xText = 200;
	this.m_yText = 200;

	this.m_text.x = this.m_xText;
	this.m_text.y = this.m_yText;

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
};