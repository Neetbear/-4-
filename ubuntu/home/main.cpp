#include <iostream>
// #include "move.h"
// #include "scale.h"
// #include "area.h"

using namespace std;

class Tri
{
public:
    double x0, x1, x2, y0, y1, y2;
    Tri(double* a, double* b)
    {
        x0 = *a; a++;
        x1 = *a; a++;
        x2 = *a;
        y0 = *b; b++;
        y1 = *b; b++;
        y2 = *b;
    };
};

int main()
{
    double x[3]; double y[3];
    std::cout << "INPUT TRI's vertax numbers" <<  std::endl;

    for(int i = 0; i < 3 ; i++)
    {
        while(1)
        {
            cout << "INPUT " << i << "'s x VERTEX : ";
            cin >> x[i]; cout << endl;
            if(cin.fail())
            {
                cout << "INPUT TRI's vertax numbers" << endl;
                cin.clear();
                cin.ignore(100, '\n');
                continue;
            }
            else
            {
                cout << "INPUT " << i << "'s y VERTEX : ";
                cin >> y[i]; cout <<endl;
                if(cin.fail())
                {
                    cout << "INPUT TRI's vertax numbers" << endl;
                    cin.clear();
                    cin.ignore(100, '\n');
                    continue;
                }
                else
                {
                    break;
                }
            }
        }
    };
    
    Tri tri(x, y);
    cout << "a0 : (" << tri.x0 << ", " << tri.y0 << ")"<< endl;
    cout << "a1 : (" << tri.x1 << ", " << tri.y1 << ")"<< endl;
    cout << "a2 : (" << tri.x2 << ", " << tri.y2 << ")"<< endl;

    return 0;
}