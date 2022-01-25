#include <iostream>

using namespace std;

double Add(double, double);
double Sub(double, double);
double Mul(double, double);
double Div(double, double);
double Calculator(double, double, double(*func)(double, double));

int main()
{
    cout << "Calculator Start" << endl;

    double (*calc)(double, double) = nullptr;
    double dNum1, dNum2, result;
    char oper;

    cout << "Write Number1 : ";
    cin >> dNum1; cout << endl;
    cout << "Write Number2 : ";
    cin >> dNum2; cout << endl;
    cout << "Write Operator : ";
    cin >> oper; cout << endl;


    switch (oper)
    {
    case '+':
        calc = Add;
        break;
    case '-':
        calc = Sub;
        break;
    case '*':
        calc = Mul;
        break;
    case '/':
        calc = Div;
        break;
    default:
        cout << "Only Suport(+, -, *, /)" << endl;
        break;
    }

    result = Calculator(dNum1, dNum2, calc);
    cout << "The Result : " << result << endl;

    return 0;
}

double Add(double dNum1, double dNum2)
{
    return dNum1 + dNum2;
}
double Sub(double dNum1, double dNum2)
{
    return dNum1 - dNum2;
}
double Mul(double dNum1, double dNum2)
{
    return dNum1 * dNum2;
}
double Div(double dNum1, double dNum2)
{
    return dNum1 / dNum2;
}
double Calculator(double dNum1, double dNum2, double(*func)(double, double))
{
    return func(dNum1, dNum2);
}