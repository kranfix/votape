
function DataPanels(){};

window['DataPanels'] = DataPanels;

DataPanels.panels = 
{
	'panelScene1':
		{
			'bg' : 'res_common_bg_1',
			'xPos' : 100,
			'yPos' : 100,
			'panelWidth' : 400,
			'panelHeight' : 200,
			'texts' :
				[
				],
			'sprites' :
				[
					{ 'xPos' : 200, 'yPos' : 100, 'texture' : 'res_jne_logo.png', 'sx' : 1, 'sy' : 1 }
				]
		},
	'panelScene2':
		{
			'bg' : 'res_common_bg_1',
			'xPos' : 50,
			'yPos' : 50,
			'panelWidth' : 600,
			'panelHeight' : 500,
			'texts' :
				[
					{
						'xPos' : 100,
						'yPos' : 40,
						'textId' : 'STR_PANEL1_SCENE_INFO',
						'effect' : { 'id' : 'typewriter', 'dt': 200 }
					},
				],
			'sprites' :
				[
					{ 'xPos' : 20, 'yPos' : 20, 'texture' : 'res_exclamation.png', 'sx' : 1, 'sy' : 1 }
				]
		},
	'panelScene3':
		{
			'bg' : 'res_common_bg_2',
			'xPos' : 50,
			'yPos' : 50,
			'panelWidth' : 600,
			'panelHeight' : 500,
			'texts' :
				[
					{
						'xPos' : 100,
						'yPos' : 40,
						'textId' : 'STR_TEAM_NAME',
						'effect' : null
					},
				],
			'sprites' :
				[
				]
		},
	'panelScene4':
		{
			'bg' : 'res_common_bg_2',
			'xPos' : 50,
			'yPos' : 50,
			'panelWidth' : 600,
			'panelHeight' : 500,
			'texts' :
				[
				],
			'sprites' :
				[
					{ 'xPos' : 200, 'yPos' : 200, 'texture' : 'res_gamename.png', 'sx' : 1, 'sy' : 1 }
				]
		}


}