package com.highradius.daoimpl;

import java.util.ArrayList;
import java.util.List;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;
import com.highradius.dao.InvoiceDao;
import com.highradius.pojo.Invoice;

public class InvoiceDaoImpl implements InvoiceDao {

	@Override
	public List<Invoice> getallinvoices(int start, int limit) {
		Session s = null;
		List<Invoice> results = new ArrayList<Invoice>();
		String hql = "FROM invoice_table WHERE is_deleted=0";
		try {
			Configuration cfg = new Configuration();
			cfg.configure("hibernate.cfg.xml");
			SessionFactory sf = cfg.buildSessionFactory();
			s = sf.openSession();
			results = s.createQuery(hql).setFirstResult(start).setMaxResults(limit).list();
			System.out.println("Got all invoices");

		} catch (Exception e) {
			e.printStackTrace();

		} finally {
			if (s != null)
				s.close();
		}
		return results;
	}

	@Override
	public List<Invoice> getallisopen(int start, int limit) {
		Session s = null;
		List<Invoice> results = new ArrayList<Invoice>();
		String hql = "FROM invoice_table WHERE is_open=1 and is_deleted=0";
		try {
			Configuration cfg = new Configuration();
			cfg.configure("hibernate.cfg.xml");
			SessionFactory sf = cfg.buildSessionFactory();
			s = sf.openSession();
			results = s.createQuery(hql).setFirstResult(start).setMaxResults(limit).list();
			System.out.println("Got all open invoices");

		} catch (Exception e) {
			e.printStackTrace();

		} finally {
			if (s != null)
				s.close();
		}
		return results;
	}

	@Override
	public List<Invoice> getallisdeleted(int start, int limit) {
		Session s = null;
		List<Invoice> results = new ArrayList<Invoice>();
		String hql = "FROM invoice_table WHERE is_deleted=1";
		try {
			Configuration cfg = new Configuration();
			cfg.configure("hibernate.cfg.xml");
			SessionFactory sf = cfg.buildSessionFactory();
			s = sf.openSession();
			results = s.createQuery(hql).setFirstResult(start).setMaxResults(limit).list();
			System.out.println("Got all deleted invoices");

		} catch (Exception e) {
			e.printStackTrace();

		} finally {
			if (s != null)
				s.close();
		}
		return results;
	}

	@Override
	public int addinvoice(Invoice invoice) {
		Session s = null;
		Configuration cfg = new Configuration();
		cfg.configure("hibernate.cfg.xml");
		SessionFactory sf = null;
		Transaction transaction = null;
		int result = 0;
		try {
			sf = cfg.buildSessionFactory();
			s = sf.openSession();
			transaction = s.beginTransaction();
			s.save(invoice);
			transaction.commit();
			result = 1;
			System.out.println("Invoice Added");

		} catch (Exception e) {
			e.printStackTrace();

		} finally {
			if (s != null) {
				s.close();
				sf.close();
			}
		}
		return result;
	}

	@Override
	public List<Invoice> getallisclose(int start, int limit) {
		Session s = null;
		List<Invoice> results = new ArrayList<Invoice>();
		String hql = "FROM invoice_table WHERE is_open=0 and is_deleted=0";
		try {
			Configuration cfg = new Configuration();
			cfg.configure("hibernate.cfg.xml");
			SessionFactory sf = cfg.buildSessionFactory();
			s = sf.openSession();
			results = s.createQuery(hql).setFirstResult(start).setMaxResults(limit).list();
			System.out.println("Got all closed invoices");

		} catch (Exception e) {
			e.printStackTrace();

		} finally {
			if (s != null)
				s.close();
		}
		return results;
	}

	@Override
	public int editinvoice(Invoice updatedInvoice) {
		Configuration configuration = new Configuration();
		configuration.configure("hibernate.cfg.xml");
		SessionFactory factory = configuration.buildSessionFactory();
		Session session = factory.openSession();
		Transaction transaction = session.beginTransaction();
		int res = 0;
		try {
			Invoice invoice = (Invoice) session.get(Invoice.class, updatedInvoice.getSlNo());
			invoice.setDescription(updatedInvoice.getDescription());
			invoice.setQuantity(updatedInvoice.getQuantity());

			session.update(invoice);
			res = 1;
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			transaction.commit();
			session.close();
			factory.close();
		}
		return res;
	}

	@Override
	public int deleteinvoice(List<Integer> ids) {
		Configuration configuration = new Configuration();
		configuration.configure("hibernate.cfg.xml");
		SessionFactory factory = configuration.buildSessionFactory();
		Session session = factory.openSession();
		Transaction transaction = session.beginTransaction();
		int res = 0;
		try {
			for (int id : ids) {
				Invoice invoice = (Invoice) session.get(Invoice.class, id);
				invoice.setIsDeleted("1");
				session.update(invoice);
			}
			res = 1;
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			transaction.commit();
			session.close();
			factory.close();
		}
		return res;
	}

	@Override
	public int approveinvoice(List<Integer> ids) {
		Configuration configuration = new Configuration();
		configuration.configure("hibernate.cfg.xml");
		SessionFactory factory = configuration.buildSessionFactory();
		Session session = factory.openSession();
		Transaction transaction = session.beginTransaction();
		int res = 0;
		try {
			for (int id : ids) {
				Invoice invoice = (Invoice) session.get(Invoice.class, id);
				invoice.setIsOpen("0");
				session.update(invoice);
			}
			res = 1;
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			transaction.commit();
			session.close();
			factory.close();
		}
		return res;
	}

	@Override
	public int totalRecords() {
		List<Invoice> result = new ArrayList<>();
		Configuration cfg = new Configuration();
		cfg.configure("hibernate.cfg.xml");
		SessionFactory sf = cfg.buildSessionFactory();
		Session session = sf.openSession();
		try {
			result = session.createQuery("from invoice_table").list();
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			if (session != null)
				session.close();
		}

		return result.size();
	}

	@Override
	public List<Invoice> advancesearch(String invoiceNo, int customerId) {
		Session session = null;
		List<Invoice> result = null;
		Configuration cfg = new Configuration();
		cfg.configure("hibernate.cfg.xml");
		SessionFactory sf = cfg.buildSessionFactory();
		session = sf.openSession();
		Transaction transaction = session.beginTransaction();

		try {
			String hql = "FROM invoice_table WHERE is_deleted=0 AND invoiceNo = :invoiceNo AND customerID = :customerId";
			result = session.createQuery(hql).setParameter("invoiceNo", invoiceNo)
					.setParameter("customerId", customerId).list();

			System.out.println("Found invoice by number and customer");

		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			transaction.commit();
			if (session != null) {
				session.close();
			}
		}
		return result;
	}
}