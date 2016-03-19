
function DataPanels(){};

window['DataPanels'] = DataPanels;

DataPanels.panels =
{
	'panelScene1':
		{
			'lifetime': 1000,
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
			'lifetime': 1000,
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
			'lifetime': 1000,
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
			'lifetime': 2000,
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
					{ 'xPos' : 650, 'yPos' : 80, 'texture' : 'res_president.png', 'sx' : 0.9, 'sy' : 0.8, 'alpha' : 1 },
				]
		},
	'panelScene5':
		{	
			'lifetime': 2000,
			'bg' : 'res_bg_panel_black.png',
			'xPos' : 100,
			'yPos' : 50,
			'panelWidth' : 900,
			'panelHeight' : 500,
			'texts' :
				[
					{
						'xPos' : 320,
						'yPos' : 230,
						'textId' : 'STR_PANEL5_STORY_1',
						'effect' : { 'id' : 'typewriter', 'dt': 200 }
					},
					{
						'xPos' : 320,
						'yPos' : 280,
						'textId' : 'STR_PANEL5_STORY_2',
						'effect' : { 'id' : 'typewriter', 'dt': 200 }
					},
					{
						'xPos' : 320,
						'yPos' : 330,
						'textId' : 'STR_PANEL5_STORY_3',
						'effect' : { 'id' : 'typewriter', 'dt': 200 }
					}
				],
			'sprites' :
				[
					{ 'xPos' : 90, 'yPos' : 140, 'texture' : 'res_secretary.png', 'sx' : 0.8, 'sy' : 0.7, 'alpha' : 1 },
				]
		},
	'panelScene6':
		{	
			'lifetime': 1000,
			'bg' : 'res_bg_panel_black.png',
			'xPos' : 100,
			'yPos' : 50,
			'panelWidth' : 900,
			'panelHeight' : 500,
			'sprites' :
				[
					{ 'xPos' : 330, 'yPos' : 220, 'texture' : 'res_phone1.png', 'sx' : 0.75, 'sy' : 0.75, 'alpha' : 1 }
				]
		},
	'panelScene7':
		{	
			'lifetime': 2500,
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
					{ 'xPos' : 100, 'yPos' : 310, 'texture' : 'res_phone2.png', 'sx' : 0.6, 'sy' : .6, 'alpha' : 1 },
				]
		},
	'panelScene8':
		{	
			'lifetime': 1500,
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
			'lifetime': 2000,
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
					{ 'xPos' : 100, 'yPos' : 310, 'texture' : 'res_phone2.png', 'sx' : 0.6, 'sy' : .6, 'alpha' : 1 },
				]
		},
	'panelScene10':
		{	
			'lifetime': 2000,
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
					{ 'xPos' : 630, 'yPos' : 100, 'texture' : 'res_secretary.png', 'sx' : 0.9, 'sy' : .8, 'alpha' : 1 },
				]
		},
	'panelScene11':
		{	
			'lifetime': 2500,
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
					{ 'xPos' : 100, 'yPos' : 310, 'texture' : 'res_phone2.png', 'sx' : 0.6, 'sy' : .6, 'alpha' : 1 },
				]
		},
		'panelScene12':
		{	
			'lifetime': 15000,
			'bg' : 'res_bg_panel_black.png',
			'xPos' : 100,
			'yPos' : 50,
			'panelWidth' : 900,
			'panelHeight' : 500,
			'sprites' :
				[	
					{ 'xPos' : 180, 'yPos' : 100, 'texture' : 'res_bg_panel_white.png', 'sx' : 6.5, 'sy' : 4, 'alpha' : 1 },
					{ 'xPos' : 290, 'yPos' : 150, 'texture' : 'res_clasificado.png', 'sx' : 0.6, 'sy' : 0.5, 'alpha' : 1 }
				],
			'texts' :
				[
					{
						'xPos' : 220,
						'yPos' : 210,
						'textId' : 'STR_PANEL12_STORY',
						'effect' : { 'id' : 'typewriter', 'dt': 200 }
					},

				],
			
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
							'yPos' : 100,
							'textId' : 'STR_QUESTION_TITTLE',
							'effect' : null
						},
						{
							'xPos' : 150,
							'yPos' : 200,
							'textId' : 'STR_QUESTION_GENERIC',
							'effect' : null
						},
						{
							'xPos' : 150,
							'yPos' : 275,
							'textId' : 'STR_QUESTION_GENERIC',
							'effect' : null
						},
						{
							'xPos' : 150,
							'yPos' : 350,
							'textId' : 'STR_QUESTION_GENERIC',
							'effect' : null
						},
						{
							'xPos' : 150,
							'yPos' : 425,
							'textId' : 'STR_QUESTION_GENERIC',
							'effect' : null
						},
						{
							'xPos' : 150,
							'yPos' : 500,
							'textId' : 'STR_QUESTION_GENERIC',
							'effect' : null
						}
					],
				'sprites' :
					[
						{ 'xPos' : 250, 'yPos' : 100, 'texture' : 'res_bg_panel_white.png', 'sx' : 5, 'sy' : 0.5, 'alpha' : 0.25, 'interactive' : false },
						{ 'xPos' : 150, 'yPos' : 200, 'texture' : 'res_bg_panel_white.png', 'sx' : 7, 'sy' : 0.4, 'alpha' : 0.25, 'interactive' : true },
						{ 'xPos' : 150, 'yPos' : 275, 'texture' : 'res_bg_panel_white.png', 'sx' : 7, 'sy' : 0.4, 'alpha' : 0.25, 'interactive' : true },
						{ 'xPos' : 150, 'yPos' : 350, 'texture' : 'res_bg_panel_white.png', 'sx' : 7, 'sy' : 0.4, 'alpha' : 0.25, 'interactive' : true },
						{ 'xPos' : 150, 'yPos' : 425, 'texture' : 'res_bg_panel_white.png', 'sx' : 7, 'sy' : 0.4, 'alpha' : 0.25, 'interactive' : true },
						{ 'xPos' : 150, 'yPos' : 500, 'texture' : 'res_bg_panel_white.png', 'sx' : 7, 'sy' : 0.4, 'alpha' : 0.25, 'interactive' : true }
					]
			},
	'panelIncorrect':
			{
				'bg' : 'res_bg_panel_black.png',
				'xPos' : 100,
				'yPos' : 50,
				'panelWidth' : 900,
				'panelHeight' : 500,
				'sprites' :
					[ 
						{ 'xPos' : 605, 'yPos' : 170, 'texture' : 'res_chair.png', 'sx' : 0.65, 'sy' : 0.55, 'alpha' : 1 },
						{ 'xPos' : 260, 'yPos' : 190, 'texture' : 'res_body2.png', 'sx' : 0.65, 'sy' : 0.55, 'alpha' : 1 },
						{ 'xPos' : 580, 'yPos' : 190, 'texture' : 'res_body1.png', 'sx' : 0.65, 'sy' : 0.55, 'alpha' : 1 },
						{ 'xPos' : 645, 'yPos' : 90, 'texture' : 'res_doll_17.png', 'sx' : 0.3, 'sy' : 0.3, 'alpha' : 1 },
						{ 'xPos' : 300, 'yPos' : 90, 'texture' : 'res_doll_15.png', 'sx' : 0.3, 'sy' : 0.3, 'alpha' : 1 },
						{ 'xPos' : 375, 'yPos' : 135, 'texture' : 'res_informate2.png', 'sx' : 0.3, 'sy' : 0.3, 'alpha' : 1 },
						{ 'xPos' : 260, 'yPos' : 450, 'texture' : 'res_informate.png', 'sx' : 0.4, 'sy' : 0.4, 'alpha' : 1 },
						{ 'xPos' : 615, 'yPos' : 450, 'texture' : 'res_informate.png', 'sx' : 0.4, 'sy' : 0.4, 'alpha' : 1 },
						//{ 'xPos' : 430, 'yPos' : 150, 'texture' : 'res_team_logo.png', 'sx' : 0.75, 'sy' : 0.75, 'alpha' : 1 },
						//{ 'xPos' : 430, 'yPos' : 150, 'texture' : 'res_team_logo.png', 'sx' : 0.75, 'sy' : 0.75, 'alpha' : 1 }
					]

			},
	'panelCorrect':
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
						'textId' : 'STR_WINNER_NAME',
						'effect' : null //{ 'id' : 'typewriter', 'dt': 200 }
					},
					{
						'xPos' : 400,
						'yPos' : 120,
						'textId' : 'STR_WINNER_PARTY',
						'effect' : null // { 'id' : 'typewriter', 'dt': 200 }
					},
					{
						'xPos' : 400,
						'yPos' : 170,
						'textId' : 'STR_WINNER_PROFESSION',
						'effect' : null // { 'id' : 'typewriter', 'dt': 200 }
					},
					{
						'xPos' : 400,
						'yPos' : 220,
						'textId' : 'STR_WINNER_AGE',
						'effect' : null //{ 'id' : 'typewriter', 'dt': 200 }
					},
					{
						'xPos' : 400,
						'yPos' : 270,
						'textId' : 'STR_WINNER_ORIGIN',
						'effect' : null //{ 'id' : 'typewriter', 'dt': 200 }
					}
				],
				'sprites' :
					[ 
						{ 'xPos' : 225, 'yPos' : 170, 'texture' : 'res_chair.png', 'sx' : 0.65, 'sy' : 0.55, 'alpha' : 1 },
						{ 'xPos' : 200, 'yPos' : 190, 'texture' : 'res_body1.png', 'sx' : 0.65, 'sy' : 0.55, 'alpha' : 1 },
						{ 'xPos' : 260, 'yPos' : 90, 'texture' : 'res_doll_17.png', 'sx' : 0.3, 'sy' : 0.3, 'alpha' : 1 },
						{ 'xPos' : 555, 'yPos' : 350, 'texture' : 'res_informate.png', 'sx' : 0.4, 'sy' : 0.4, 'alpha' : 1 },
					]

			}
}
