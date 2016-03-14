var GEngine = GEngine || {};

GEngine.GuiControl = function( p_id, p_canvas, p_textureId )
{
	GEngine.GSprite.call( this, p_textureId );

	this.m_canvas = p_canvas;
	this.m_canvas.addChild( this );

	this.m_id = p_id;
};

GEngine.GuiControl.prototype = Object.create( GEngine.GSprite.prototype );

GEngine.GuiControl.prototype.id = function()
{
	return m_id;
};

GEngine.GuiControl.prototype.update = function( p_dt )
{

};

GEngine.GuiControl.prototype.free = function()
{
	if ( this.m_canvas != null )
	{
		this.m_canvas.removeChild( this );
		this.m_canvas = null;
	}

	GEngine.GSprite.prototype.free.call( this );
};