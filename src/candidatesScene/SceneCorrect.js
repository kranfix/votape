

function SceneCorrect( p_canvas, p_params )
{
	p_params = p_params || { 'favorite': 1 };

	/** @type {number} */
	this.m_favoriteId 	= p_params['favorite'] || 1;

	SceneBaseResult.call( this, p_canvas, p_params );
};

SceneCorrect.prototype = Object.create( SceneBaseResult.prototype );

SceneCorrect.prototype.createScene = function()
{
	this.m_panelId = 'panelCorrect';
	SceneBaseResult.prototype.createScene.call( this );

	/// Initialize according to the favorite

	/// Find the favorite sprite
	var t_spriteFav = this.getSprite( 'favorite' );
	var t_indxOfFav = this.m_sprites.indexOf( t_spriteFav );
	var t_newSpriteFav = PIXI.Sprite.fromFrame( 'res_doll_' + this.m_favoriteId + '.png' );
	this.m_canvas.removeChild( t_spriteFav );
	this.m_canvas.addChild( t_newSpriteFav );
	t_newSpriteFav.x = t_spriteFav.x - 30;
	t_newSpriteFav.y = t_spriteFav.y + 20;
	t_newSpriteFav.scale.x = t_spriteFav.scale.x;
	t_newSpriteFav.scale.y = t_spriteFav.scale.y;
	t_newSpriteFav.rotation = -Math.PI / 10;
	this.m_sprites[t_indxOfFav] = t_newSpriteFav;


	/// Replace the texts that are necessary

	var t_info = AppSettings.instance.candidatesBasicInfo[this.m_favoriteId - 1];
	this.getText( 'STR_WINNER_NAME' ).setText( t_info.name );
	this.getText( 'STR_WINNER_PARTY' ).setText( t_info.party );
	this.getText( 'STR_WINNER_PROFESSION' ).setText( t_info.job );
	this.getText( 'STR_WINNER_AGE' ).setText( t_info.age );
	this.getText( 'STR_WINNER_ORIGIN' ).setText( t_info.province );
};

SceneCorrect.prototype.onPointerDown = function( g_id )
{
	if ( g_id === 'infoFavorite' )
	{
		console.info( 'calling the favorite info' );
		var t_favInfo = AppSettings.instance.candidatesBasicInfo[this.m_favoriteId - 1];
		var t_favUrl = t_favInfo.url;
		window.open( t_favUrl, 'name', 'location=no,scrollbars=yes,status=no,toolbar=yes,resizable=yes' )
		GEngine.GSceneManager.instance.changeScene( GEngine.GSceneManager.SCENE_INTRO );
	}
};

SceneCorrect.prototype.free = function()
{	
	SceneBaseResult.prototype.free.call( this );
};