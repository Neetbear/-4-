#include <iostream>
#include <vector>

using namespace std;

template <typename T>
void PrintVector(vector<T>& vc)
{
    cout << "[";
    for(typename vector<T>::iterator itr = vc.begin(); itr != vc.end(); ++itr)
    {
        cout << *itr << " ";
    } 
    cout <<"]\n";
}

template <typename T>
void print_vector_range_based(vector<T>& vec)
{
    for(const auto& elem : vec) 
    // auto 알아두기 auto가 type을 자동으로 알아내줘서 vector<T>&도 자동으로 인식해준다
    // range_based같이 type이 명확하지 않을때는 용이하나 다른 경우에는 안쓰는게 좋다
    {
        cout << elem << endl;
    }
}

int main()
{
    vector<int> vec;
    vec.push_back(10);
    vec.push_back(20);
    vec.push_back(30);
    vec.push_back(40);

    cout << "Intiate status vector" << endl;
    PrintVector(vec);

    vector<int>::iterator itr = vec.begin() + 2; // vec[2]
    *itr = 50;
    cout << "======================================" << endl;
    PrintVector(vec);

    vector<int>::const_iterator citr = vec.begin() + 2;

    // cannot assign to a variable that is const iterator
    // *citr = 70;
    cout << "======================================" << endl;
    cout << "Reverse Vector Print" << endl;
    vector<int>::reverse_iterator ritr = vec.rbegin();
    
    cout << "[";
    for(; ritr != vec.rend(); ritr++)
    {
        cout << *ritr << " ";
    }
    cout <<"]\n";

    cout << "======================================" << endl;
    vector<int> nVector;
    nVector.push_back(1);
    nVector.push_back(2);
    nVector.push_back(3);

    // reverse print
    // for(vector<int>::size_type i = nVector.size() - 1; i >= 0; i--)
    // {
    //     cout << nVector[i] << endl;
    // }
    // 이러면 에러난다  vector의 index를 담당하는 타입이 부호 없는 정수이기 때문에 -1이 안되고 해당 타입에서 가장 큰 정수가 된다

    for(int elem : nVector)
    {
        cout << "element : " << elem << endl;
    } // 범위기반이 배열보다 빠르게 된다

    print_vector_range_based(nVector);

    auto nNum = 10;
    auto strHello = "Hello";

    cout << "nNum : " << nNum << ", strHello : " << strHello << endl;

    return 0;
}