var addForm = Ext.create("Ext.form.Panel", {
  bodyPadding: 5,
  width: 350,
  layout: "anchor",
  defaults: {
    anchor: "100%",
  },
  defaultType: "textfield",
  items: [
    {
      fieldLabel: "Sl No",
      name: "slNo",
    },
    {
      fieldLabel: "Invoice Number",
      name: "invoiceNo",
    },
    {
      fieldLabel: "Stock Code",
      name: "stockCode",
    },
    {
      fieldLabel: "Quantity",
      name: "quantity",
    },
    {
      fieldLabel: "Invoice Date",
      name: "invoiceDate",
    },
    {
      fieldLabel: "Unit Price",
      name: "unitPrice",
    },
    {
      fieldLabel: "Customer ID",
      name: "customerId",
    },
    {
      fieldLabel: "Country",
      name: "country",
    },
    {
      fieldLabel: "Description",
      name: "description",
    },
    {
      fieldLabel: "isOpen",
      name: "isOpen",
    },
  ],
  buttons: [
    {
      text: "Save",
      handler: function () {
        var form = this.up("form").getForm();
        if(form.isValid()){
          addAjax();
        }
        this.up("form").getForm().reset();
        this.up("window").hide();
      },
    },
    {
      text: "Cancel",
      handler: function () {
        this.up("form").getForm().reset();
        this.up("window").hide();
      },
    },
  ],
});


var editForm = Ext.create("Ext.form.Panel", {
  bodyPadding: 5,
  width: 350,
  layout: "anchor",
  defaults: {
    anchor: "100%",
  },
  defaultType: "textfield",
  items: [
    {
      fieldLabel: "Sl No",
      name: "slNo",
    },
    {
      fieldLabel: "Quantity",
      name: "quantity",
    },
    {
      fieldLabel: "Description",
      name: "description",
    }, 
  ],
  buttons: [
    {
      text: "Save",
      handler: function () {
        var form = this.up("form").getForm();
        if(form.isValid()){
          editAjax();
        }
        this.up("form").getForm().reset();
        this.up("window").hide();
      },
    },
    {
      text: "Cancel",
      handler: function () {
        this.up("form").getForm().reset();
        this.up("window").hide();
      },
    },
  ],
});

var deletePanel = Ext.create("Ext.panel.Panel", {
  width: 350,
  bodyPadding: 10,
  layout: "anchor",
  defaults: {
    anchor: "100%",
  },
  html: "Do you want to delete the selected record(s)?",
  buttons: [
    {
      text: "Yes",
      handler: function () {
        var selectedRows1 = allInvoicesGrid.getSelectionModel().getSelection();
        var selectedRows2 = openInvoicesGrid.getSelectionModel().getSelection();
        var selectedRows3 = closeInvoicesGrid.getSelectionModel().getSelection();

        if(selectedRows1.length > 0){
          var idsToDel = [];
          Ext.each(selectedRows1, function(record){
            idsToDel.push(record.get("slNo"));
          });
        }
        else if(selectedRows2.length > 0){
          var idsToDel = [];
          Ext.each(selectedRows2, function(record){
            idsToDel.push(record.get("slNo"));
          });
        }
        else if(selectedRows3.length > 0){
          var idsToDel = [];
          Ext.each(selectedRows3, function(record){
            idsToDel.push(record.get("slNo"));
          });
        }
        deleteAjax(idsToDel);
        this.up("window").close();
      },
    },
    {
      text: "No",
      handler: function () {
        this.up("window").close();
      },
    },
  ],
});

var approvePanel = Ext.create("Ext.panel.Panel", {
  width: 350,
  bodyPadding: 10,
  layout: "anchor",
  defaults: {
    anchor: "100%",
  },
  html: "Do you want to approve the selected record(s)?",
  buttons: [
    {
      text: "Yes",
      handler: function () {
        var selectedRows1 = allInvoicesGrid.getSelectionModel().getSelection();
        var selectedRows2 = openInvoicesGrid.getSelectionModel().getSelection();
        var selectedRows3 = closeInvoicesGrid.getSelectionModel().getSelection();
        
        if(selectedRows1.length > 0){
          var idsToDel = [];
          Ext.each(selectedRows1, function(record){
            idsToDel.push(record.get("slNo"));
          });
        }
        else if(selectedRows2.length > 0){
          var idsToDel = [];
          Ext.each(selectedRows2, function(record){
            idsToDel.push(record.get("slNo"));
          });
        }
        else if(selectedRows3.length > 0){
          var idsToDel = [];
          Ext.each(selectedRows3, function(record){
            idsToDel.push(record.get("slNo"));
          });
        }
        approveAjax(idsToDel);
        this.up("window").close();
      },
    },
    {
      text: "No",
      handler: function () {
        this.up("window").close();
      },
    },
  ],
});


var searchPanel = Ext.create("Ext.panel.Panel", {
  title: "Search by Invoice Number or Customer ID",
  collapsible: true,
  //   collapsed: true, // Set to true to have the panel initially collapsed (hidden)
  floating: true,
  // width: "90%",
  height: 150,
  listeners: {
    collapse: function () {
      this.hide();
    },
  },
  //   hidden: true,
  items: [
    {
      xtype: "container",
      layout: "hbox",
      items: [
        {
          xtype: "textfield",
          fieldLabel: "Invoice Number",
          labelWidth: 100,
          margin: "10 10 10 10",
          name: "invoiceNumber",
        },
        {
          xtype: "textfield",
          fieldLabel: "Customer ID",
          labelWidth: 100,
          margin: "10 10 10 10",
          name: "customerId",
        },
      ],
    },

    {
      xtype: "container",
      layout: "hbox",
      padding: "6px 255px",
      items: [
        {
          xtype: "button",
          text: "Clear",
          margin: "0 20px 0 0",
          handler: function () {
            this.up("textfield").getForm().reset();
            // this.up("window").hide();
          },
        },
        {
          xtype: "button",
          text: "Search",
          handler: function () {
            var invoiceNumber = searchPanel.down('[name=invoiceNumber]').getValue();
            var customerId = searchPanel.down('[name=customerId]').getValue();

            // Call the Ajax function to send data to the backend
            searchAjax(invoiceNumber, customerId);

            searchPanel.hide();
        },
        },
      ],
    },
  ],
});

// function updateGrid(data) {
//   // Assuming 'invoiceGrid' is your ExtJS grid
//   var invoiceGrid = Ext.getCmp('invoiceGrid');

//   // Assuming 'invoiceStore' is your ExtJS store
//   var invoiceStore = invoiceGrid.getStore();

//   // Load the data into the store
//   invoiceStore.loadData(data);
// }


