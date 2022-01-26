#include <iostream>
#include "StructExam.hpp"

using namespace std;
using namespace BooksInfo;

int main()
{
    // struct Books book1;
    Books* book1 = new Books; // 동적 할당 heap (allocated) delete시 사라짐, instantiating 되었다
    // Books* book2 = new Books ;
    Books book2; // stack (assign) 메인 함수 끝날때 사라짐
    
    // (*book1).title 또는 *book1->title
    strcpy((*book1).title, "Learn C++ Programming 21days"); 
    // visual studio면 strcpy_s(book1.title, _countof(book1.author), "Learn C++ Programming 21days");
    strcpy((*book1).author, "SiEun Lee");
    strcpy((*book1).subject, "C++ Programming in liquore");
    (*book1).book_id = 12423;

    strcpy((book2).title, "Learn C Programming 21days");
    strcpy((book2).author, "HyeIn Lee");
    strcpy((book2).subject, "C Programming in liquore");
    (book2).book_id = 4323;

    struct Books book3 = SetBooksInformation((char*)"Welcome to Hell in C++", (char*)"Bjane Stroustoup", (char*)"Hell in the C++", (int)345676);
    PrintBooksInformation(&book3);

    // cout << "book1 title : " << book1.title << ", author : " << book1.author << ", subject : " << book1.subject << ", book_id : " << book1.book_id << endl; 
    // cout << "book2 title : " << book2.title << ", author : " << book2.author << ", subject : " << book2.subject << ", book_id : " << book2.book_id << endl;  
    PrintBooksInformation(book1);
    PrintBooksInformation(&book2);
    

    delete book1;
    // delete book2;
    return 0;
}