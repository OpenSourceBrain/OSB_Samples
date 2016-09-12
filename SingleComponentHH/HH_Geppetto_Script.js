Project.getActiveExperiment().playAll();

G.addWidget(Widgets.PLOT);
Plot1.setName("Hodgkin-Huxley Spiking Neuron");

Plot1.setPosition(120, 90);
Plot1.setSize(230,465);
Plot1.plotData(hhcell.hhpop[0].v);
Plot1.plotData(hhcell.hhpop[0].spiking);

G.addWidget(Widgets.PLOT);

Plot2.setName("Gating Variables");
Plot2.setPosition(120,350);
Plot2.setSize(285,465)
Plot2.plotData(hhcell.hhpop[0].bioPhys1.membraneProperties.naChans.na.h.q);
Plot2.plotData(hhcell.hhpop[0].bioPhys1.membraneProperties.naChans.na.m.q);
Plot2.plotData(hhcell.hhpop[0].bioPhys1.membraneProperties.kChans.k.n.q);

Plot2.setLegend(hhcell.hhpop[0].bioPhys1.membraneProperties.naChans.na.h.q,"Sodium h.q");
Plot2.setLegend(hhcell.hhpop[0].bioPhys1.membraneProperties.naChans.na.m.q,"Sodium m.q");
Plot2.setLegend(hhcell.hhpop[0].bioPhys1.membraneProperties.kChans.k.n.q,"Potassium n.q");

G.addWidget(Widgets.POPUP);
Popup1.setMessage("The Hodgkin-Huxley model is a mathematical model that describes how action potentials in neurons are initiated and propagated. It is a set of nonlinear differential equations that approximates the electrical characteristics of excitable cells such as neurons. <br/><br/> The <b>original OSB project</b> for this model is <a target='_blank' href='http://www.opensourcebrain.org/projects/hodgkin-huxley-tutorial'>here</a> and what you are viewing now is a <b>prerecorded simulation</b> of the model, which was run in the NEURON simulator.<br/><br/>You can run your own simulations of this model by signing up to OSB, signing in, going to the <a target='_blank' href='http://www.opensourcebrain.org/projects/hodgkin-huxley-tutorial'>OSB project</a> and clicking on <b>Explore model</b>.");
Popup1.setName("Description");
Popup1.setPosition(1174,142)
Popup1.setSize(319.8,433.8)

G.addBrightnessFunction(hhcell.hhpop[0], hhcell.hhpop[0].v, function(x){return (x+0.07)/0.1;});

Project.getActiveExperiment().play({step:1});




