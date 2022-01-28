#include <iostream>

using namespace std;

class Adder
{
public:
    Adder(int i = 0) // constructor
    {
        total = i;
    }

    void addNum(int number) // interface to outside world
    {
        total += number;
    }

    int getTotal() // interface to outside world
    {
        return total;
    }

private:
    // Hidden data from outside world
    int total;
};
int main()
{
    Adder add;

    add.addNum(10);
    add.addNum(20);
    add.addNum(30);
    cout << "Total : " << add.getTotal() << endl;

    return 0;
}
