var header1 = Ext.create('Ext.container.Container', {
    xtype: 'container',
    itemId: 'myHeader1',
    layout: 'hbox', 
    
});

// var img1 = Ext.create('Ext.Img', {
//     src: './assets/High_Radius_logo.jpg',
//     height: 64,
//     width: 64
// });
// Ext.Viewport.add(img);

var header2 = Ext.create('Ext.container.Container', {
    xtype: 'container',
    itemId: 'myHeader2',
    layout: 'hbox',
    cls: 'header',
    items: [
        {
            xtype: 'component', 
            html: '<p>Invoice Managment</p>', 
            flex: 1 
        },
    ]
});