package com.highradius.managerimpl;

import java.util.List;

import com.highradius.dao.InvoiceDao;
import com.highradius.manager.InvoiceManager;
import com.highradius.pojo.Invoice;

public class InvoiceManagerImpl implements InvoiceManager {

	InvoiceDao invoicedao;
	
	public InvoiceDao getInvoiceDao() {
		return invoicedao;
	}

	public void setInvoiceDao(InvoiceDao invoicedao) {
		this.invoicedao = invoicedao;
	}

	@Override
	public List<Invoice> getallinvoices(int start, int limit) {
		return invoicedao.getallinvoices(start, limit);
	}

	@Override
	public List<Invoice> getallisopen(int start, int limit) {
		return invoicedao.getallisopen(start, limit);
	}

	@Override
	public List<Invoice> getallisdeleted(int start, int limit) {
		return invoicedao.getallisdeleted(start, limit); 
	}
	
	@Override
	public List<Invoice> getallisclose(int start, int limit) {
		return invoicedao.getallisclose(start, limit);
	}

	@Override
	public int addinvoice(Invoice invoice) {
		return invoicedao.addinvoice(invoice);
	}

	@Override
	public int editinvoice(Invoice upadtedInvoice) {
		return invoicedao.editinvoice(upadtedInvoice);
	}

	@Override
	public int deleteinvoice(List<Integer> ids) {
		return invoicedao.deleteinvoice(ids);
	}

	@Override
	public int approveinvoice(List<Integer> ids) {
		return invoicedao.approveinvoice(ids);
	}

	@Override
	public int totalRecords() {
		return invoicedao.totalRecords();
	}

	@Override
	public List<Invoice> advancesearch(String invoiceNo, int customerId) {
		return invoicedao.advancesearch(invoiceNo, customerId);
	}
}
