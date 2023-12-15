var isOpenStore = Ext.create('Ext.data.Store', { 
    model: 'Invoices', 
    pageSize: 10,
    autoLoad: true,
    proxy: { 
        type: 'ajax', 
        url: 'http://localhost:8080/Sakila/allisopen', 
        method: 'GET',
        reader: { 
            type: 'json', 
            rootProperty: 'invoices', 
            totalProperty: 'total',
        }}, 
});

var openInvoicesGrid = Ext.create('Ext.grid.Panel', {
    title: 'Open Invoices', 
    height: 475,
    store: isOpenStore,
    selModel: 'checkboxmodel',
    plugins: [{
        ptype: 'rowediting',
        clicksToEdit: 2
    }],
    listeners: {
        selectionchange: function (sm, selectedRecords) {
            var editButton = Ext.getCmp('editBtn2'); 
            var deleteButton = Ext.getCmp('deleteBtn2'); 
            var approveButton = Ext.getCmp('approveBtn2'); 

            if(selectedRecords.length === 1){
                editButton.enable(selectedRecords.length > 0);
            }
            else{
                editButton.disable(selectedRecords.length > 0);
            }
            if(selectedRecords.length > 0){
                deleteButton.enable(selectedRecords.length > 0);
                approveButton.enable(selectedRecords.length > 0);
            }
            else{
                deleteButton.disable(selectedRecords.length > 0);
                approveButton.disable(selectedRecords.length > 0);
            }
        }
    },
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
        store: isOpenStore, 
        dock: 'top',
        displayInfo: true,
        items: [addButton2, editButton2, deleteButton2, approveButton2]
    }],
});