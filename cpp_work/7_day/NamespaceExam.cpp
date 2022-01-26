#include <iostream>
#include <string>
using namespace std;
// using std::cout; 이러면 std의 cout만 사용하겠다

namespace first_space
{
    void myFunc()
    {
        cout << "This function is in first_space\n";
    }
    namespace second_space
    {
        void myFunc()
        {
            cout << "This function is in second_space\n";
        }

        namespace third_space
        {
            void myFunc()
            {
                cout << "This function is in third_space\n";
            }
        }
    }
}

// namespace second_space
// {
//     void myFunc()
//     {
//         cout << "This function is in second_space\n";
//     }
// }

// using namespace first_space;
using namespace first_space::second_space;

int main()
{
    string strHello = "Hello World"; 
    // 만약 using std::cout;했으면 std::string로 써야 먹는다 (불연속 네임스페이스)
    myFunc();
    first_space::myFunc(); // 중첩
    third_space::myFunc();

    return 0;
}
