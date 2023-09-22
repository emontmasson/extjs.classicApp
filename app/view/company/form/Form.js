
Ext.define('classicApp.view.company.form.Form', {
    extend: 'Ext.form.Panel',

    xtype: "companyform",
    requires: [
        'classicApp.view.company.form.FormController',
        'classicApp.view.company.form.FormModel'
    ],
    controller: 'companyform',
    width: 200,
    height: 250,
    viewModel: {
        type: 'companyform'
    },
   

    items: [
        {
            xtype: 'hiddenfield',
            name: 'id',
            id: "idCompany"
        },
        {
            xtype: 'textfield',
            label: 'Nom de l\'entreprise',
            name: 'name',

        },
        {
            xtype: 'button',
            text: 'Valider',
            handler: 'onSubmitForm'
        }]
});






