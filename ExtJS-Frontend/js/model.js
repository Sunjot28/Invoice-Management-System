var model = Ext.define('Invoices', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'slNo', type: 'number' },
        { name: 'invoiceNo', type: 'string' },
        { name: 'stockCode', type: 'string' },
        { name: 'description', type: 'string' },
        { name: 'quantity', type: 'number' },
        { name: 'invoiceDate', type: 'date' },
        { name: 'unitPrice', type: 'float' },
        { name: 'customerID', type: 'number' },
        { name: 'country', type: 'string' },
        { name: 'isDeleted', type: 'string' },
        { name: 'isOpen', type: 'string' },
    ]
});