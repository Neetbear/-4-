#pragma once
#include <iostream>

using namespace std;

class CShape
{
protected:
	int m_nWidth, m_nHeight;

public:
	CShape(); // default constructor
	CShape(int, int);
	virtual int Area() = 0;
};

