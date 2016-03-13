
var g_app = null;

function main()
{
	g_app = new GEngine.App();

	animate();
}

function animate()
{
	if ( g_app != null )
	{
		g_app.onRender();
		g_app.onTick();
	}

	requestAnimationFrame( animate );
}



var t_body = document.body;
t_body.onload = main;