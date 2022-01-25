#include <iostream>

using namespace std;

int add(int x, int y)
{
    return x + y;
}

float add(float x, float y)
{
    return x + y;
}

int main()
{
    cout << "Adding Integer number : " << add(13, 67) << endl;
    cout << "Adding float number : " << add(13.43f, 67.56f) << endl; // 13.43f의 f는 float이라고 명시해주는거
    return 0;
}