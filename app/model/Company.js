Ext.define('classicApp.model.Company', {
    extend: 'Ext.data.Model',
    fields: [
        {
            name: 'name',
            type: 'string'
        }
    ],



    validators: {
        //name: { type: 'format', matcher: /([a-z]+[_-' ]*[a-z]+)/i }
    name: [
        // vérifie qua la valeur ne soit ni Admin ni Operator
     { type: 'presence' },
        
      
      { type: 'format', matcher: /^([a-z]+[ '-]?[a-z]+)*$/i }
    ]
    }


});



