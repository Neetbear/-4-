#include <iostream>
using namespace std;

void horizontalDan(int* start, int* stop)
{
    int* dNum = start;
    while ( dNum != stop )
    {
        for(int i = 1; i < 10; i++)
        {
            cout.width(2);
            cout.fill('0');
            cout << *dNum << " X ";
            cout.width(2);
            cout.fill('0');
            cout << i << " = " ;
            cout.width(2);
            cout.fill('0');
            cout<< *dNum * i << endl;
        }
        ++dNum;
        cout << endl;
    }
}
void verticalDan(int* start, int* stop)
{
    int* dNum = start;
    while ( dNum != stop )
    {
        for(int i = 1; i < 10; i++)
        {
            cout.width(2);
            cout.fill('0');
            cout << i << " X ";
            cout.width(2);
            cout.fill('0');
            cout << *dNum << " = ";
            cout.width(2);
            cout.fill('0');
            cout << *dNum * i << " ";
        }
        ++dNum;
        cout << endl;
    }
}

int main()
{
    int danNum[9] = { 1,2,3,4,5,6,7,8,9 };
    
    horizontalDan(danNum, danNum + 9);
    verticalDan(danNum, danNum + 9);
    return 0;
}