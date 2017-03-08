Model.neuroml.resolveAllImportTypes();


G.addWidget(1).setMessage("Example of set of cells using the  <a target='_blank' href='http://izhikevich.org/publications/whichmod.htm'>Izhikevich spiking neuron model</a>.<br/><br/> The <b>original OSB project</b> for this model is <a target='_blank' href='http://www.opensourcebrain.org/projects/izhikevichmodel'>here</a>.");
Popup1.setPosition(950,98);
Popup1.setSize(260.8,474.8)
Popup1.setName("Description");

initOSBGeppetto("network","FiveCells")
showModelDescription(izhikevich)