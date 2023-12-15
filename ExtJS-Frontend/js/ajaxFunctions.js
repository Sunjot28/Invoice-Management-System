function addAjax() {
    var formValues = addForm.getForm().getValues();
    console.log(formValues);
    // Perform AJAX request to add a new record
    Ext.Ajax.request({
        url: "http://localhost:8080/Sakila/addinvoice", 
        method: "POST",
        jsonData: { invoice: formValues },
        success: function (response) {
            // Handle success
            var responseData = Ext.decode(response.responseText);
            console.log(responseData);
            Ext.toast({
                html: '<div style="text-align: center;">Invoice Added Successfully!</div>',
                align: "t",
                slideInDuration: 400,
                minWidth: 400,
            });
            invoiceStore.reload();
        },
        failure: function (response) {
            // Handle failure
            // addForm.close();
            Ext.toast({
                html: '<div style="text-align: center;"><b>Failed to add invoice!</b></div>',
                align: "t",
                slideInDuration: 400,
                minWidth: 400,
            });
            console.error("AJAX request failed", response);
        },
    });
}


function editAjax() {
    var formValues = editForm.getForm().getValues();
    console.log(formValues);
    // Perform AJAX request to add a new record
    Ext.Ajax.request({
        url: "http://localhost:8080/Sakila/editinvoice", 
        method: "POST",
        jsonData: { invoice: formValues },
        success: function (response) {
            // Handle success
            var responseData = Ext.decode(response.responseText);
            console.log(responseData);
            Ext.toast({
                html: '<div style="text-align: center;">Invoice Updated Successfully!</div>',
                align: "t",
                slideInDuration: 400,
                minWidth: 400,
            });
            //  refresh the grid after adding a new record
            invoiceStore.reload();
            isOpenStore.reload();
            isCloseStore.reload();
        },
        failure: function (response) {
            // Handle failure
            // addForm.close();
            Ext.toast({
                html: '<div style="text-align: center;"><b>Failed to update invoice!</b></div>',
                align: "t",
                slideInDuration: 400,
                minWidth: 400,
            });
            console.error("AJAX request failed", response);
        },
    });
}

function deleteAjax(idsToDel){
    Ext.Ajax.request({
        url: "http://localhost:8080/Sakila/deleteinvoice", 
        method: "POST",
        jsonData: { ids : idsToDel },
        success: function (response) {
            // Handle success
            var responseData = Ext.decode(response.responseText);
            console.log(responseData);
            Ext.toast({
                html: '<div style="text-align: center;">Invoice(s) Deleted Successfully!</div>',
                align: "t",
                slideInDuration: 400,
                minWidth: 400,
            });
            //  refresh the grid after adding a new record
            invoiceStore.reload();
            isDeletedStore.reload();
            isOpenStore.reload();
            isCloseStore.reload();
        },
        failure: function (response) {
            // Handle failure
            // addForm.close();
            Ext.toast({
                html: '<div style="text-align: center;"><b>Failed to delete invoice!</b></div>',
                align: "t",
                slideInDuration: 400,
                minWidth: 400,
            });
            console.error("AJAX request failed", response);
        },
    });
}

function approveAjax(idsToDel){
    Ext.Ajax.request({
        url: "http://localhost:8080/Sakila/approveinvoice", 
        method: "POST",
        jsonData: { ids : idsToDel },
        success: function (response) {
            // Handle success
            var responseData = Ext.decode(response.responseText);
            console.log(responseData);
            Ext.toast({
                html: '<div style="text-align: center;">Invoice(s) Approved Successfully!</div>',
                align: "t",
                slideInDuration: 400,
                minWidth: 400,
            });
            //  refresh the grid after adding a new record
            invoiceStore.reload();
            isOpenStore.reload();
            isCloseStore.reload();
        },
        failure: function (response) {
            // Handle failure
            // addForm.close();
            Ext.toast({
                html: '<div style="text-align: center;"><b>Failed to approve invoice!</b></div>',
                align: "t",
                slideInDuration: 400,
                minWidth: 400,
            });
            console.error("AJAX request failed", response);
        },
    });
}

function searchAjax(invoiceNo, customerId) {
    Ext.Ajax.request({
        url: 'http://localhost:8080/Sakila/advancesearch', 
        method: 'POST',
        jsonData: {
            invoiceNo: invoiceNo,
            customerId: customerId
        },
        success: function (response) {
            var responseData = Ext.decode(response.responseText);
            console.log(responseData.invoices);
            // var searchResults = responseData.invoices;
            // console.log(searchResults);
            invoiceStore.loadData(responseData.invoices);
        },
        failure: function (response) {
            console.error('Failed to send search data to the backend:', response);
        }
    });
}


// function searchAjax() {
//     var formValues = searchPopUpPanel.down("form").getValues();
//     Ext.Ajax.request({
//       url: "http://localhost:8080/Assessment/invoice/advancedsearch",
//       method: "POST",
//       jsonData: {
//         "invoice":{
//         "invoiceNo": formValues.invoiceNo,
//         "customerId": formValues.customerId,}
//       },
//       // params: {
//       //   invoiceNo: formValues.invoiceNo,
//       //   customerId: formValues.customerId,
//       // },
//       success: function (response) {
//         // Handle success response
//         console.log(response.responseText);
//         // Handle success response
//         var responseData = Ext.decode(response.responseText);
//         console.log(responseData);
  
//         // Assuming responseData contains the search results in JSON format
//         // You may need to adjust this based on the actual structure of your data
//         var searchResults = responseData.invoices;
//         console.log(searchResults);
  
//         // Update the store with new data
//         allInvStore.loadData(searchResults);
  
//         // Close the search popup
//         searchPopUpPanel.close();
//       },
//       failure: function (response) {
//         // Handle failure response
//         console.error(response.responseText);
//         searchPopUpPanel.close();
//       },
//     });
//   }
  







