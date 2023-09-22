Ext.define('classicApp.view.company.form.FormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.companyform',

   
    onSubmitForm: function (button, e, eOpts) {


        // récupèration du form
        let form_company = this.getView();
        // récupèration des champs saisis dans le formulaire
        let valuesForm = form_company.getValues();
        // on créé un objet de type compavy avec les valeurs du formualire
        let company = Ext.create('classicApp.model.Company', valuesForm);
        // validation des valeurs selon le validator défini dans le model
        if (company.isValid()) {
            // on récupère le store dans lequel on veut enregistrer l'entreprise
            let storeCompany = Ext.create('classicApp.store.Company');

            storeCompany.add(company);
            storeCompany.sync({
                success: function (record, operation) {

                    form_company.reset();
                    Ext.Msg.alert('Information', "L'entreprise a été ajoutée avec succès !");
                },
                failure: function (record, operation) {
                    Ext.Msg.alert('Information', "Il y a eu un problème, veuillez contacter l'administrateur.");
                }
            });
        }
        else {
            // affichage des erreurs dans le formulaire
            let errors = company.getValidation();
            Ext.Object.each(errors.data, function (field, errorMessage, myself) {
                if (errorMessage !== true) {
                    // on récupère le champ en erreur
                    let fieldForm = form_company.down('[name=' + field + "]");
                    // cette fonction permet de mettre en rouge l'erreur avec le message associé
                    fieldForm.markInvalid(errorMessage);
                   
                }
            });
        }
    }
});
