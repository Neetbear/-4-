#pragma once

using namespace std;

namespace BooksInfo
{
    struct Books
    {
       char title[50];
       char author[50];
       char subject[100];
       int book_id;
    };

    // typedef struct
    // {
    //     char title[50];
    //     char author[50];
    //     char subject[100];
    //     int book_id;
    // } Books;

    void PrintBooksInformation(Books* book)
    {
        cout << "book title : " << book->title << ", author : " << book->author << ", subject : " << book->subject << ", book_id : " << book->book_id << endl;
    }

    Books SetBooksInformation(char* title, char* author, char* subject, int bookId)
    {
        Books book;
        strcpy_s(book.title, sizeof(book.title), title);
        strcpy_s(book.author, sizeof(book.author), author);
        strcpy_s(book.subject, sizeof(book.subject), subject);
        book.book_id = 12423;

        return book;
    }
}