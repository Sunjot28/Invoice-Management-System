var addButton1 = Ext.create('Ext.Button', {
    text    : 'Add',
    scale   : 'medium',
    handler: function() {
        var addPopup = Ext.create('Ext.window.Window', {
            title: 'Add',
            layout: 'fit',
            items: [addForm],
            modal: true,
            width: 400,
            closeAction: 'hide', 
        });

        addPopup.show();
    }
});

var editButton1 = Ext.create('Ext.Button', {
    text    : 'Edit',
    scale   : 'medium',
    id : 'editBtn1',
    disabled: true,
    handler: function() {
        var selectedRows = allInvoicesGrid.getSelectionModel().getSelection();
        var selectedRow = selectedRows[0];
        console.log(selectedRow);
        editForm.getForm().setValues(selectedRow.data);
        var editPopup = Ext.create('Ext.window.Window', {
            title: 'Edit',
            layout: 'fit',
            items: [editForm],
            modal: true,
            width: 500,
            closeAction: 'hide', 
        });

        editPopup.show();
    }
});

var deleteButton1 = Ext.create('Ext.Button', {
    text: 'Delete',
    scale: 'medium',
    id : 'deleteBtn1',
    disabled: true,
    handler: function () {
        var deletePopup = Ext.create('Ext.window.Window', {
            title: 'Delete',
            layout: 'fit',
            items: [deletePanel],
            modal: true,
            width: 500,
            closeAction: 'hide',
        });

        deletePopup.show();
    }
});

var approveButton1 = Ext.create('Ext.Button', {
    text    : 'Approve',
    scale   : 'medium',
    id : 'approveBtn1',
    disabled: true,
    handler: function () {
        var approvePopup = Ext.create('Ext.window.Window', {
            title: 'Approve',
            layout: 'fit',
            items: [approvePanel],
            modal: true,
            width: 500,
            closeAction: 'hide',
        });

        approvePopup.show();
    }
});




var addButton2 = Ext.create('Ext.Button', {
    text    : 'Add',
    scale   : 'medium',
    handler: function() {
        var addPopup = Ext.create('Ext.window.Window', {
            title: 'Add',
            layout: 'fit',
            items: [addForm],
            modal: true,
            width: 400,
            closeAction: 'hide', 
        });

        addPopup.show();
    }
});

var editButton2 = Ext.create('Ext.Button', {
    text    : 'Edit',
    scale   : 'medium',
    id : 'editBtn2',
    disabled: true,
    handler: function() {
        var selectedRows = openInvoicesGrid.getSelectionModel().getSelection();
        var selectedRow = selectedRows[0];
        console.log(selectedRow);
        editForm.getForm().setValues(selectedRow.data);
        var editPopup = Ext.create('Ext.window.Window', {
            title: 'Edit',
            layout: 'fit',
            items: [editForm],
            modal: true,
            width: 500,
            closeAction: 'hide', 
        });

        editPopup.show();
    }
});

var deleteButton2 = Ext.create('Ext.Button', {
    text: 'Delete',
    scale: 'medium',
    id : 'deleteBtn2',
    disabled: true,
    handler: function () {
        var deletePopup = Ext.create('Ext.window.Window', {
            title: 'Delete',
            layout: 'fit',
            items: [deletePanel],
            modal: true,
            width: 500,
            closeAction: 'hide',
        });

        deletePopup.show();
    }
});

var approveButton2 = Ext.create('Ext.Button', {
    text    : 'Approve',
    scale   : 'medium',
    id : 'approveBtn2',
    disabled: true,
    handler: function () {
        var approvePopup = Ext.create('Ext.window.Window', {
            title: 'Approve',
            layout: 'fit',
            items: [approvePanel],
            modal: true,
            width: 500,
            closeAction: 'hide',
        });

        approvePopup.show();
    }
});


var addButton3 = Ext.create('Ext.Button', {
    text    : 'Add',
    scale   : 'medium',
    disabled: true,
    handler: function() {
        var addPopup = Ext.create('Ext.window.Window', {
            title: 'Add',
            layout: 'fit',
            items: [addForm],
            modal: true,
            width: 400,
            closeAction: 'hide', 
        });

        addPopup.show();
    }
});

var editButton3 = Ext.create('Ext.Button', {
    text    : 'Edit',
    scale   : 'medium',
    id : 'editBtn3', 
    disabled: true,
    handler: function() {
        var selectedRows = closeInvoicesGrid.getSelectionModel().getSelection();
        var selectedRow = selectedRows[0];
        console.log(selectedRow);
        editForm.getForm().setValues(selectedRow.data);
        var editPopup = Ext.create('Ext.window.Window', {
            title: 'Edit',
            layout: 'fit',
            items: [editForm],
            modal: true,
            width: 500,
            closeAction: 'hide', 
        });

        editPopup.show();
    }
});

var deleteButton3 = Ext.create('Ext.Button', {
    text: 'Delete',
    scale: 'medium',
    disabled: true,
    handler: function () {
        var deletePopup = Ext.create('Ext.window.Window', {
            title: 'Delete',
            layout: 'fit',
            items: [deletePanel],
            modal: true,
            width: 500,
            closeAction: 'hide',
        });

        deletePopup.show();
    }
});

var approveButton3 = Ext.create('Ext.Button', {
    text    : 'Approve',
    scale   : 'medium',
    disabled: true,
    handler: function () {
        var approvePopup = Ext.create('Ext.window.Window', {
            title: 'Approve',
            layout: 'fit',
            items: [approvePanel],
            modal: true,
            width: 500,
            closeAction: 'hide',
        });

        approvePopup.show();
    }
});



var addButton4 = Ext.create('Ext.Button', {
    text    : 'Add',
    scale   : 'medium',
    disabled: true,
    handler: function() {
        var addPopup = Ext.create('Ext.window.Window', {
            title: 'Add',
            layout: 'fit',
            items: [addForm],
            modal: true,
            width: 400,
            closeAction: 'hide', 
        });

        addPopup.show();
    }
});

var editButton4 = Ext.create('Ext.Button', {
    text    : 'Edit',
    scale   : 'medium',
    id : 'editBtn4',
    disabled: true,
    handler: function() {
        var selectedRows = closeInvoicesGrid.getSelectionModel().getSelection();
        var selectedRow = selectedRows[0];
        console.log(selectedRow);
        editForm.getForm().setValues(selectedRow.data);
        var editPopup = Ext.create('Ext.window.Window', {
            title: 'Edit',
            layout: 'fit',
            items: [editForm],
            modal: true,
            width: 500,
            closeAction: 'hide', 
        });

        editPopup.show();
    }
});

var deleteButton4 = Ext.create('Ext.Button', {
    text: 'Delete',
    scale: 'medium',
    id : 'deleteBtn4',
    disabled: true,
    handler: function () {
        var deletePopup = Ext.create('Ext.window.Window', {
            title: 'Delete',
            layout: 'fit',
            items: [deletePanel],
            modal: true,
            width: 500,
            closeAction: 'hide',
        });

        deletePopup.show();
    }
});

var approveButton4 = Ext.create('Ext.Button', {
    text    : 'Approve',
    scale   : 'medium',
    disabled: true,
    handler: function () {
        var approvePopup = Ext.create('Ext.window.Window', {
            title: 'Approve',
            layout: 'fit',
            items: [approvePanel],
            modal: true,
            width: 500,
            closeAction: 'hide',
        });

        approvePopup.show();
    }
});