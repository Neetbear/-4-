#include <iostream>
#include <string>

using namespace std;

void abc(int& x)
{
    x = 100;
    cout << x << endl;
}

int main()
{
    int a = 1;
    int b = 1;
    cout << &a << endl;
    cout << &b << endl;

    string food = "Pizza";
    string meal = food;
    cout << meal << " Address of meal : " << &meal << endl;
    meal = "Hanmburger";
    cout << food << " Address of food : " << &food << endl;
    cout << meal << " Address of meal : " << &meal << endl;

    int xx = 200;
    abc(xx);
    cout << "xx : " << xx << endl;

    return 0;
}