#include <iostream>
#include <string>
#include "BooksClassExam.hpp"
#include "Car.cpp" // mac 에서는 세팅이 필요함

using namespace std;

// struct BooksInfo 
// {
//     string m_Title;
//     string m_Author;
//     string m_Subject;
//     int m_BookId;
// }; 
// 밖에서 만들어서 class로 넣기도 가능 이렇게 만들면 #pragma pack(push, 1) 먹일수 있음

// class CBooks
// {
//     public:
//         // struct BooksInfo m_BooksInfo;
//         string m_Title;
//         string m_Author;
//         string m_Subject;
//         int m_BookId;
//         // struct BooksInfo 이것도 가능
//         // {
//         //     string m_Title;
//         //     string m_Author;
//         //     string m_Subject;
//         //     int m_BookId;
//         // };
        

//         void PrintBookInformation();
//         // {
//         //     cout << "Book title : " << m_Title << endl;
//         //     cout << "Book author : " << m_Author << endl;
//         //     cout << "Book subject : " << m_Subject << endl;
//         //     cout << "Book ID : " << m_BookId << endl;
//         // }
// };

// void CBooks::PrintBookInformation()
// {
//     cout << "Book title : " << m_Title << endl;
//     cout << "Book author : " << m_Author << endl;
//     cout << "Book subject : " << m_Subject << endl;
//     cout << "Book ID : " << m_BookId << endl;
// }

int main()
{
    CBooks booksObj;
    booksObj.PrintBookInformation();
    
    booksObj.m_Title = "Learning C++ 21 days";
    booksObj.m_Author = "SiEun Lee";
    booksObj.m_Subject = "Learning C++ Programming";
    booksObj.m_BookId = 19980225;

    booksObj.PrintBookInformation();

    CBooks cppBook;
    cppBook.m_Title = "Learning C++ in Hell";
    cppBook.m_Author = "Hades";
    cppBook.m_Subject = "Learning C++ Programming in Olympus";
    cppBook.m_BookId = 20210225;

    cppBook.PrintBookInformation();

    CCar carObj;
    carObj.m_strCompany = "BMW";
    carObj.m_strCarName = "BMW X5";
    carObj.m_strCarNo = "NY 3456";
    carObj.PrintCarInformation();

    cout << carObj.m_strCarName << "'s Maximum speed : " << carObj.CarSpeed(220) << endl;

    return 0;
}