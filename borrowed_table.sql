CREATE TABLE Borrows (
    id BIGINT NOT NULL AUTO_INCREMENT,
    member_name varchar(255),
    book_borrowed varchar(255),
    date_borrowed date,
    returned_date date,
    PRIMARY KEY (id)
);

INSERT INTO Borrows (member_name, book_borrowed, date_borrowed, returned_date) VALUES (
    "dirac murairi", "Harry Potter", "2021-03-01", "2021-03-05");

INSERT INTO Borrows (member_name, book_borrowed, date_borrowed, returned_date) VALUES (
    "dirac murairi", "The alchemist", "2021-03-01", "2021-03-06"
);

INSERT INTO Borrows (member_name, book_borrowed, date_borrowed, returned_date) VALUES (
    "serge tassiga", "The alchemist", "2021-03-07", "2021-03-08"
);




INSERT INTO Borrows (member_name, book_borrowed, date_borrowed, returned_date) VALUES (
    "serge tassiga", "Hanna Arrare", "07/03/2021", "09/03/2021"
);

INSERT INTO Borrows (member_name, book_borrowed, date_borrowed, returned_date) VALUES (
    "serge tassiga", "Love story", "07/03/2021", "09/03/2021"
);

INSERT INTO Borrows (member_name, book_borrowed, date_borrowed, returned_date) VALUES (
    "fiona nganga", "C++", "25/02/2021", "09/03/2021"
);

INSERT INTO Borrows (member_name, book_borrowed, date_borrowed, returned_date) VALUES (
    "sankoh santige", "Java", "07/03/2021", "09/03/2021"
);

INSERT INTO Borrows (member_name, book_borrowed, date_borrowed, returned_date) VALUES (
    "sankoh santige", "C++", "07/03/2021", "09/03/2021"
);

INSERT INTO Borrows (member_name, book_borrowed, date_borrowed, returned_date) VALUES (
    "sankoh santige", "Python A-Z", "12/02/2021", "15/02/2021"
);

INSERT INTO Borrows (member_name, book_borrowed, date_borrowed, returned_date) VALUES (
    "modesta mwangi", "Python A-Z", "12/02/2021", "15/02/2021"
);

INSERT INTO Borrows (member_name, book_borrowed, date_borrowed, returned_date) VALUES (
    "samuel anumudu", "The black rose", "01/02/2021", "15/02/2021"
);

INSERT INTO Borrows (member_name, book_borrowed, date_borrowed, returned_date) VALUES (
    "samuel anumudu", "The lord of the ring", "01/02/2021", "15/02/2021"
);

INSERT INTO Borrows (member_name, book_borrowed, date_borrowed, returned_date) VALUES (
    "liliane monkaya", "The lord of the ring", "05/01/2021", "05/02/2021"
);

INSERT INTO Borrows (member_name, book_borrowed, date_borrowed, returned_date) VALUES (
    "liliane monkaya", "Hisotry of the sorcerer", "05/01/2021", "08/01/2021"
);

INSERT INTO Borrows (member_name, book_borrowed, date_borrowed, returned_date) VALUES (
    "glorya umutesi", "Hisotry of the sorcerer", "02/01/2021", "08/01/2021"
);
