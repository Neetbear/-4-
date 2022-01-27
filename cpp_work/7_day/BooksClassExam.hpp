#pragma once

#include <iostream>
#include <string>

using namespace std;

class CBooks
{
    public:
        //constructor(객체 생성자)
        CBooks() 
        { 
            cout << "CBooks Object Constructor!!!" << endl;
            m_Title = "Learning javascript 21 days";
            m_Author = "Bla Bla Foo";
            m_Subject = "Javascript web programing";
            m_BookId = 352345;
        };

        // struct BooksInfo m_BooksInfo;
        string m_Title;
        string m_Author;
        string m_Subject;
        int m_BookId;
        // struct BooksInfo 이것도 가능
        // {
        //     string m_Title;
        //     string m_Author;
        //     string m_Subject;
        //     int m_BookId;
        // };
        

        void PrintBookInformation();
        // inside 
        // {
        //     cout << "Book title : " << m_Title << endl;
        //     cout << "Book author : " << m_Author << endl;
        //     cout << "Book subject : " << m_Subject << endl;
        //     cout << "Book ID : " << m_BookId << endl;
        // }
};
// outside 
void CBooks::PrintBookInformation()
{
    cout << "Book title : " << m_Title << endl;
    cout << "Book author : " << m_Author << endl;
    cout << "Book subject : " << m_Subject << endl;
    cout << "Book ID : " << m_BookId << endl;
}