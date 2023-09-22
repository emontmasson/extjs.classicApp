/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'classicApp.Application',

    name: 'classicApp',

    requires: [
        // This will automatically load all classes in the classicApp namespace
        // so that application classes do not need to require each other.
        'classicApp.*'
    ],

    // The name of the initial view to create.
    mainView: 'classicApp.view.main.Main'
});


var user = Ext.create('classicApp.model.Personnel', {
    name: 'Ed',
    gender: 'Male',
    username: 'Admin'
});

var isValid = user.getValidation().isValid();

// affichage des erreurs dans le formulaire
let errors = user.getValidation();
Ext.Object.each(errors.data, function (field, errorMessage, myself) {
    if (errorMessage !== true) {
       console.log(errorMessage);
    }
});

console.log(isValid);

/*
// création de l'objet
var company = Ext.create('classicApp.model.Company', { name: 'Liddl' });
// on récupère le store dans lequel on veut enregistrer l'entreprise
var storeCompany = Ext.create('classicApp.store.Company');
// on passe au modèle le proxy du store
//classicApp.model.Company.setProxy(storeCompany.getProxy());
// on enregistre
//company.save();
storeCompany.add(company);
storeCompany.sync();*/

// instanciation du store
/*var storeCompany = Ext.create('classicApp.store.Company');

// récupération l'entreprise dont l'id est 1
storeCompany.filter({
    property: 'id',
    value: 10,
    operator: '<'
});


console.log(storeCompany.getData().items);*/
            





