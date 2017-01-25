Model.neuroml.resolveAllImportTypes(function() { $(".osb-notification").hide(); });

Project.getActiveExperiment().playAll();

G.addWidget(6);
Connectivity1.setName("Connectivity matrix");
Connectivity1.setData(acnet2,{linkType:function(c){return GEPPETTO.ModelFactory.getAllVariablesOfType(c.getParent(),GEPPETTO.ModelFactory.geppettoModel.neuroml.synapse)[0].getId();}});

G.addWidget(1);
//Popup1.setMessage(Project.getActiveExperiment().getDescription());
Popup1.setMessage("Network model of primary auditory cortex in rodents by David Beeman, University of Colorado, Boulder.<br/><br/> The <b>original OSB project</b> for this model is <a target='_blank' href='http://opensourcebrain.org/projects/acnet2'>here</a> and what you are viewing now is a <b>prerecorded simulation</b> of the model, which was run in the NEURON simulator.<br/><br/>You can run your own simulations of this model by signing up to OSB, signing in, going to the <a target='_blank' href='http://opensourcebrain.org/projects/acnet2'>OSB project</a> and clicking on <b>Explore model</b>.")
Popup1.setName("Description");
G.incrementCameraPan(-0.1, 0)
Connectivity1.setPosition(1042,256)
Popup1.setPosition(116,318)
Popup1.setSize(256.8,441.8)
acnet2.baskets_12[0].select()

G.addWidget(0);
Plot1.setName("Primary Auditory Cortex Network - Some membrane potentials");
Plot1.setPosition(113, 90);
Plot1.setSize(230,445);
Plot1.plotData(acnet2.pyramidals_48[0].soma_0.v);
Plot1.plotData(acnet2.pyramidals_48[1].soma_0.v);
Plot1.plotData(acnet2.baskets_12[2].soma_0.v);

G.addBrightnessFunction(acnet2.pyramidals_48[0].soma_0, acnet2.pyramidals_48[0].soma_0.v, function(x){return (x+0.07)/0.1;});
G.addBrightnessFunction(acnet2.pyramidals_48[1].soma_0, acnet2.pyramidals_48[1].soma_0.v, function(x){return (x+0.07)/0.1;});
G.addBrightnessFunction(acnet2.baskets_12[2].soma_0, acnet2.baskets_12[2].soma_0.v, function(x){return (x+0.07)/0.1;});

// Tool Bar
var widthScreen = this.innerWidth;var heightScreen = this.innerHeight;var marginLeft = 100;var marginTop = 70;var marginRight = 10;var marginBottom = 50;var defaultWidgetWidth = 450;var defaultWidgetHeight = 500;var initialiseTreeWidget = function(title, posX, posY, widgetWidth, widgetHeight) {	widgetWidth = typeof widgetWidth !== 'undefined' ? widgetWidth : defaultWidgetWidth;	widgetHeight = typeof widgetHeight !== 'undefined' ? widgetHeight : defaultWidgetHeight;		var tv = G.addWidget(3);	tv.setSize(widgetHeight, widgetWidth);	tv.setName(title);	tv.setPosition(posX, posY);	return tv;};var initialiseControlPanel = function(){	var posX = 90;	var posY = 5;	var barDef = {    "OSB Control Panel": {        "Network Info": {            "Connectivity": {                "actions": [                	"if (GEPPETTO.ModelFactory.geppettoModel.neuroml.network){showConnectivityMatrix(acnet2)}"                ],                "icon": "gpt-make-group",                "label": "Connectivity",                "tooltip": "Loads the connectivity matrix widget"            },            "Model Description": {                "actions": [                    "showModelDescription(getMainType())"                ],                "icon": "gpt-pyramidal-cell",                "label": "Model Description",                "tooltip": "Information on the model"            },            "CellVisual": {		      "actions": [		      	"executeOnSelection(showVisualTreeView)"		      ],		      "icon": "gpt-pyramidal-cell",		      "label": "Cell Visual",		      "tooltip": "Visual information on selected cell"		    }        }    }};	G.addWidget(7).renderBar('OSB Control Panel', barDef['OSB Control Panel']);	ButtonBar1.setPosition(posX, posY).showTitleBar(false);	$("#ButtonBar1").find(".btn-lg").css("font-size","15px");};var mainPopup=undefined;	var showModelDescription = function(model){	if(mainPopup==undefined){		mainPopup=G.addWidget(1).setName('Model Description - ' + model.getName()).addCustomNodeHandler(customHandler, 'click').setPosition(95,140);	}	mainPopup.setData(model,[GEPPETTO.Resources.HTML_TYPE]);	};var getMainType = function(){	return (typeof(acnet2) === 'undefined')?GEPPETTO.ModelFactory.geppettoModel.neuroml.acnet2:acnet2.getType();};var addSuggestionsToSpotlight = function(){	var recordAll = {        "label": "Record all membrane potentials",        "actions": [            "var instances=Instances.getInstance(GEPPETTO.ModelFactory.getAllPotentialInstancesEndingWith('.v'));",            "GEPPETTO.ExperimentsController.watchVariables(instances,true);"        ],        "icon": "fa-dot-circle-o"    };		var recordSoma = {	        "label": "Record all membrane potentials at soma",	        "actions": [	            "var instances=Instances.getInstance(GEPPETTO.ModelFactory.getAllPotentialInstancesEndingWith('_0.v'));",	            "GEPPETTO.ExperimentsController.watchVariables(instances,true);"	        ],	        "icon": "fa-dot-circle-o"	    };		var lightUpSample = {        "label": "Link morphology colour to recorded membrane potentials",        "actions": [            "G.addBrightnessFunctionBulkSimplified(GEPPETTO.ModelFactory.instances.getInstance(GEPPETTO.ModelFactory.getAllPotentialInstancesEndingWith('.v'),false), function(x){return (x+0.07)/0.1;});"        ],        "icon": "fa-lightbulb-o"    };		GEPPETTO.Spotlight.addSuggestion(recordSoma, GEPPETTO.Resources.RUN_FLOW);	GEPPETTO.Spotlight.addSuggestion(recordAll, GEPPETTO.Resources.RUN_FLOW);	GEPPETTO.Spotlight.addSuggestion(lightUpSample, GEPPETTO.Resources.PLAY_FLOW);};var executeOnSelection = function(callback) {	if (GEPPETTO.ModelFactory.geppettoModel.neuroml.cell){		var csel = G.getSelection()[0];		if (typeof csel !== 'undefined') {			callback(csel);		} else {			G.addWidget(1).setMessage('No cell selected! Please select one of the cells and click here for information on its properties.').setName('Warning Message');		}	}};var showConnectivityMatrix = function(instance){	loadConnections();	if (GEPPETTO.ModelFactory.geppettoModel.neuroml.projection == undefined){		G.addWidget(1).setMessage('No connection found in this network').setName('Warning Message');	}else{		G.addWidget(6).setData(instance,				{linkType:					function(c){						if (GEPPETTO.ModelFactory.geppettoModel.neuroml.synapse != undefined){							var synapseType = GEPPETTO.ModelFactory.getAllVariablesOfType(c.getParent(),GEPPETTO.ModelFactory.geppettoModel.neuroml.synapse)[0];							if(synapseType != undefined){								return synapseType.getId();							}						}						return c.getName().split("-")[0];					}				}).setName('Connectivity Widget on network ' + instance.getId()).configViaGUI();	}};var showChannelTreeView = function(csel) {	if (GEPPETTO.ModelFactory.geppettoModel.neuroml.ionChannel){		var tv = initialiseTreeWidget('Ion Channels on cell ' + csel.getName(), widthScreen - marginLeft - defaultWidgetWidth, marginTop);				var ionChannel = GEPPETTO.ModelFactory.getAllTypesOfType(GEPPETTO.ModelFactory.geppettoModel.neuroml.ionChannel);		var ionChannelFiltered = [];		for (ionChannelIndex in ionChannel){			var ionChannelItem = ionChannel[ionChannelIndex];			if (ionChannelItem.getId()!='ionChannel'){				ionChannelFiltered.push(ionChannelItem);			}		}		tv.setData(ionChannelFiltered);	}};var showInputTreeView = function(csel) {	if (GEPPETTO.ModelFactory.geppettoModel.neuroml.pulseGenerator){		var tv = initialiseTreeWidget('Inputs on ' + csel.getId(), widthScreen - marginLeft - defaultWidgetWidth, marginTop);		var pulseGenerator = GEPPETTO.ModelFactory.getAllTypesOfType(GEPPETTO.ModelFactory.geppettoModel.neuroml.pulseGenerator);		var pulseGeneratorFiltered = [];		for (pulseGeneratorIndex in pulseGenerator){			var pulseGeneratorItem = pulseGenerator[pulseGeneratorIndex];			if (pulseGeneratorItem.getId()!='pulseGenerator'){				pulseGeneratorFiltered.push(pulseGeneratorItem);			}		}		tv.setData(pulseGeneratorFiltered);	}};var showVisualTreeView = function(csel) {	var visualWidgetWidth = 350;	var visualWidgetHeight = 400;	var tv = initialiseTreeWidget('Visual information on cell ' + csel.getName(), widthScreen - marginLeft - visualWidgetWidth, heightScreen - marginBottom - visualWidgetHeight, visualWidgetWidth, visualWidgetHeight);	tv.setData(csel.getType().getVisualType(), {		expandNodes : true	});};var customHandler = function(node, path, widget) {    var n;    try {        n = eval(path);    } catch (ex) {        node = undefined;    }    var metaType = n.getMetaType();    if (metaType == GEPPETTO.Resources.VARIABLE_NODE) {        G.addWidget(Widgets.PLOT).plotFunctionNode(n);    } else if (metaType == GEPPETTO.Resources.VISUAL_GROUP_NODE) {        n.show(true);    } else if (metaType == GEPPETTO.Resources.COMPOSITE_TYPE_NODE) {        var target = widget;        if (GEPPETTO.isKeyPressed("meta")) {            target = G.addWidget(1).addCustomNodeHandler(customHandler, 'click');        }        target.setName('Information for ' + n.getId()).setData(n,[GEPPETTO.Resources.HTML_TYPE]);   }};var showSelection = function(csel) {	if(mainPopup==undefined){		mainPopup=G.addWidget(1).addCustomNodeHandler(customHandler, 'click').setPosition(95, 140);	}    mainPopup.setName("Cell Information for " + csel.getType().getId()).setData(csel.getType(),[GEPPETTO.Resources.HTML_TYPE]);};initialiseControlPanel();addSuggestionsToSpotlight();var population = GEPPETTO.ModelFactory.getAllTypesOfType(GEPPETTO.ModelFactory.geppettoModel.neuroml.population);if (population.length == 2){	for (var i = 0; i<population.length; i++){		if (typeof population[i].getSize === "function" && population[i].getSize() == 1){			population[i].select();		}	}}

