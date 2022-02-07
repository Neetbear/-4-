#include <iostream>
#include <vector>
#include <algorithm>
#include <functional>

using namespace std;

template <typename T>
void PrintVector(T begin, T end)
{
    while(begin != end)
    {
        cout << *begin << " ";
        begin++;
    }
    cout << endl;
}

class IntCampare
{
public:
    bool operator()(const int& a, const int& b) const {return (a > b);}
    // descending sorting operator 내림차순
};

template <typename T1, class T2>
class GreaterComp
{
public:
    bool operator()(const T1& a, const T2& b) const {return (a > b);}
};

int main()
{
    vector<int> vec;
    vec.push_back(5);
    vec.push_back(2);
    vec.push_back(3);
    vec.push_back(1);
    vec.push_back(4);
    vec.push_back(8);
    vec.push_back(7);
    vec.push_back(6);

    cout << "Before sorting\n";
    PrintVector(vec.begin(), vec.end());

    // sort(vec.begin(), vec.end(), IntCampare());
    // sort(vec.begin(), vec.end(), GreaterComp<int, int>());
    sort(vec.begin(), vec.end(), less<int>()); // greater<int>()
    cout << "After sorting\n";
    PrintVector(vec.begin(), vec.end());

    return 0;
}