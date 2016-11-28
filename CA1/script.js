
ca1.CA1_CG[0].setGeometryType('cylinders')

Model.neuroml.morphology_CA1.kad_dendrite_group.show(true)

G.addWidget(1).setMessage("Hippocampal CA1 pyramidal cell from <a target='_blank' href='http://www.ncbi.nlm.nih.gov/pubmed/16293591?dopt=Abstract'>M. Migliore, M. Ferrante, GA Ascoli (2005)</a>. The model shows how the back- and forward propagation of action potentials in the oblique dendrites of CA1 neurons could be modulated by local properties such as morphology or active conductances.<br/><br/> The <b>original OSB project</b> for this model is <a target='_blank' href='http://www.opensourcebrain.org/projects/ca1pyramidalcell'>here</a>.");
Popup1.setPosition(950,98);
Popup1.setSize(260.8,474.8)
Popup1.setName("Description");

initOSBGeppetto("cell","CA1PyramidalCell")

showModelDescription(ca1)