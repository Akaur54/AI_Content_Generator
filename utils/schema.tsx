import { boolean, pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const AIOutput = pgTable('aiOutput', {
    id : serial('id').primaryKey(),
    FormData : varchar('FormData').notNull(),
    aiResponse : text('aiResponse'),
    templateSlug : varchar('templateSlug').notNull(), 
    createdBy : varchar('createdBy').notNull(),
    createdAt : varchar('createdAt')
})

export const UserSubscription = pgTable('userSubscription',{
    id : serial('id').primaryKey(),
    email : varchar('email'),
    userName : varchar('userName'),
    active : boolean('active'),
    paymentId : varchar('paymentId'),
    joinDate : varchar('joinDate')

})

export const ContactForm = pgTable('contactForm', {
    id: serial('id').primaryKey(),
    name: varchar('name').notNull(),
    email: varchar('email').notNull(),
    message: text('message').notNull(),
    createdAt: varchar('createdAt').notNull(),
});

