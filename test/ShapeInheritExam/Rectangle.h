#pragma once
#include "Shape.h"
class CRectangle :
    public CShape
{
public:
    CRectangle(int, int);
    int GetArea();
    CRectangle operator*(int) const; 
    // 함수가 클래스 멤버일때 const를 뒤에 붙이면 이 함수 안에서 어떠한 변수도 바꿀수 없다 
    friend CRectangle operator*(int mul, const CRectangle&);
    // friend function
};

