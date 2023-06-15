-- creating the database
CREATE DATABASE Carryamgo;

-- creating the seller table
CREATE TABLE Seller(
    seller_id SERIAL PRIMARY KEY,
    seller_name VARCHAR(50) NOT NULL,
    seller_email VARCHAR(50) NOT NULL,
    seller_number VARCHAR(50) NOT NULL,
    seller_address VARCHAR(50) NOT NULL,
    seller_password BYTEA NOT NULL,
    seller_rating INTEGER NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()

);

-- creating the buyer table
CREATE TABLE Buyer(
    buyer_id SERIAL PRIMARY KEY,
    buyer_name VARCHAR(50) NOT NULL,
    buyer_number VARCHAR(50) NOT NULL,
    buyer_email VARCHAR(50) NOT NULL,
    buyer_address VARCHAR(50) NOT NULL,
    buyer_password BYTEA NOT NULL,
    buyer_rating INTEGER NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- creating the product table
CREATE TABLE Product(
    product_id SERIAL PRIMARY KEY,
    product_name VARCHAR(50) NOT NULL,
    product_price INTEGER NOT NULL,
    product_quantity INTEGER NOT NULL,
    seller_id INTEGER REFERENCES Seller(seller_id) ON DELETE CASCADE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- creating the message table
CREATE TABLE Message(
    message_id SERIAL PRIMARY KEY,
    message_text VARCHAR(50) NOT NULL,
    sender_id INTEGER REFERENCES Seller(seller_id) ON DELETE CASCADE,
    receiver_id INTEGER REFERENCES Buyer(buyer_id) ON DELETE CASCADE,
    sent_at TIMESTAMPTZ DEFAULT NOW()
);

-- creating the shop table
CREATE TABLE Shop(
    shop_id SERIAL PRIMARY KEY,
    shop_name VARCHAR(50) NOT NULL,
    shop_location VARCHAR(50) NOT NULL,
    product_id INTEGER REFERENCES Product(product_id) ON DELETE CASCADE,
    seller_id INTEGER REFERENCES Seller(seller_id) ON DELETE CASCADE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- creating the orders table
CREATE TABLE Orders(
    orders_id SERIAL PRIMARY KEY,
    orders_name VARCHAR(50) NOT NULL,
    orders_amount INTEGER NOT NULL,
    product_id INTEGER REFERENCES Product(product_id) ON DELETE CASCADE,
    seller_id INTEGER REFERENCES Seller(seller_id) ON DELETE CASCADE,
    buyer_id INTEGER REFERENCES Buyer(buyer_id) ON DELETE CASCADE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- creating the notification table
CREATE TABLE Notification (
    notification_id SERIAL PRIMARY KEY,
    notification_content VARCHAR(255) NOT NULL,
    recipient_id INTEGER,
    recipient_role VARCHAR(10),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE RecipientMapping (
    recipient_id INTEGER,
    recipient_role VARCHAR(10),
    PRIMARY KEY (recipient_id, recipient_role),
    FOREIGN KEY (recipient_id) REFERENCES Seller(seller_id) ON DELETE CASCADE,
    FOREIGN KEY (recipient_id) REFERENCES Buyer(buyer_id) ON DELETE CASCADE
);


ALTER TABLE Notification
ADD CONSTRAINT fk_recipient_mapping
FOREIGN KEY (recipient_id, recipient_role)
REFERENCES RecipientMapping(recipient_id, recipient_role) ON DELETE CASCADE;


-- creating the admin table
CREATE TABLE Admin(
    admin_id SERIAL PRIMARY KEY,
    admin_name VARCHAR(50) NOT NULL,
    admin_email VARCHAR(50) NOT NULL,
    admin_password BYTEA,
    created_at TIMESTAMPTZ DEFAULT NOW()
);


