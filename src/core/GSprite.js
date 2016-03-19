var GEngine = GEngine || {};


GEngine.GSprite = function( p_textureId, p_id )
{
	var t_texture = PIXI.utils.TextureCache[p_textureId];
	PIXI.Sprite.call( this, t_texture );

	this.m_owner = null;

	this.on( 'mousedown', this.onPointerDown );
	this.on( 'touchstart', this.onPointerDown );
	this.on( 'mouseup', this.onPointerUp );
	this.on( 'touchend', this.onPointerUp );
	this.on( 'mouseover', this.onPointerOver );
	this.on( 'mouseover', this.onPointerOut );

	this.gId = p_id;

	this.interactive = true;
};

GEngine.GSprite.prototype = Object.create( PIXI.Sprite.prototype );

GEngine.GSprite.prototype.setOwner = function( p_owner )
{
	this.m_owner = p_owner;
};

GEngine.GSprite.prototype.getOwner = function()
{
	return this.m_owner;
};

GEngine.GSprite.prototype.onPointerDown = function()
{
	if ( this.m_owner == null )
	{
		return;
	}
	if ( this.m_owner['onPointerDown'] )
	{
		this.m_owner['onPointerDown']( this.gId );
	}
};

GEngine.GSprite.prototype.onPointerUp = function()
{
	if ( this.m_owner == null )
	{
		return;
	}
	if ( this.m_owner['onPointerUp'] )
	{
		this.m_owner['onPointerUp']( this.gId );
	}
};

GEngine.GSprite.prototype.onPointerOver = function()
{
	if ( this.m_owner == null )
	{
		return;
	}
	if ( this.m_owner['onPointerOver'] )
	{
		this.m_owner['onPointerOver']( this.gId );
	}
};

GEngine.GSprite.prototype.onPointerOut = function()
{
	if ( this.m_owner == null )
	{
		return;
	}
	if ( this.m_owner['onPointerOut'] )
	{
		this.m_owner['onPointerOut']( this.gId );
	}
};

GEngine.GSprite.prototype.update = function( p_dt )
{
	///console.log( "?" );
};

GEngine.GSprite.prototype.free = function()
{
	this.m_owner = null;
};
