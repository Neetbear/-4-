#include "Book.h"

CBook::CBook()
{
}

CBook::CBook(const string& strTitle, int nTotalPage)
{
    m_strTitle = strTitle;
    m_nTotalPage = nTotalPage;
    m_nCurrentPage = 0;
    SetPercent();
}

CBook::CBook(const CBook& orgBook)
{
    m_strTitle = orgBook.m_strTitle;
    m_nTotalPage = orgBook.m_nTotalPage;
    m_nCurrentPage = orgBook.m_nCurrentPage;
    m_fPercent = orgBook.m_fPercent;
}

void CBook::SetPercent()
{
    m_fPercent = (double)m_nCurrentPage/m_nTotalPage * 100;
}

const CBook& CBook::ThickerBook(const CBook& compBook)
{
    if(compBook.m_nTotalPage > this->m_nTotalPage) 
    // compBook.m_nTotalPage > this->m_nTotalPage 어떤 값들인지 혼동 주의
    {
        return compBook;
    }
    else
    {
        return *this; // 나 자신의 주소값
    }
}

// CBook::~CBook()
// {
// }
