#include <iostream>
#include <set>
#include <string>

using namespace std;

template <typename T, typename C>
void PrintSetElement(set<T, C>& s)
{
    for(const auto& ele : s)
    {
        cout << ele << " " << endl;
    }
}

class Todo
{
private:
    int priority;
    string jobDesc;

public:
    // priority(nPriority), jobDesc(strJobDesc) 초기화 한다 선언법 
    Todo(int nPriority, string strJobDesc) 
        : priority(nPriority), jobDesc(strJobDesc) 
    {
    }

// #if 0
//     // 재정의부분
//     bool operator<(const Todo& t) const
//     {
//         if(priority == t.priority)
//         {
//             return jobDesc < t.jobDesc;
//         }

//         return priority > t.priority;
//     }
// #endif
    friend class TodoCmp;

    friend ostream& operator<<(ostream& o, const Todo& td);
};

class TodoCmp
{
public:    
    bool operator()(const Todo& t1, const Todo& t2) const
    {
        if(t1.priority == t2.priority)
        {
            return (t1.jobDesc < t2.jobDesc);
        }

        return (t1.priority > t2.priority);
    }
};

ostream& operator<<(ostream& o, const Todo& td)
{
    o << "[Priority : " << td.priority << "]" << td.jobDesc;
    return o;
}

int main()
{
    // set<Todo> todos;
    set<Todo, TodoCmp> todos;

    todos.insert(Todo(1, "excercise C++"));
    todos.insert(Todo(2, "excercise math"));
    todos.insert(Todo(1, "Programming Project"));
    todos.insert(Todo(3, "Meet friends"));
    todos.insert(Todo(2, "Watching movie"));
    // 오류나는 이유 L-value R-value라는 개념이 생겨서?
    // Todo가 정의가 안돼서 set안에 못들어감

    PrintSetElement(todos);

    cout << "=============================================" << endl;
    cout << "if you complete excercise math" << endl;
    todos.erase(todos.find(Todo(2, "excercise math")));
    PrintSetElement(todos);

    return 0;
}