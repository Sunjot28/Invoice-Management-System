Ext.onReady(function () {
    var myPanel = Ext.create('Ext.panel.Panel', {
        items: [header1, header2],
        renderTo: Ext.getBody()
    });

    var searchButton = Ext.create("Ext.Button", {
        text: "Advance Search",
        renderTo: Ext.getBody(),
        // align: 'right',
        style: {
            padding: "200px",
        },
        handler: function () {
            searchPanel.show();
        },
        style: {
            padding: "10px",
        },

        handler: function () {
            var buttonEl = this.getEl();
            searchPanel.showBy(buttonEl, "tl-bl", [0, 5]); // Adjust the [0, 5] offset as needed
        },
    });

    var tabPanel = Ext.create('Ext.tab.Panel', {
        width: '100%',
        // height: 500,
        renderTo: document.body,
        cls: 'tabPanel',
        activeTab: 0,

        items: [
            {
                title: 'All Invoices',
                items: [allInvoicesGrid],
            },
            {
                title: 'Open Invoices',
                items: [openInvoicesGrid],
            },
            {
                title: 'Close Invoices',
                items: [closeInvoicesGrid],
            },
            {
                title: 'Deleted Invoices',
                items: [deleteInvoicesGrid],
            },
            {
                title: 'Analytics',
                html: 'Coming Soon...'
            }
        ]
    });
});

