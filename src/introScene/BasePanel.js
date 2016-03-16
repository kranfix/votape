

function BasePanel( p_id, p_container )
{
	/** @type {string} */
	this.m_id = p_id;
	/** @type {Object} */
	this.m_panelData = null;
	/** @type {PIXI.Container} */
	this.m_container = new PIXI.Container();
	p_container.addChild( this.m_container );

	this.init();
};

BasePanel.prototype.init = function()
{
	this.m_panelData = window['DataPanels']['panels'][this.m_id];
	if ( !this.m_panelData )
	{
		console.warn( 'BasePanel::init> There is no data for this panel' );
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
	/// Override this
};

BasePanel.prototype.free = function()
{
	if ( this.m_container != null )
	{
		this.m_container.parent.removeChild( this.m_container );
		this.m_container = null;
	}
};

