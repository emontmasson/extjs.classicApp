Ext.define('classicApp.model.Personnel', {
    extend: 'classicApp.model.Base',

    fields: [
        { name: 'name', type: 'string' },
        { name: 'age', type: 'int' },
        { name: 'phone', type: 'string' },
        { name: 'gender', type: 'string' },
        { name: 'username', type: 'string' },
        { name: 'company', type: 'string' },
        { name: 'alive', type: 'boolean', defaultValue: true }
    ],

    validators: {
        // vérifie la présence de l'âge
        age: 'presence',
        // le nom doit faire au minimum deux caractères
        name: { type: 'length', min: 2 },
        // vérifie que la valeur est soit Males soit Female
        gender: { type: 'inclusion', list: ['Male', 'Female'] },
        username: [
            // vérifie qua la valeur ne soit ni Admin ni Operator
            { type: 'exclusion', list: ['Admin', 'Operator'] },
            // le nom doit commencer par des lettres et finir par 2 ou 3 chiffres
            { type: 'format', matcher: /([a-z]+)[0-9]{2,3}/i }
        ]
    }

    
});
