#include <iostream>
#include <exception>

using namespace std;

void ExceptHandler()
{
    cout << "Exception!!!" << endl;

    exit(-1); // 강제 종료 시키기
}

struct MyException : public exception
{
    const char* what() const throw()
    {
        return "Defining new exception ~ !";
    }
};

class DefException : public exception
{
    virtual const char* what() const throw()
    {
        return "Defining new class exception ~ !";
    }
};

int main()
{
//     set_terminate(ExceptHandler); // catch 처리 핸들러 등록시켜서 사용?

//     try
//     {
//         throw 1;
//     }
//     catch(char* const ex)
//     {
//         // cannot process integer exception
//     }

    try
    {
        // throw DefException();
        int* nArr = new int[1000];
        delete nArr;
    }
    catch(exception& e)
    {
        cout << "Standard Exception Caugth" << endl;
        cout << e.what() << endl;
    }
    // catch(const exception& e)
    // {
    //     // other error 
    // }
    
    return 0;
}