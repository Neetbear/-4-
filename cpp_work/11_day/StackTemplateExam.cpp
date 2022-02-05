#include <iostream>
#include <vector>
#include <cstdlib>
#include <string>
#include <stdexcept>

using namespace std;

template <class T> // typename 대신에 class
class CStack
{
private:
    vector<T> elements;
public:
    void push(T const&);    // push element
    void pop();             // pop element
    T top() const;          // return top element
                            // const가 뒤에 붙으면 이 함수에서는 어떤 값도 변경 불가
    bool empty() const      // vector empty check function
    {
        return elements.empty();
    }
};

int main()
{
    try
    {
        CStack<int> nStack;         // integer class
        CStack<string> strStack;    // string class

        // manipulate integer stack
        nStack.push(25);
        cout << "nStack top element : " << nStack.top() << endl;

        // manipulate string stack
        strStack.push("Hello Stack");
        strStack.push("Hello C++");
        strStack.push("Hello World");
        // strStack.pop();
        cout << "strStack top element : " << strStack.top() << endl;

        strStack.pop();
        strStack.pop();
    }
    catch(const std::exception& ex)
    {
        cerr << "Exception : " << ex.what() << '\n';
        return -1;
    }
    
    return 0;
}

template <class T>
void CStack<T>::push(T const& elem)
{
    elements.push_back(elem); // push_back은 vector의 내장함수
}

template <class T>
void CStack<T>::pop()
{
    if(elements.empty())
    {
        throw out_of_range("CStack<>::pop() : empty stack");
    }

    // remove last(top) element
    elements.pop_back();
}

template <class T>
T CStack<T>::top() const
{
    if(elements.empty())
    {
        throw out_of_range("CStack<>::top() : empty stack");
    }

    // return copy of last(top) element
    return elements.back();
}