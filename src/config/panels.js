
function DataPanels(){};

window['DataPanels'] = DataPanels;

DataPanels.panels =
{
	'panelScene1':
		{
			'bg' : 'res_bg_panel_black.png',
			'xPos' : 100,
			'yPos' : 50,
			'panelWidth' : 900,
			'panelHeight' : 500,
			'texts' :
				[
					{
						'xPos' : 380,
						'yPos' : 220,
						'textId' : 'STR_PANEL2_WARNING',
						'effect' : null//{ 'id' : 'typewriter', 'dt': 200 }
					},
					{
						'xPos' : 400,
						'yPos' : 260,
						'textId' : 'STR_PANEL2_WARNING_INFO',
						'effect' : null//{ 'id' : 'typewriter', 'dt': 200 }
					},
				],
			'sprites' :
				[
					{ 'xPos' : 295, 'yPos' : 200, 'texture' : 'res_bg_panel_white.png', 'sx' : 4, 'sy' : 1.5, 'alpha' : 0.5 },
					{ 'xPos' : 220, 'yPos' : 200, 'texture' : 'res_warning_sign.png', 'sx' : 1, 'sy' : 1, 'alpha' : 1 },
				]
		},
	'panelScene2':
		{
			'bg' : 'res_bg_panel_black.png',
			'xPos' : 100,
			'yPos' : 50,
			'panelWidth' : 900,
			'panelHeight' : 500,
			'texts' :
				[
					{
						'xPos' : 250,
						'yPos' : 200,
						'textId' : 'STR_TEAM_NAME_1',
						'effect' : null
					},
					{
						'xPos' : 450,
						'yPos' : 250,
						'textId' : 'STR_TEAM_NAME_2',
						'effect' : null
					},
				],
			'sprites' :
				[
					{ 'xPos' : 430, 'yPos' : 350, 'texture' : 'res_jne_logo.png', 'sx' : 0.5, 'sy' : 0.5, 'alpha' : 1 }
				]
		},
	'panelScene3':
		{
			'bg' : 'res_bg_panel_black.png',
			'xPos' : 100,
			'yPos' : 50,
			'panelWidth' : 900,
			'panelHeight' : 500,
			'texts' :
				[
					{
						'xPos' : 450,
						'yPos' : 450,
						'textId' : 'STR_PATRIOTA',
						'effect' : null
					},
				],
			'sprites' :
				[
					{ 'xPos' : 430, 'yPos' : 150, 'texture' : 'res_team_logo.png', 'sx' : 0.75, 'sy' : 0.75, 'alpha' : 1 }
				]
		},
	'panelScene4':
		{
			'bg' : 'res_bg_panel_black.png',
			'xPos' : 100,
			'yPos' : 50,
			'panelWidth' : 900,
			'panelHeight' : 500,
			'texts' :
				[
					{
						'xPos' : 150,
						'yPos' : 180,
						'textId' : 'STR_PANEL4_STORY_1',
						'effect' : { 'id' : 'typewriter', 'dt': 200 }
					},
					{
						'xPos' : 150,
						'yPos' : 230,
						'textId' : 'STR_PANEL4_STORY_2',
						'effect' : { 'id' : 'typewriter', 'dt': 200 }
					},
					{
						'xPos' : 150,
						'yPos' : 280,
						'textId' : 'STR_PANEL4_STORY_3',
						'effect' : { 'id' : 'typewriter', 'dt': 200 }
					},
				],
			'sprites' :
				[
					{ 'xPos' : 650, 'yPos' : 180, 'texture' : 'res_bg_panel_white.png', 'sx' : 4, 'sy' : 1.5, 'alpha' : 1 },
				]
		},
	'panelScene5':
		{
			'bg' : 'res_bg_panel_black.png',
			'xPos' : 100,
			'yPos' : 50,
			'panelWidth' : 900,
			'panelHeight' : 500,
			'texts' :
				[
					{
						'xPos' : 280,
						'yPos' : 230,
						'textId' : 'STR_PANEL5_STORY_1',
						'effect' : { 'id' : 'typewriter', 'dt': 200 }
					},
					{
						'xPos' : 280,
						'yPos' : 280,
						'textId' : 'STR_PANEL5_STORY_2',
						'effect' : { 'id' : 'typewriter', 'dt': 200 }
					},
					{
						'xPos' : 280,
						'yPos' : 330,
						'textId' : 'STR_PANEL5_STORY_3',
						'effect' : { 'id' : 'typewriter', 'dt': 200 }
					}
				],
			'sprites' :
				[
					{ 'xPos' : 100, 'yPos' : 200, 'texture' : 'res_bg_panel_white.png', 'sx' : 4, 'sy' : 1.5, 'alpha' : 1 },
				]
		},
	'panelScene6':
		{
			'bg' : 'res_bg_panel_black.png',
			'xPos' : 100,
			'yPos' : 50,
			'panelWidth' : 900,
			'panelHeight' : 500,
			'sprites' :
				[
					{ 'xPos' : 430, 'yPos' : 150, 'texture' : 'res_team_logo.png', 'sx' : 0.75, 'sy' : 0.75, 'alpha' : 1 }
				]
		},
	'panelScene7':
		{
			'bg' : 'res_bg_panel_black.png',
			'xPos' : 100,
			'yPos' : 50,
			'panelWidth' : 900,
			'panelHeight' : 500,
			'texts' :
				[
					{
						'xPos' : 400,
						'yPos' : 100,
						'textId' : 'STR_PANEL7_STORY_1',
						'effect' : { 'id' : 'typewriter', 'dt': 200 }
					},
					{
						'xPos' : 400,
						'yPos' : 150,
						'textId' : 'STR_PANEL7_STORY_2',
						'effect' : { 'id' : 'typewriter', 'dt': 200 }
					},
					{
						'xPos' : 400,
						'yPos' : 200,
						'textId' : 'STR_PANEL7_STORY_3',
						'effect' : { 'id' : 'typewriter', 'dt': 200 }
					},
					{
						'xPos' : 400,
						'yPos' : 250,
						'textId' : 'STR_PANEL7_STORY_4',
						'effect' : { 'id' : 'typewriter', 'dt': 200 }
					},
					{
						'xPos' : 400,
						'yPos' : 300,
						'textId' : 'STR_PANEL7_STORY_5',
						'effect' : { 'id' : 'typewriter', 'dt': 200 }
					},
					{
						'xPos' : 400,
						'yPos' : 350,
						'textId' : 'STR_PANEL7_STORY_6',
						'effect' : { 'id' : 'typewriter', 'dt': 200 }
					}
				],
			'sprites' :
				[
					{ 'xPos' : 100, 'yPos' : 350, 'texture' : 'res_bg_panel_white.png', 'sx' : 4, 'sy' : 1.5, 'alpha' : 1 },
				]
		},
	'panelScene8':
		{
			'bg' : 'res_bg_panel_black.png',
			'xPos' : 100,
			'yPos' : 50,
			'panelWidth' : 900,
			'panelHeight' : 500,
			'texts' :
				[
					{
						'xPos' : 465,
						'yPos' : 270,
						'textId' : 'STR_PANEL8_DOTS',
						'effect' : { 'id' : 'typewriter', 'dt': 800 }
					},
					{
						'xPos' : 305,
						'yPos' : 430,
						'textId' : 'STR_PANEL8_STORY',
						'effect' : null //{ 'id' : 'typewriter', 'dt': 200 }
					}
				],
		},
	'panelScene9':
		{
			'bg' : 'res_bg_panel_black.png',
			'xPos' : 100,
			'yPos' : 50,
			'panelWidth' : 900,
			'panelHeight' : 500,
			'texts' :
				[
					{
						'xPos' : 400,
						'yPos' : 200,
						'textId' : 'STR_PANEL9_STORY_1',
						'effect' : { 'id' : 'typewriter', 'dt': 800 }
					},
					{
						'xPos' : 400,
						'yPos' : 250,
						'textId' : 'STR_PANEL9_STORY_2',
						'effect' : { 'id' : 'typewriter', 'dt': 200 }
					}
				],
			'sprites' :
				[
					{ 'xPos' : 100, 'yPos' : 350, 'texture' : 'res_bg_panel_white.png', 'sx' : 4, 'sy' : 1.5, 'alpha' : 1 },
				]
		},
	'panelScene10':
		{
			'bg' : 'res_bg_panel_black.png',
			'xPos' : 100,
			'yPos' : 50,
			'panelWidth' : 900,
			'panelHeight' : 500,
			'texts' :
				[
					{
						'xPos' : 150,
						'yPos' : 150,
						'textId' : 'STR_PANEL10_STORY_1',
						'effect' : { 'id' : 'typewriter', 'dt': 800 }
					},
					{
						'xPos' : 150,
						'yPos' : 200,
						'textId' : 'STR_PANEL10_STORY_2',
						'effect' : { 'id' : 'typewriter', 'dt': 200 }
					},
					{
						'xPos' : 150,
						'yPos' : 250,
						'textId' : 'STR_PANEL10_STORY_3',
						'effect' : { 'id' : 'typewriter', 'dt': 200 }
					}
				],
			'sprites' :
				[
					{ 'xPos' : 630, 'yPos' : 200, 'texture' : 'res_bg_panel_white.png', 'sx' : 4, 'sy' : 1.5, 'alpha' : 1 },
				]
		},
	'panelScene11':
		{
			'bg' : 'res_bg_panel_black.png',
			'xPos' : 100,
			'yPos' : 50,
			'panelWidth' : 900,
			'panelHeight' : 500,
			'texts' :
				[
					{
						'xPos' : 400,
						'yPos' : 120,
						'textId' : 'STR_PANEL11_STORY_1',
						'effect' : { 'id' : 'typewriter', 'dt': 200 }
					},
					{
						'xPos' : 400,
						'yPos' : 170,
						'textId' : 'STR_PANEL11_STORY_2',
						'effect' : { 'id' : 'typewriter', 'dt': 200 }
					},
					{
						'xPos' : 400,
						'yPos' : 220,
						'textId' : 'STR_PANEL11_STORY_3',
						'effect' : { 'id' : 'typewriter', 'dt': 200 }
					},
					{
						'xPos' : 400,
						'yPos' : 270,
						'textId' : 'STR_PANEL11_STORY_4',
						'effect' : { 'id' : 'typewriter', 'dt': 200 }
					},
					{
						'xPos' : 400,
						'yPos' : 320,
						'textId' : 'STR_PANEL11_STORY_5',
						'effect' : { 'id' : 'typewriter', 'dt': 200 }
					},
				],
			'sprites' :
				[
					{ 'xPos' : 100, 'yPos' : 350, 'texture' : 'res_bg_panel_white.png', 'sx' : 4, 'sy' : 1.5, 'alpha' : 1 },
				]
		},
  'panelQuestions':
			{
				'bg' : 'res_bg_panel_black.png',
				'xPos' : 100,
				'yPos' : 50,
				'panelWidth' : 900,
				'panelHeight' : 500,
				'texts' :
					[
						{
							'xPos' : 450,
							'yPos' : 450,
							'textId' : 'STR_QUESTION',
							'effect' : null
						},
						{
							'xPos' : 450,
							'yPos' : 450,
							'textId' : 'STR_QUESTION',
							'effect' : null
						},
						{
							'xPos' : 450,
							'yPos' : 450,
							'textId' : 'STR_QUESTION',
							'effect' : null
						},
						{
							'xPos' : 450,
							'yPos' : 450,
							'textId' : 'STR_QUESTION',
							'effect' : null
						},
						{
							'xPos' : 450,
							'yPos' : 450,
							'textId' : 'STR_QUESTION',
							'effect' : null
						},
						{
							'xPos' : 450,
							'yPos' : 450,
							'textId' : 'STR_QUESTION',
							'effect' : null
						}
					],
				'sprites' :
					[
						{ 'xPos' : 430, 'yPos' : 150, 'texture' : 'res_team_logo.png', 'sx' : 0.75, 'sy' : 0.75, 'alpha' : 1 },
						{ 'xPos' : 430, 'yPos' : 150, 'texture' : 'res_team_logo.png', 'sx' : 0.75, 'sy' : 0.75, 'alpha' : 1 },
						{ 'xPos' : 430, 'yPos' : 150, 'texture' : 'res_team_logo.png', 'sx' : 0.75, 'sy' : 0.75, 'alpha' : 1 },
						{ 'xPos' : 430, 'yPos' : 150, 'texture' : 'res_team_logo.png', 'sx' : 0.75, 'sy' : 0.75, 'alpha' : 1 },
						{ 'xPos' : 430, 'yPos' : 150, 'texture' : 'res_team_logo.png', 'sx' : 0.75, 'sy' : 0.75, 'alpha' : 1 },
						{ 'xPos' : 430, 'yPos' : 150, 'texture' : 'res_team_logo.png', 'sx' : 0.75, 'sy' : 0.75, 'alpha' : 1 }
					]
			}
}
