

function SceneIncorrect( p_canvas, p_params )
{
	p_params = p_params || { 'favorite': 1, 'best': 9 };

	/** @type {number} */
	this.m_favoriteId 	= p_params['favorite'] || 1;
	/** @type {number} */
	this.m_bestId 		= p_params['best'] || 9;

	SceneBaseResult.call( this, p_canvas, p_params );
};

SceneIncorrect.prototype = Object.create( SceneBaseResult.prototype );

SceneIncorrect.prototype.createScene = function()
{
	this.m_panelId = 'panelIncorrect';
	SceneBaseResult.prototype.createScene.call( this );

	/// Initialize according to the best and favorite

	/// Find the best sprite
	var t_spriteBest = this.getSprite( 'best' );
	var t_indxOfBest = this.m_sprites.indexOf( t_spriteBest );
	var t_newSpriteBest = PIXI.Sprite.fromFrame( 'res_doll_' + this.m_bestId + '.png' );
	this.m_canvas.removeChild( t_spriteBest );
	this.m_canvas.addChild( t_newSpriteBest );
	t_newSpriteBest.x = t_spriteBest.x - 30;
	t_newSpriteBest.y = t_spriteBest.y + 20;
	t_newSpriteBest.scale.x = t_spriteBest.scale.x;
	t_newSpriteBest.scale.y = t_spriteBest.scale.y;
	t_newSpriteBest.rotation = -Math.PI / 10;
	this.m_sprites[t_indxOfBest] = t_newSpriteBest;

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
	var t_textCoincidences = this.getText( 'STR_COINCIDENCES' );
	var t_numCoincidences = AppSettings.instance.stats[this.m_favoriteId - 1]['coincidences'];
	t_textCoincidences.setText( 'Coincidences: ' + t_numCoincidences );

	var t_textFails = this.getText( 'STR_FAILS' );
	var t_numFails = AppSettings.instance.stats[this.m_favoriteId - 1]['fails'];
	t_textFails.setText( 'Fails: ' + t_numFails );
};

SceneIncorrect.prototype.onPointerDown = function( g_id )
{
	if ( g_id == 'infoFavorite' )
	{
		console.info( 'calling the favorite info' );
		var t_favInfo = AppSettings.instance.candidatesBasicInfo[this.m_favoriteId - 1];
		var t_favUrl = t_favInfo.url;
		window.open( t_favUrl, 'name', 'location=no,scrollbars=yes,status=no,toolbar=yes,resizable=yes' );
		GEngine.GSceneManager.instance.changeScene( GEngine.GSceneManager.SCENE_INTRO );
	}
	else if ( g_id == 'infoBest' )
	{
		console.info( 'calling the best info' );
		var t_bestInfo = AppSettings.instance.candidatesBasicInfo[this.m_bestId - 1];
		var t_bestUrl = t_bestInfo.url;
		window.open( t_bestUrl, 'name', 'location=no,scrollbars=yes,status=no,toolbar=yes,resizable=yes' );
		GEngine.GSceneManager.instance.changeScene( GEngine.GSceneManager.SCENE_INTRO );
	}
};

SceneIncorrect.prototype.free = function()
{	
	SceneBaseResult.prototype.free.call( this );
};