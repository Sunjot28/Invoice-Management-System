package com.highradius.manager;

import java.util.List;

import com.highradius.pojo.Invoice;

public interface InvoiceManager {
	public List<Invoice> getallinvoices(int start, int limit);
	public List<Invoice> getallisopen(int start, int limit);
	public List<Invoice> getallisclose(int start, int limit);
	public List<Invoice> getallisdeleted(int start, int limit);
	public List<Invoice> advancesearch(String invoiceNo, int customerId);
	
	public int addinvoice(Invoice invoice);
	public int editinvoice(Invoice upadtedInvoice);
	public int deleteinvoice(List<Integer> ids);
	public int approveinvoice(List<Integer> ids);
	
	public int totalRecords();
}
