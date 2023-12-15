package com.highradius.action;

import java.util.List;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import com.highradius.manager.InvoiceManager;
import com.highradius.pojo.Invoice;

public class Action {
	private List<Invoice> invoices;
	private List<Integer> ids;
	private String invoiceNo;
	private int customerId;
	int start;
	int limit;
	private int Total;
	public InvoiceManager invoicemanager;
	private Invoice invoice;
	
	public int getTotal() {
		return Total;
	}

	public void setTotal(int total) {
		Total = total;
	}

	public int getStart() {
		return start;
	}

	public void setStart(int start) {
		this.start = start;
	}

	public int getLimit() {
		return limit;
	}

	public void setLimit(int limit) {
		this.limit = limit;
	}

	public String getInvoiceNo() {
		return invoiceNo;
	}

	public void setInvoiceNo(String invoiceNo) {
		this.invoiceNo = invoiceNo;
	}

	public int getCustomerId() {
		return customerId;
	}

	public void setCustomerId(int customerId) {
		this.customerId = customerId;
	}

	public List<Integer> getIds() {
		return ids;
	}

	public void setIds(List<Integer> ids) {
		this.ids = ids;
	}
	
	public Invoice getInvoice() {
		return invoice;
	}

	public void setInvoice(Invoice invoice) {
		this.invoice = invoice;
	}

	public List<Invoice> getInvoices() {
		return invoices;
	}

	public void setInvoices(List<Invoice> invoices) {
		this.invoices = invoices;
	}

	public String allinvoices() {
		String s="ERROR";
		ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
		invoicemanager = (InvoiceManager) context.getBean("invoiceManagerImpl");
		invoices = invoicemanager.getallinvoices(start, limit);
		Total = invoicemanager.totalRecords();
		System.out.println(Total);
		if (invoices!=null)
			s = "Shown";
		System.out.println(s + "\n" + invoices);
		return s;
	}
	
	public String allisopen() {
		String s="ERROR";
		ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
		invoicemanager = (InvoiceManager) context.getBean("invoiceManagerImpl");
		invoices=invoicemanager.getallisopen(start, limit);
		Total = invoicemanager.totalRecords();
		if (invoices!=null)
			s = "Shown";
		System.out.println(s + "\n" + invoices);
		return s;

	}
	
	public String allisclose() {
		String s="ERROR";
		ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
		invoicemanager = (InvoiceManager) context.getBean("invoiceManagerImpl");
		invoices=invoicemanager.getallisclose(start, limit);
		Total = invoicemanager.totalRecords();
		if (invoices!=null)
			s = "Shown";
		System.out.println(s + "\n" + invoices);
		return s;
	}	
	
	public String allisdeleted() {
		String s="ERROR";
		ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
		invoicemanager = (InvoiceManager) context.getBean("invoiceManagerImpl");
		invoices=invoicemanager.getallisdeleted(start, limit);
		Total = invoicemanager.totalRecords();
		if (invoices!=null)
			s = "Shown";
		System.out.println(s + "\n" + invoices);
		return s;
	}
	
	public String addinvoice() {
		String s="ERROR";
		ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
		invoicemanager = (InvoiceManager) context.getBean("invoiceManagerImpl");
		int res = invoicemanager.addinvoice(invoice);
		if (res!=0)
			s = "Added";
		System.out.println(s + "\n" + invoice);
		return s;
	}
	
	public String editinvoice() {
		String s="ERROR";
		ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
		invoicemanager = (InvoiceManager) context.getBean("invoiceManagerImpl");
		int res = invoicemanager.editinvoice(invoice);
		if (res!=0)
			s = "Edited";
		System.out.println(s + "\n" + invoice);
		return s;
	}
	
	public String deleteinvoice() {
		String s="ERROR";
		ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
		invoicemanager = (InvoiceManager) context.getBean("invoiceManagerImpl");
		int res = invoicemanager.deleteinvoice(ids);
		if (res!=0)
			s = "Deleted";
		return s;
	}
	
	public String approveinvoice() {
		String s="ERROR";
		ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
		invoicemanager = (InvoiceManager) context.getBean("invoiceManagerImpl");
		int res = invoicemanager.approveinvoice(ids);
		if (res!=0)
			s = "Approved";
		return s;
	}
	
	public String advancesearch() {
		String s="ERROR";
		ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
		invoicemanager = (InvoiceManager) context.getBean("invoiceManagerImpl");
		invoices = invoicemanager.advancesearch(invoiceNo, customerId);
		System.out.println(invoiceNo);
		System.out.println(customerId);
		if (invoice!=null)
			s = "Found";
		return s;
	}
}
