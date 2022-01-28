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

    // void PrintBooksInformation(struct Books book);
    // void PrintBooksInformation(Books* book);
    void PrintBooksInformation(Books* book)
    {
        cout << "book title : " << book->title << ", author : " << book->author << ", subject : " << book->subject << ", book_id : " << book->book_id << endl;
    }

    struct Books SetBooksInfomation(char* title, char* author, char* subject, int book_id)
    {
        struct  Books book;

        strcpy_s(book.title, title);
        strcpy_s(book.author, author);
        strcpy_s(book.subject, subject);
        book.book_id = book_id;

        return book;
    }
}
