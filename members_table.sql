CREATE TABLE Member (
    member_id MEDIUMINT NOT NULL AUTO_INCREMENT,
    member_name varchar(255),
    member_gender varchar(6),
    email_address varchar(255),
    telephone_number varchar(255),
    date_of_birth date,
    address varchar(255),
    referral_id int,
    PRIMARY KEY (member_id)
);

INSERT INTO Member (member_id, member_name, member_gender, email_address, telephone_number, date_of_birth, address) VALUES (
    "001", "dirac murairi", "Male", "dirac@gmail.com", 0789856342, "1800-12-12", "kimironko");

INSERT INTO Member (member_id, member_name, member_gender, email_address, telephone_number, date_of_birth, address) VALUES (
    "021", "serge tassiga", "Male", "serge@gmail.com", 0789676342, "1800-12-25", "kimironko"
);

INSERT INTO Member (member_id, member_name, member_gender, email_address, telephone_number, date_of_birth, address) VALUES (
    "076", "sankoh santige", "Male", "sankoh@gmail.com", 0789856789, "1800-08-12", "kimironko"
);

INSERT INTO Member (member_id, member_name, member_gender, email_address, telephone_number, date_of_birth, address) VALUES (
    "98567", "modesta mwangi", "Female", "modesta@gmail.com", 0783456342, "1900-03-15", "kimironko"
);

INSERT INTO Member (member_id, member_name, member_gender, email_address, telephone_number, date_of_birth, address) VALUES (
    "6783", "fiona nganga", "Female", "fiona@gmail.com", 0788908642, "1900-12-12", "kimironko"
);






INSERT INTO Member (member_id, member_name, member_gender, email_address, telephone_number, date_of_birth, address) VALUES (
    "76032", "liliane monkaya", "F", "liliane@gmail.com", 0789855672, "04/05/1500", "kisimeti"
);

INSERT INTO Member (member_id, member_name, member_gender, email_address, telephone_number, date_of_birth, address) VALUES (
    "783-89", "samuel anumudu", "M", "samuel@gmail.com", 07899086342, "20/12/1800", "remmera"
);

INSERT INTO Member (member_id, member_name, member_gender, email_address, telephone_number, date_of_birth, address) VALUES (
    "893-1", "glorya umutesi", "F", "glorya@gmail.com", 0799886342, "18/07/1400", "zindiro"
);

INSERT INTO Member (member_id, member_name, member_gender, email_address, telephone_number, date_of_birth, address) VALUES (
    "83920", "nunu nusura", "F", "nunu@gmail.com", 0789786342, "12/03/1800", "kimironko"
);

INSERT INTO Member (member_id, member_name, member_gender, email_address, telephone_number, date_of_birth, address) VALUES (
    "83902", "kwame jonathan", "F", "kwame@gmail.com", 0789837342, "20/12/1800", "kimironko"
);
