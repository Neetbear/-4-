#include <iostream>
#include <string>

using namespace std;

class CCar {
public:
    CCar(); //빈거라도 만드는 습관 만들어두기
    CCar(string brand, string name, int year);
    // {
    //     m_strBrand = brand;
    //     m_strName = name;
    //     m_nYear = year;
    // };

    string m_strBrand;
    string m_strName;
    int m_nYear;
};

int main()
{
    CCar bmwCar("BMW", "X5", 2002);
    CCar audiCar("Audi", "A8", 2012);

    cout << bmwCar.m_strBrand << ", " << bmwCar.m_strName << ", " << bmwCar.m_nYear << endl;
    cout << audiCar.m_strBrand << ", " << audiCar.m_strName << ", " << audiCar.m_nYear << endl;
    return 0;

}

CCar::CCar()
{ //빈거라도 만드는 습관 만들어두기
}

CCar::CCar(string brand, string name, int year)
{
    m_strBrand = brand;
    m_strName = name;
    m_nYear = year;
}
