#include <iostream>
#include <string>

using namespace std;

template <typename T> // typename key word in 98 version <T(type할때 T)> 이렇게 만들면 모든 타입 적용 가능
void Swap(T& a, T& b);

// 특정 type 제외 시키기 (또는 다른 방식으로 구현을 줘도 된다 -> 오버로딩 마냥 사용 가능)
// 사실 템플릿을 명시적으로 적으면 진정한 템플릿 방식이라고 하기는 애매하다
template <> void Swap<double>(double&, double&);

template <typename T>
T const& Max(T const& a, T const& b); 

int main()
{
    int c = 12, d = 15;

    cout << "c = " << c << ", d = " << d << endl;
    Swap(c, d);
    cout << "After swap"<< endl;
    cout << "c = " << c << ", d = " << d << endl;

    cout << "=====================================" << endl;

    double x = 12.45, y = 72.12;
    cout << "x = " << x << ", y = " << y << endl;
    Swap(x, y);
    cout << "After swap"<< endl;
    cout << "x = " << x << ", y = " << y << endl;

    cout << "=====================================" << endl;

    string strA = "Hello", strB = "World";
    cout << "strA = " << strA << ", strB = " << strB << endl;
    Swap(strA, strB);
    cout << "After swap"<< endl;
    cout << "strA = " << strA << ", strB = " << strB << endl;
    
    cout << "int Max value = " << Max(c, d) << endl;
    cout << "double Max value = " << Max(x, y) << endl;
    cout << "string Max value = " << Max(strA, strB) << endl; // string은 앞글자 비교? 

    return 0;
}

template <typename T> 
void Swap(T& a, T& b)
{
    T temp;
    temp = a;
    a = b;
    b = temp;
}

// 특정 type 제외 시키기 또는 다른 방식으로 구현을 줘도 된다 
template <> void Swap<double>(double&, double&)
{
    // do not swapping double number
}

template <typename T>
T const& Max(T const& a, T const& b)
{
    return a < b ? b : a;
}