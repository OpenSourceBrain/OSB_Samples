Model.neuroml.resolveAllImportTypes(function() { $(".osb-notification").hide(); });

Project.getActiveExperiment().playAll();

G.addWidget(6);
Connectivity1.setName("Connectivity matrix");
Connectivity1.setData(acnet2,{linkType:function(c){return GEPPETTO.ModelFactory.getAllVariablesOfType(c.getParent(),GEPPETTO.ModelFactory.geppettoModel.neuroml.synapse)[0].getId();}});

G.addWidget(1);
//Popup1.setMessage(Project.getActiveExperiment().getDescription());
Popup1.setMessage("Network model of primary auditory cortex in rodents by David Beeman, University of Colorado, Boulder.<br/><br/> The <b>original OSB project</b> for this model can be found <a target='_blank' href='http://opensourcebrain.org/projects/acnet2'>here</a> and what you are viewing now is a <b>prerecorded simulation</b> of the model, which was run in the NEURON simulator.<br/><br/>You can run your own simulations of this model by signing up to OSB, signing in, going to the <a target='_blank' href='http://opensourcebrain.org/projects/acnet2'>OSB project</a> and clicking on <b>Explore model</b>.")
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

initOSBGeppetto("network","acnet2")
