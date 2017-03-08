Model.neuroml.resolveAllImportTypes();

G.addWidget(1).setMessage("Layer 2/3 pyramidal cell model from the <a target='_blank' href='https://bbp.epfl.ch/nmc-portal/microcircuit'>Blue Brain Project's Neocortical Microcircuit Collaboration Portal</a>.<br/><br/> The <b>original OSB project</b> for this model is <a target='_blank' href='http://opensourcebrain.org/projects/blue-brain-project-showcase'>here</a>.");
Popup1.setPosition(950,98);
Popup1.setSize(260.8,474.8)
Popup1.setName("Description");


initOSBGeppetto("cell","cADpyr229_L23_PC_5ecbf9b163")
showModelDescription(l23)
l23.Pop_cADpyr229_L23_PC_5ecbf9b163_0_0[0].select()
Model.neuroml.morphology.Ih_apical.show(true)