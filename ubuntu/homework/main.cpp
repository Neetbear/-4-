#include <iostream>
#include "move.h"
#include "scale.h"
#include "area.h"

using namespace std;

class Tri
{
pulic:
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
	void move(double, double);
	void scale(double);
	void area();
};

int main()
{
	double x[3], y[3];
	cout << "INPUT TRI's vertax number" << endl;

	for(int i = 0; i < 3; i++)
	{
		while(true)
		{
			cout << "INPUT " << i << "'s x VERTAX : ";
		   	cin >> x[i]; cout << endl;
			if(cin.fail())
			{
				cout << "PLEASE INPUT NUMBER" << endl;
				cin.clear();
				cin.ignore(100, '\n');
				continue;
			}
			else
			{
				cout << "INPUT " << i << "s y VERTAX : ";
				cin >> y[i]; cout << endl;
				if(cin.fail())
				{
					cin.clear();
					cin.ignore(100, '\n');
					continue;
				}
				else
				{
					break;
				}
			}

		};
	};

	Tri tri(x, y);
	cout << "a0 : (" << tri.x0 << ", " << tri.y0 << ")" << endl;
	cout << "a1 : (" << tri.x1 << ", " << tri.y1 << ")" << endl;
	cout << "a2 : (" << tri.x2 << ", " << tri.y2 << ")" << endl;
	
	char tmp;
	cout << "What do you want to do?" << endl;
	cout << "If you want to move triangle, plz input M." << endl;
	cout << "If you want to scale triangle, plz input S." << endl;
	cout << "If you want area of triangle, plz input A." << endl;
	cout << "If you wnat to end, plz input E." << endl;

	while(true)
	{
		cin >> tmp; cout << endl;
		if(cin.fail())
		{
			cout << "Plz input M or S or A or E." << endl;
			cin.clear();
			cin.ignore(10, '\n');
			continue;
		}
		else if( tmp == 'M')
		{
			double a, b;
			while(true)
			{
				cout << "Plz input number for x-axis : " << endl;
				cin >> a; cout << endl;
				if(cin.fail())
				{
					cout << "Plz input number" << endl;
					cin.clear();
					cin.ignore(100, '\n');
					continue;
				}
				else
				{
					cout << "Plzz input number for y-axis : " << endl;
					cin >> b; cout << endl;
					if(cin.fail())
					{
						cout << "Plz input number" << endl;
						cin.clear();
						cin.ignore(100, '\n');
						continue;
					}
					else
					{
						tri.move(a, b);
						cout << "What'x next action?" << endl;
						break;
					}
				}
			}
		}
		else if(tmp == 'S')
		{
			double s;
			while(true)
			{
				cout << "Plz input number for scale : " << endl;
				cin >> s; cout << endl;
				if(cin.fail())
				{
					cout << "Plz input number" << endl;
					cin.clear();
					cin.ignore(100, '\n');
					continue;
				}
				else
				{
					tri.scale(s);
					cout << "What'x next action?" << endl;
					break;
				}
			}
		}
		else if(tmp == 'A')
		{
			tri.area();
			cout << "What'x next action?" << endl;
		}
		else if(tmp == 'E')
		{
			cout << "Good bye" << endl;
			break;
		}
		else
		{
			cout << "Plz input M or S or A or E." << endl;
		}
	}

	return 0;
}
