#include <iostream>
using namespace std;
int main()
{
	for (int i = 0; i < 100; i++)
	{
		if (i % 2 == 0) continue;
        // if (i == 50) break;
		cout << i << ' ';
	}
	return 0;
}
