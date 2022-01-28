#pragma once
#include "Shape.h"
class CRectangle :
    public CShape
{
public:
    CRectangle(int, int);
    int GetArea();
    CRectangle operator*(int) const; 
    // �Լ��� Ŭ���� ����϶� const�� �ڿ� ���̸� �� �Լ� �ȿ��� ��� ������ �ٲܼ� ���� 
    friend CRectangle operator*(int mul, const CRectangle&);
    // friend function
};

