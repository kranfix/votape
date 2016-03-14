

function BasePanel( p_id, p_container )
{
	this.m_id = p_id;

	this.m_container = new PIXI.Container();
	p_container.addChild( this.m_container );

	this.m_text = null;
	this.m_xText = 0;
	this.m_yText = 0;

	this.m_theta = 0;

	this.init();
};

BasePanel.prototype.init = function()
{
	this.m_text = new PIXI.Text( "votape" );
	this.m_container.addChild( this.m_text );

	this.m_xText = 200;
	this.m_yText = 200;

	this.m_text.x = this.m_xText;
	this.m_text.y = this.m_yText;

};

BasePanel.prototype.update = function( p_dt )
{
	///this.m_text.x -= 0.05 * p_dt;
	this.m_theta += 2 * Math.PI * 0.001 * p_dt;
	this.m_text.x = this.m_xText + 100 * Math.sin( this.m_theta );
	this.m_text.y = this.m_yText + 100 * Math.cos( this.m_theta );
};