var isDeletedStore = Ext.create('Ext.data.Store', { 
    model: 'Invoices', 
    pageSize: 10,
    autoLoad: true,
    proxy: { 
        type: 'ajax', 
        url: 'http://localhost:8080/Sakila/allisdeleted', 
        method: 'GET',
        reader: { 
            type: 'json', 
            rootProperty: 'invoices', 
            totalProperty: 'total',
        }}, 
});

var deleteInvoicesGrid = Ext.create('Ext.grid.Panel', {
    title: 'Deleted Invoices', 
    height: 475,
    store: isDeletedStore,
    selModel: 'checkboxmodel',
    plugins: [{
        ptype: 'rowediting',
        clicksToEdit: 2
    }],
    columns: [{
        text: 'Sl_no',
        dataIndex: 'slNo', flex: 1,
    }, {
        text: 'InvoiceNo',
        dataIndex: 'invoiceNo', flex: 1,
    }, {
        text: 'StockCode',
        dataIndex: 'stockCode', flex: 1,
    }, {
        text: 'Description',
        dataIndex: 'description', flex: 1,
    }, {
        text: 'Quantity',
        dataIndex: 'quantity', flex: 1,
    }, {
        text: 'InvoiceDate',
        dataIndex: 'invoiceDate', flex: 1,
    }, {
        text: 'UnitPrice',
        dataIndex: 'unitPrice', flex: 1,
    }, {
        text: 'CustomerID',
        dataIndex: 'customerID', flex: 1,
    }, {
        text: 'Country',
        dataIndex: 'country', flex: 1,
    }, {
        text: 'isDeleted',
        dataIndex: 'isDeleted', flex: 1,
    }, {
        text: 'isOpen',
        dataIndex: 'isOpen', flex: 1,
    }
],
    dockedItems: [{
        xtype: 'pagingtoolbar',
        store: isDeletedStore, 
        dock: 'top',
        displayInfo: true,
        items: [addButton3, editButton3, deleteButton3, approveButton3]
    }],
});