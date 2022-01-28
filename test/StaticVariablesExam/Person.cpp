#include "Person.h"

int CPerson::m_nPersonCount = 0; // initialize static member variable

CPerson::CPerson(const string& strName, int nAge)
{
	m_strName = strName;
	m_nAge = nAge;
	cout << "No." << ++m_nPersonCount << " Created Person" << endl;
}

CPerson::~CPerson()
{
	cout << "Person Count " << --m_nPersonCount << endl;
}

void CPerson::ShowPersonInformation()
{
	cout << "This person's name = " << m_strName << ", Age = " << m_nAge << endl;
}

int CPerson::PersonCount() // static member function
{
	return m_nPersonCount;
}