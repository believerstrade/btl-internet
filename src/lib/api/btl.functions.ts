import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { db } from "../db.server";

const phoneRx = /^(?:\+?88)?01[3-9]\d{8}$/;

export const submitConnectionRequest = createServerFn({ method: "POST" })
  .validator(z.object({
    name: z.string().trim().min(2).max(80),
    phone: z.string().trim().regex(phoneRx, "Enter a valid Bangladesh mobile number"),
    area: z.string().trim().min(2).max(120),
    address: z.string().trim().min(5).max(300),
    packageName: z.string().trim().max(80).optional(),
    preferredDate: z.string().trim().max(30).optional(),
  }))
  .handler(async ({ data }) => {
    const sql = db();
    const trackingId = `BTL-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;
    await sql`INSERT INTO connection_requests (tracking_id,name,phone,area,address,package_name,preferred_date) VALUES (${trackingId},${data.name},${data.phone},${data.area},${data.address},${data.packageName || null},${data.preferredDate || null})`;
    return { ok: true, trackingId };
  });

export const submitSupportTicket = createServerFn({ method: "POST" })
  .validator(z.object({
    customerRef: z.string().trim().max(80).optional(),
    phone: z.string().trim().regex(phoneRx, "Enter a valid Bangladesh mobile number"),
    category: z.enum(["No connection", "Slow speed", "Billing", "Router / ONU", "New connection", "Other"]),
    message: z.string().trim().min(5).max(1000),
  }))
  .handler(async ({ data }) => {
    const sql = db();
    const ticketId = `BTL-T-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;
    await sql`INSERT INTO support_tickets (ticket_id,customer_ref,phone,category,message) VALUES (${ticketId},${data.customerRef || null},${data.phone},${data.category},${data.message})`;
    return { ok: true, ticketId };
  });
