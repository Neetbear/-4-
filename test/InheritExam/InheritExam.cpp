#include <iostream>
#include <string>

using namespace std;

//base class
class CVehicle
{
public:
    CVehicle()
    {
        m_brand = "AnyBrand";
    }
    string m_brand;
    void Honk()
    {
        cout << "Pong Pong" << endl;
    }
};

//  derived class
class CCar :public CVehicle
{
public:
    CCar()
    {
        m_model = "BMW X7";
        m_brand = "BMW";
    }
    string m_model;
};

int main()
{
    CCar myCar;
    cout << myCar.m_brand << ", " << myCar.m_model << endl;
    myCar.Honk();
}
