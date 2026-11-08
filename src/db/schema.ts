import { pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";

export const enquiries = pgTable("enquiries", {
  id: serial("id").primaryKey(),
  studentName: varchar("student_name", { length: 120 }).notNull(),
  parentName: varchar("parent_name", { length: 120 }).notNull(),
  phone: varchar("phone", { length: 20 }).notNull(),
  email: varchar("email", { length: 180 }).notNull(),
  course: varchar("course", { length: 120 }).notNull(),
  qualification: varchar("qualification", { length: 160 }).notNull(),
  message: text("message").notNull(),
  source: varchar("source", { length: 120 }).notNull().default("website"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export type EnquiryRecord = typeof enquiries.$inferSelect;
export type NewEnquiry = typeof enquiries.$inferInsert;
