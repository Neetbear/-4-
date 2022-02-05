#include <iostream>
#include <vector>

// using namespace std;

template <typename T>
void PrintVector(std::vector<T>& vc)
{
    // print all vector elements
    std::cout << "[";
    for(typename std::vector<T>::iterator itr = vc.begin(); itr != vc.end(); ++itr)
    {
        std::cout << *itr << " ";
    }
    std::cout << "]" << std::endl;
}

int main()
{
    std::vector<int> vec;
    vec.push_back(10);
    vec.push_back(20);
    vec.push_back(30);
    vec.push_back(40);
    vec.push_back(20);

    std::cout << "frist status vector" << std::endl;
    PrintVector(vec);

    // std::vector<int>::iterator itr = vec.begin();
    // std::vector<int>::iterator endItr = vec.end();
    // for(;itr != endItr; ++itr)
    // {
    //     if(*itr == 20)
    //     {
    //         vec.erase(itr); // 여기서 주의 이렇게 쓰면 기존 반복자들이 터져서 안나온다
    //     }
    // }
    for(std::vector<int>::size_type i = 0; i != vec.size(); i++)
    {
        if(vec[i] == 20)
        {
            vec.erase(vec.begin() + i); // 처음부터 다시 찾겠다는 방식? 비효율적이다
            i--;
        }
    }

    std::cout << "value 20 delete" << std::endl;
    PrintVector(vec);

    return 0;
}