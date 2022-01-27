#pragma once

#include <iostream>

using namespace std;

class CLine
{
    public:
        CLine();
        ~CLine();
        void SetLength(double len); 
        // 함수 선언할때는 변수명 안줘도 되고 구현할때만 제대로 주면 된다ㄴㄴㄴ
        double GetLength();
    private:
        double m_dLength;
        char* m_pStrLineName;
};