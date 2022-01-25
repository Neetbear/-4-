#include <iostream>
#include <string>

using namespace std;

double Add(double, double);
double Sub(double, double);
double Mul(double, double);
double Div(double, double);
double Calculator(double, double, double(*func)(double, double));

bool isDouble(const string& str)
{
    for (char const &c : str) {
        if (isdigit(c) == 0 && c != '.') return false;
    }
    return true;
}

int main()
{
    bool calcWork = true;
    while(calcWork)
    {
        cout << "Calculator Start" << endl;

        double (*calc)(double, double)= nullptr; 
        string dNum1, dNum2;
        double result; 
        char oper;

        cout << "Write Number1 : ";
        cin >> dNum1; cout << endl;
        cout << "Write Number2 : ";
        cin >> dNum2; cout << endl;
        cout << "Write Operator : ";
        cin >> oper; cout << endl;

        cout << to_string(stod(dNum1)) << " / " << to_string(stod(dNum2)) << endl;
        
        if(!isDouble(dNum1) || !isDouble(dNum2))
        {
            cout << "Please write numbers for calculator!" << endl;
        }
        else if(stod(to_string(stod(dNum1))) != stod(dNum1) || stod(to_string(stod(dNum2))) != stod(dNum2))
        {
            cout << "Please write numbers for calculator!!!" << endl;
        }
        else
        {
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

            cout << stod(dNum1) << " / " << stod(dNum2) << " / "  << oper << endl;
            result = Calculator(stod(dNum1), stod(dNum2), calc);
            cout << "The Result : " << result << endl;
            calcWork = false;
       }
    }
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