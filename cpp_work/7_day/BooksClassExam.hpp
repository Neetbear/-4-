#pragma once

#include <iostream>
#include <string>

using namespace std;

class CBooks
{
    public:
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
        // {
        //     cout << "Book title : " << m_Title << endl;
        //     cout << "Book author : " << m_Author << endl;
        //     cout << "Book subject : " << m_Subject << endl;
        //     cout << "Book ID : " << m_BookId << endl;
        // }
};

void CBooks::PrintBookInformation()
{
    cout << "Book title : " << m_Title << endl;
    cout << "Book author : " << m_Author << endl;
    cout << "Book subject : " << m_Subject << endl;
    cout << "Book ID : " << m_BookId << endl;
}